import { NextComponentType } from "next"

import React from "react"

const Footer: NextComponentType = () => {
  return (
    <footer className="p-4 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900 fixed bottom-0">
        <hr className="my-3 border-emerald-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
        <span className="block text-sm text-emerald-500 sm:text-center dark:text-gray-400">Made with 💖 by <a href="https://github.com/Nefarioum" className="hover:underline">NefariousZ</a>
        </span>
    </footer>
  )
}

export default Footer