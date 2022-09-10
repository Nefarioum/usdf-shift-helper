import { NextComponentType } from "next"

import { Combobox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from "react"

import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useRecoilState } from "recoil"
import { selectedShiftAtom } from "../Atoms"

const ShiftOptions = [
    { id: 1, text: 'Welcome Desk', abbreviation: 'WD'},
    { id: 2, text: 'Front Row', abbreviation: 'FR'},
    { id: 3, text: 'Left Duty Desk Operator', abbreviation: 'LDDO'},
    { id: 4, text: 'Right Duty Desk Operator', abbreviation: 'RDDO'},
    { id: 5, text: 'Left Sentry', abbreviation: 'LSentry'},
    { id: 6, text: 'Right Sentry', abbreviation: 'RSentry'},
    { id: 7, text: 'Info Desk', abbreviation: 'ID'}
]

const ShiftSelection: NextComponentType = () => {
    const [shiftOption, setShiftOption] = useRecoilState(selectedShiftAtom)
    const [query, setQuery] = useState('')
  
    const filteredPeople =
      query === ''
        ? ShiftOptions
        : ShiftOptions.filter((Shift) =>
            Shift.text
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          )
  
    return (
      <Combobox value={shiftOption} onChange={setShiftOption} nullable>
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-none rounded-r-lg bg-white text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full p-2.5 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 dark:bg-gray-700 bg-gray-50 border-gray-300"
              //@ts-ignore
              displayValue={(shift) => shift?.text}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Select your shift!"
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((shift) => (
                  <Combobox.Option
                    key={shift.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={shift}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {shift.text}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    )
}

export default ShiftSelection;