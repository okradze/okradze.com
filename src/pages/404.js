import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <main className="not-found">
      <div>
        <h1>Page Not Found</h1>
        <Link to='/'>Go Home</Link>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage
