// Step 1: Import React
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        alt="Rand Al'Thor the Dragon leading his troops."
        src="../images/the-wheel-of-time.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
