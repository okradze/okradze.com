import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout/layout'
import '../index.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme='dark'>
      <Head>
        <title>Mirian Okradze | A Software Developer</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
