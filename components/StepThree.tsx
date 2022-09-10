import { NextComponentType } from "next"
import { selector, useRecoilState, useRecoilValue } from "recoil";
import { endOfShiftReached, hasShiftStartedAtom, middleOfShiftReached, triggerTimerAtom } from "../Atoms";

import React, { useEffect, useState } from "react"
import CountdownClock from "./CountdownClock";

//@ts-ignore
import ReactHowler from 'react-howler'

const hasShiftStartedSelector = selector({
  key: 'hasShiftStartedSelector', 
  get: ({get}) => {
    const hasShiftStarted = get(hasShiftStartedAtom);
    
    //@ts-ignore
    return hasShiftStarted;
  },
});

const StepThree: NextComponentType = () => {
  const hasShiftStarted = useRecoilValue(hasShiftStartedSelector);
  const [midShift, setMidShift] = useRecoilState(middleOfShiftReached);
  const [endShift, setEndShift] = useRecoilState(endOfShiftReached);
  const [time, setTime] = useRecoilState(triggerTimerAtom);

  const [mins, setMins] = useState<number>(0);
  const [secs, setSecs] = useState<number>(0);
  const [soundPlaying, setSound] = useState({sound1: false, sound2: false, sound3: false});

  let isPlayingSound = false

  const timeMins = time * 60 * 1000;
  //@ts-ignore
  let shiftEndTime = new Date().getTime() + timeMins;

  useEffect(() => {

    let updateTime = setInterval(() => {
      let now = new Date().getTime();

      let difference = shiftEndTime - now;

      let newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let newSeconds = Math.floor((difference % (1000 * 60)) / 1000);


      if (newMinutes == 15 && newSeconds == 0) {
        setSound({sound1: true, sound2: false, sound3: true,})
        setMidShift(true)
      }

      if(hasShiftStarted) {
        document.title = `${Array.from(newMinutes.toString()).map(Number).length == 1 ? 0 : Array.from(newMinutes.toString()).map(Number)[0]}${Array.from(newMinutes.toString()).map(Number).length == 1 ? Array.from(newMinutes.toString()).map(Number)[0] : Array.from(newMinutes.toString()).map(Number)[1]}:${Array.from(newSeconds.toString()).map(Number).length == 1 ? 0 : Array.from(newSeconds.toString()).map(Number)[0]}${Array.from(newSeconds.toString()).map(Number).length == 1 ? Array.from(newSeconds.toString()).map(Number)[0] : Array.from(newSeconds.toString()).map(Number)[1]} - USDF Shift Tracker`
      }

      if (newMinutes >= 0 && newSeconds >= 0) {
        setMins(newMinutes);
        setSecs(newSeconds);
      } else {
        if (!endShift) {
          setEndShift(true);
          setSound({sound1: false, sound2: true, sound3: true,})

          setMins(0);
          setSecs(0);

          document.title = `End of Shift - USDF Shift Tracker`
          clearInterval(updateTime);
        }
      }

    })

    return () => {
      clearInterval(updateTime);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);


  return (
    <div className="flex flex-col items-center py-2">
      {hasShiftStarted && 
        <div className="flex flex-col items-center py-2">
        {/* @ts-ignore */}
        <h1 className="text-emerald-400 font-bold text-xl md:text-xl font-raleway mt-4 rounded-xl hover:rounded-xl hover:shadow-lg hover:shadow-emerald-600 hover:bg-emerald-500 hover:text-emerald-100 px-4 py-2 transition duration-300 ease-in ">Your done! Your shift has begun! Your mid will be at :{Array.from(new Date(hasShiftStarted.getTime() + 15*60000).getMinutes().toString()).map(Number).length == 1 ? "0" + new Date(hasShiftStarted.getTime() + 15*60000).getMinutes() : new Date(hasShiftStarted.getTime() + 15*60000).getMinutes() } & the shift will end at :{Array.from(new Date(hasShiftStarted.getTime() + 30*60000).getMinutes().toString()).map(Number).length == 1 ? "0" + new Date(hasShiftStarted.getTime() + 30*60000).getMinutes() : new Date(hasShiftStarted.getTime() + 30*60000).getMinutes() }.</h1>
        <p className="text-emerald-300 font-semibold text-center ">{ endShift ? `You have completed your shift! Please refresh the page to start a new shift` :  midShift ? `We will let you know with a sound notification when you have reached the end of the shift and provide the end-shift message!` : `We will let you know with a sound notification when you have reached Mid and provide the mid-shift message!`}</p>    

        <CountdownClock         
          minutes={Array.from(mins.toString()).map(Number).length == 1 ? 0 : Array.from(mins.toString()).map(Number)[0]}
          minute={Array.from(mins.toString()).map(Number).length == 1 ? Array.from(mins.toString()).map(Number)[0] : Array.from(mins.toString()).map(Number)[1]}
          seconds={Array.from(secs.toString()).map(Number).length == 1 ? 0 : Array.from(secs.toString()).map(Number)[0]}
          second={Array.from(secs.toString()).map(Number).length == 1 ? Array.from(secs.toString()).map(Number)[0] : Array.from(secs.toString()).map(Number)[1]}
        />

        <ReactHowler
          src='/mid-shift.mp3'
          playing={soundPlaying.sound1}
          volume={0.4}
          loop={false}
          onEnd={() => setSound({sound1: false, sound2: false, sound3: true})}
        />

        <ReactHowler
          src='/end-shift.mp3'
          playing={soundPlaying.sound2}
          volume={0.4}
          loop={false}
          onEnd={() => setSound({sound1: false, sound2: false, sound3: true})}
        />

        <ReactHowler
          src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
          playing={soundPlaying.sound3}
          volume={0.2}
          loop={false}
          onEnd={() => setSound({sound1: false, sound2: false, sound3: false})}
      />

      </div> 
      }
    </div>  
  )
}

export default StepThree