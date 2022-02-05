import Layout from '../components/layout/layout'
import ThemeProvider from '../providers/ThemeProvider'
import '../index.scss'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
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
