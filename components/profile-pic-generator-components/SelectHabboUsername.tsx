import { NextComponentType } from "next"

import Image from "next/image"
import React from "react"
import { useRecoilState } from "recoil"
import { selectedNameAtom } from "../../Atoms"

//@ts-ignore
import { debounce } from 'lodash';

const NameLookup: NextComponentType = () => {
  const [UserLink, setUserLink] = useRecoilState(selectedNameAtom)

  const handleChange = async (e:any) => {
    debouncedSearch(e)
  }

  const debouncedSearch = debounce(function (e:any) {
    setUserLink({name: e.target.value, link:`https://www.habbo.com/habbo-imaging/avatarimage?user=${e.target.value}&direction=2&head_direction=3&action=&gesture=nrm`, changed: true})
  }, 500);
  
  return (
    <div className="flex flex-col items-center py-2">
      <div className="flex flex-col items-center py-2">
      <h1 className="text-emerald-400 font-bold text-xl md:text-xl font-raleway mt-4 rounded-xl hover:rounded-xl hover:shadow-lg hover:shadow-emerald-600 hover:bg-emerald-500 hover:text-emerald-100 px-4 py-2 transition duration-300 ease-in ">Input your Habbo Username to continue!</h1>
    
        <div className="flex mr-5">
        <Image className="ml-4" src={UserLink.link} alt="" width="64px" height="110px"></Image>

          <div className="pr-2">
            <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Username</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 ">
                👤
              </span>

              <input type="text" onChange={(e) => handleChange(e)} className="outline-0 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 focus:ring-0" placeholder="NefariousZ"></input>
            </div>
          </div>

        </div>
        

        </div>

    </div>
  )
}

export default NameLookup