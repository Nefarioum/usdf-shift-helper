import type { NextPage } from 'next'
import Head from 'next/head'

import Link from 'next/link'
import Footer from '../components/Footer'
import ProfilePictureResult from '../components/profile-pic-generator-components/ProfilePictureResult'
import NameLookup from '../components/profile-pic-generator-components/SelectHabboUsername'
import SelectYourBranch from '../components/profile-pic-generator-components/SelectYourBranch'


const ShiftHelper: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-800 flex-col items-center py-2">
      <Head>
        <title>Habbo USDF Profile Picture Generator</title>
        <meta property="canonical" content="https://nefarious.tech/usdf/shift-helper" />
        <meta name="description" content="A tool which allows you to input a username of a player and create a nice looking profile picture." />
        <meta name="keywords" content="Nefarious, Development, Open source, Code, Programmer" />
        <meta name="theme-color" content="#64fab2" />
        <meta property="og:site_name" content="Habbo USDF Profile Picture Generator by NefariousZ" />
        <meta property="og:image" content="https://nefarious.tech/usdf/images/ShiftHelperCoverImage.jpg" />
        <meta property="og:image:secure_url" content="https://nefarious.tech/usdf/images/ShiftHelperCoverImage.jpg" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="560" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image:alt" content="nefarious.tech/usdf/shift-helper" />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="author" content="Nefarious" />
        <link rel="icon" href="/usdf/favicon.ico" />
      </Head>
      <Link href="/"><a className="text-emerald-300 font-raleway text-xs">Go back</a></Link>

      <h1 className="text-emerald-200 font-bold text-2xl md:text-4xl font-raleway mt-4 rounded-xl hover:rounded-xl hover:shadow-lg hover:shadow-emerald-600 hover:bg-emerald-500 hover:text-emerald-100 px-4 py-2 transition duration-300 ease-in ">
        Habbo USDF Profile Picture Generator
      </h1>

      <NameLookup /> 
      <SelectYourBranch />
      <ProfilePictureResult />
 
      
      <Footer />
    </div>
  )
}

export default ShiftHelper