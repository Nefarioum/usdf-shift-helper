import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-800 flex-col items-center py-2">
      <Head>
        <title>USDF Shift Helper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-emerald-200 font-bold text-2xl md:text-4xl font-manrope mt-4 rounded-xl hover:rounded-xl hover:shadow-lg hover:shadow-emerald-600 hover:bg-emerald-500 hover:text-emerald-100 px-4 py-2 transition duration-300 ease-in ">
      USDF Shift Helper
        </h1>

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>

        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            @
        </span>
        
          <input type="text" id="website-admin" className="outline-0 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="NefariousZ"></input>
        </div>

        <Image className="pixelated" src={"https://www.habbo.com/habbo-imaging/avatarimage?user=NefariousZ&direction=2&head_direction=2&action=crr=667&gesture=srp"} alt="" width="64px" height="110px"></Image>


    </div>
  )
}

export default Home