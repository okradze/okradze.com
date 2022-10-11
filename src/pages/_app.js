import Head from 'next/head'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout/layout'
import '../index.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme='dark'>
      <Head>
        <title>Mirian Okradze | A Software Engineer</title>
      </Head>
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-6D0PQ7GJ0L'
      ></Script>

      <Script id='google-analytics' strategy='afterInteractive'>
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-6D0PQ7GJ0L');
         `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
