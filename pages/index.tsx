import type { NextPage } from 'next'
import Head from 'next/head'

import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-800 flex-col items-center py-2">
      <Head>
        <title>Habbo USDF Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-emerald-400 font-bold text-xl md:text-xl font-raleway mt-4 rounded-xl hover:rounded-xl hover:shadow-lg hover:shadow-emerald-600 hover:bg-emerald-500 hover:text-emerald-100 px-4 py-2 transition duration-300 ease-in ">Habbo USDF Tools</h1>
      <a className="text-emerald-300 font-raleway italic text-sm" href="/shift-helper">Shift Helper</a>
      <p className="text-emerald-500 font-semibold font-raleway italic text-sm pt-4">More tools coming soon!</p>

      <Footer />
    </div>
  )
}

export default Home