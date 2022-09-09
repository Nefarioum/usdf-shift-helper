import { NextComponentType } from "next"

import React, { useState } from "react"
import { selector, useRecoilState, useRecoilValue } from "recoil";
import { hasShiftStartedAtom, selectedNameAtom, selectedShiftAtom } from "../Atoms";

import { toast } from 'react-hot-toast';


const SelectedShiftOption = selector({
  key: 'selctorShift', 
  get: ({get}) => {
    const shiftDetails = get(selectedShiftAtom);
    
    //@ts-ignore
    return shiftDetails?.abbreviation;
  },
});

const SelectedNameOption = selector({
  key: 'selectorName', 
  get: ({get}) => {
    const selectedName = get(selectedNameAtom);
    
    //@ts-ignore
    return selectedName?.name;
  },
});

const StepTwo: NextComponentType = () => {
  const SelectedShift = useRecoilValue(SelectedShiftOption);
  const SelectedName = useRecoilValue(SelectedNameOption);

  const [StartedStatus, setStartStatus] = useRecoilState(hasShiftStartedAtom)

  const CurrentTime = new Date
  const CurrentMinutes = CurrentTime.getMinutes();

  let StartMessage = SelectedName + ' 0.5 ' + SelectedShift + ' Start :' + (CurrentMinutes.toString().length === 1 ? '0' + CurrentMinutes  : CurrentMinutes);
  return (

    <div className="flex flex-col items-center py-2">
      {SelectedShift &&
        <div className="flex flex-col items-center py-2">
        <h1 className="text-emerald-400 font-bold text-xl md:text-xl font-raleway mt-4 rounded-xl hover:rounded-xl hover:shadow-lg hover:shadow-emerald-600 hover:bg-emerald-500 hover:text-emerald-100 px-4 py-2 transition duration-300 ease-in ">Step 2: Start your shift and copy your message!</h1>
        <p className="text-emerald-300 font-semibold text-center ">We will let you know with a sound notification when you have reached Mid and provide the mid-shift message!</p>

      <div className="relative w-full pt-4">
          <input type="search" id="search" className="block p-2 pl-4 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300" placeholder="Search" disabled value={StartMessage}></input>
          <button type="submit" className="text-white absolute right-0 bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700" onClick={() => {
            navigator.clipboard.writeText(StartMessage);

            toast.success("Successfully copied your start message to keyboard & started your shift!")
            setStartStatus(CurrentTime);
            }}>Copy & Start Shift</button>
      </div>


        <label className="block mb-2 text-sm font-medium text-emerald-400 pt-16">Upload file - Coming soon!</label>
        <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"></input>
        <p className="mt-1 text-sm text-emerald-400" id="file_input_help">SVG, PNG, JPG or GIF only.</p>)
      </div>
      
      } 

    </div>  
  )
}

export default StepTwo