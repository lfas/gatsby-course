import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My Blog</h1>
    <p><Link to="/about">About</Link></p>
  </Layout>
)

export default IndexPage
