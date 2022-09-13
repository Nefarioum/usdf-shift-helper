import { NextComponentType } from "next"

import React from "react"
import NumberArea from "./NumberArea"

interface CountdownProps{
    minutes: number | string,
    minute:number | string ,
    seconds:number | string,
    second:number | string,
  }

const CountdownClock = ({minutes, minute, seconds, second}: CountdownProps) => {
  let MinutesFlip = false;
  let MinuteFlip = false;
  let SecondsFlip = false;
  let SecondFlip = true;

  if (seconds <=0 && minutes <=0 && second <=0 && minute <=0){
    MinutesFlip =  false;
    MinuteFlip =  false;
    SecondsFlip = false;
    SecondFlip = false;
  }

  if (second == 0 && second != 0 && minute != 0 && minutes != 0) {
    SecondsFlip = true;
    SecondFlip = false;
  }

  if (seconds == 0 && second == 0 && minute != 0 && minutes != 0) {
    MinuteFlip = true;
    SecondsFlip = false
  }

  if (minute == 0 && seconds == 0 && second == 0 && minutes != 0) {
    MinutesFlip = true;
    MinuteFlip = false;
  } 

  if (minute == 0 && seconds == 0 && second == 0 && minutes == 0) {
    SecondsFlip = false;
  } 

  return (
    <div className="flex flex-col items-center py-2">
        <div className="rounded-xl">
       <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2  rounded-xl md:px-6 md:py-8 ">
            <NumberArea num={minutes} unit="Minutes" flip={MinutesFlip} />
            <span className=" hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 "></span>
            <NumberArea num={minute} unit="Minute" flip={MinuteFlip} />
            <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">:</span>
            <NumberArea num={seconds} unit="Seconds" flip={SecondsFlip}/>
            <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 "></span>
            <NumberArea num={second} unit="Second" flip={SecondFlip} />
        </div>
   
      </div>
    </div>
  )
}

export default CountdownClock