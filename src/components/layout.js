import React from 'react'
import Footer from './footer/footer'
import '../index.scss'

const Layout = ({ children }) => (
    <>
        {children}
        <Footer />
    </>
)

export default Layout
