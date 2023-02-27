import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>📰 News App</title>
        <meta name="description" content="News app - The best app to read news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>📰 News App</header>
      <Component {...pageProps} />
    </>
  )
}
