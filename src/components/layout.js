import React from 'react'
import Header from './header/header'
import Footer from './footer/footer'
import '../index.scss'

const Layout = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
)

export default Layout
