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
        <meta name='keywords' content='Paint Protection Film, PPF, Vinyl, A, Cut, Above, Wrap'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Paint Protection Film by those who care!" />
        <meta property="og:title" content="A Cut Above Autofilm" />
        <meta property="og:description" content="Paint Protection Film by those who care!" />
        <link rel="icon" href="/knife-color.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,800;1,700&display=swap" rel="stylesheet" />
      </Head>
      <Component className='font-raleway' {...pageProps} />
    </Layout>
  )
}

export default MyApp
