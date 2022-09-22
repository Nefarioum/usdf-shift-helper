import { NextComponentType } from "next"

import React from "react"
import { selector, useRecoilValue } from "recoil";
import { selectedNameAtom } from "../../Atoms";

const SelectedNameOption = selector({
  key: 'selectorName3', 
  get: ({get}) => {
    const selectedName = get(selectedNameAtom);
    
    //@ts-ignore
    return selectedName.changed;
  },
});

const SelectYourBranch: NextComponentType = () => {
  const SelectedName = useRecoilValue(SelectedNameOption);

  return (
    <div className="flex flex-col items-center py-2">
      {SelectedName &&
        <div className="flex flex-col items-center py-2">
            <h1 className="text-emerald-400 font-bold text-xl md:text-xl font-raleway mt-4 rounded-xl hover:rounded-xl hover:shadow-lg hover:shadow-emerald-600 hover:bg-emerald-500 hover:text-emerald-100 px-4 py-2 transition duration-300 ease-in ">Select which branch you are from!</h1>

              <ul className="grid gap-6 w-full md:grid-cols-4">
                  <li>
                      <input type="radio" id="navy-option" name="hosting2" value="" className="hidden sr-only peer"></input>
                      {/*@ts-ignore */}
                      <label htmlFor="navy-option" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-800 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                          <div className="block">
                              {/* Image here */}
                              <div className="w-full text-lg font-semibold">Navy</div>
                              <div className="w-full text-sm">The United States Navy</div>
                          </div>
                      </label>
                  </li>
                  <li>
                      <input type="radio" id="marines-option"  name="hosting2" value="" className="hidden sr-only peer"></input>
                       {/*@ts-ignore */}
                      <label htmlFor="marines-option" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-red-800 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <div className="block">
                              {/* Image here */}
                              <div className="w-full text-lg font-semibold">Marines</div>
                              <div className="w-full text-sm">The United States Marine Corp.</div>
                          </div>
                      </label>
                  </li>
                  <li>
                      <input type="radio" id="airforce-option"  name="hosting2" value="" className="hidden peer"></input>
                       {/*@ts-ignore */}
                      <label htmlFor="airforce-option" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-200 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <div className="block">
                              {/* Image here */}
                              <div className="w-full text-lg font-semibold">Air Force</div>
                              <div className="w-full text-sm">The United States Air Force</div>
                          </div>
                      </label>
                  </li>
                  <li>
                      <input type="radio" id="army-option" name="hosting2" value="" className="hidden peer"></input>
                       {/*@ts-ignore */}
                      <label htmlFor="army-option" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-emerald-700 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <div className="block">
                              {/* Image here */}
                              <div className="w-full text-lg font-semibold">Army</div>
                              <div className="w-full text-sm">The United States Army.</div>
                          </div>
                      </label>
                  </li>
              </ul>
        </div>
      }
    </div>
  )
}

export default SelectYourBranch