import React from 'react'
import Switch from './switch/switch'
import Footer from './footer/footer'
import '../index.scss'

const Layout = ({ children }) => (
    <>
        <Switch />
        {children}
        <Footer />
    </>
)

export default Layout
