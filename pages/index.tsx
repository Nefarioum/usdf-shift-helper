import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-800 flex-col items-center py-2">
      <Head>
        <title>Habbo USDF Tools</title>
        <meta property="canonical" content="https://nefarious.tech/usdf" />
        <meta name="description" content="A set of tools created to aid and help with tasks required to do whilst working at Habbo's USDF" />
        <meta name="keywords" content="Nefarious, Development, Open source, Code, Programmer" />
        <meta name="theme-color" content="#64fab2" />
        <meta property="og:site_name" content="Habbo USDF Tools by NefariousZ" />
        <meta property="og:image" content="https://nefarious.tech/usdf/images/ToolsCoverImage.jpg" />
        <meta property="og:image:secure_url" content="https://nefarious.tech/usdf/images/ToolsCoverImage.jpg" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="560" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image:alt" content="nefarious.tech/usdf/" />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="author" content="Nefarious" />
        <link rel="icon" href="/usdf/favicon.ico" />
      </Head>

      <h1 className="text-emerald-400 font-bold text-xl md:text-xl font-raleway mt-4 rounded-xl hover:rounded-xl hover:shadow-lg hover:shadow-emerald-600 hover:bg-emerald-500 hover:text-emerald-100 px-4 py-2 transition duration-300 ease-in ">Habbo USDF Tools</h1>
      <Link href="/shift-helper"><a className="text-emerald-300 font-raleway italic text-sm">Shift Helper</a></Link>
      <Link href="/profile-pic-generator"><a className="text-emerald-300 font-raleway italic text-sm">Profile Picture Generator</a></Link>
      <p className="text-emerald-500 font-semibold font-raleway italic text-sm pt-4">More tools coming soon!</p>

      <Footer />
    </div>
  )
}

export default Home