import React from 'react'
import Hero from '../components/hero/hero'
import About from '../components/about/about'
import Projects from '../components/projects/projects'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title='Home' />
        <Hero />
        <About />
        <Projects />
    </Layout>
)

export default IndexPage
