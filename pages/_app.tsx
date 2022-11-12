import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
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
