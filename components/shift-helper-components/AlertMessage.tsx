import { NextComponentType } from "next"
import { Alert } from "flowbite-react"

import React, { useState } from "react"

const AlertMessage: NextComponentType = () => {
  const [isOpen, setOpen] = useState(true);
  const toggleMenu = () => setOpen(!isOpen);

  return (
    <div>
    {isOpen && (
    <Alert
      color="success"
      rounded={false}
      withBorderAccent
      onDismiss={toggleMenu}
      additionalContent={
        <React.Fragment>
          <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
            This website is not affiliated or hosted by USDF in any way. It is simply a tool to help USDF members 
            with shift time management.<br></br> Please do not approach USDF staff for help or feature requests. If any issues are found with the website, please contact NefariousZ <br></br>via Discord.
          </div>
          <div className="flex">
            <button
              type="button"
              className="mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900"
              onClick={toggleMenu}
            >
              Okay!
            </button>
            <button
              type="button"
              className="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white"
              onClick={toggleMenu}
            >
              Dismiss
            </button>
          </div>
        </React.Fragment>
      }
    >
    <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
        Welcome to the USDF Shift Helper!
      </h3>
    </Alert>
     )}
    </div>
  )
}

export default AlertMessage