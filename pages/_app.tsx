import React from 'react';
import { AppProps } from 'next/app';

import Head from 'next/head';

import '../styles/globals.css'

const MyApp:React.FC<AppProps> = ({Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>OneBitCode</title>
        <meta name="viewport" content="inital-scale=1.0, width=divice-width" />
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
