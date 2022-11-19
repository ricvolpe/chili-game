import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { init } from "@socialgouv/matomo-next";
import React, { useEffect } from "react";

const MATOMO_URL = 'https://analytics.volpato.io/'
const MATOMO_SITE_ID = '2'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return (
    <div>
      <Head>
        <title>The Chilli Game</title>
        <meta name="description" content="A spicy game to get to know each other" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </div>
  )
}
