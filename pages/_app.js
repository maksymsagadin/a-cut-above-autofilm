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
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
        <meta name="description" content="Paint Protection Film by those who care!" />
        <meta property="og:title" content="A Cut Above Autofilm" />
        <meta property="og:description" content="Paint Protection Film by those who care!" />
        <link rel="icon" href="/knife-color.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
