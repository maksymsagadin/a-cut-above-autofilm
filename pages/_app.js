import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Layout } from '../components'

import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>A Cut Above Autofilm</title>
        <meta name="description" content="Paint Protection Film" />
        <link rel="icon" href="/knife-color.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
