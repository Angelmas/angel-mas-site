import React from "react"
import Layout from '../components/Layout'

import './stylesheets/index.scss'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <div>
        <a href="https://aboutmonica.com/">https://aboutmonica.com/</a>
        <a href="https://www.ryrob.com/">https://www.ryrob.com/</a>
        <a href="https://jeffjadulco.com/blog/welcome">https://jeffjadulco.com/blog/welcome</a>
        <a href="https://aboutmonica.com/">https://aboutmonica.com/</a>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home | Angel Mas Site</title>
