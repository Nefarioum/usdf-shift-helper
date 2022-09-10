import type { NextPage } from 'next'
import Head from 'next/head'

import StepOne from '../components/StepOne'
import AlertMessage from '../components/AlertMessage'
import Footer from '../components/Footer'
import StepTwo from '../components/StepTwo'
import StepThree from '../components/StepThree'


const ShiftHelper: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-800 flex-col items-center py-2">
      <Head>
        <title>Habbo USDF Shift Helper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-emerald-200 font-bold text-2xl md:text-4xl font-raleway mt-4 rounded-xl hover:rounded-xl hover:shadow-lg hover:shadow-emerald-600 hover:bg-emerald-500 hover:text-emerald-100 px-4 py-2 transition duration-300 ease-in ">
        Habbo USDF Shift Helper
      </h1>

      <AlertMessage />
      <StepOne />
      <StepTwo />
      <StepThree />
      
      <Footer />
    </div>
  )
}

export default ShiftHelper