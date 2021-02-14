import React from 'react'
import Switch from './switch/switch'
import Footer from './footer/footer'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
import '../index.scss'

const Layout = ({ children }) => (
  <div
    style={{
      backgroundColor: 'var(--bg)',
      color: 'var(--text)',
      transition: 'color 0.2s ease-out, background 0.2s ease-out',
    }}
  >
    <Switch />
    {children}
    <Footer />
  </div>
)

export default Layout
