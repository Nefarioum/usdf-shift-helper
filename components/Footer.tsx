import { NextComponentType } from "next"

import React from "react"

const Footer: NextComponentType = () => {
  return (
    <footer className="p-4 md:px-6 md:py-8  bottom-0">
        <span className="block text-sm text-emerald-500 sm:text-center dark:text-gray-400">Made with 💖 by <a href="https://github.com/Nefarioum" className="hover:underline">NefariousZ</a> <br></br><i className="text-xs"> p.s. navy ontop</i>
        </span>
    </footer>
  )
}

export default Footer