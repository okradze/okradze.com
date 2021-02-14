import React from 'react'
import Hero from '../components/hero/hero'
import Projects from '../components/projects/projects'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Projects />
  </Layout>
)

export default IndexPage
