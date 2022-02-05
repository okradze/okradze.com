import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content="I'm Mirian Okradze, a software developer, focused on building performant web apps"
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
        <link rel='shortcut icon' href='/logo.png' type='image/png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
