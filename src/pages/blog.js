import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"

import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'


const IndexPage =


({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <Layout>
    <Helmet>
      <title>Julien Sauvan - Blog</title>
      <meta name="blog" content="Blog of Julien Sauvan, Data Scientist" />
    </Helmet>
     <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Blog</h1>
                        <h2> Work in progress</h2>
                    </header>

                    {/*<div><h4>{Posts}</h4></div>*/}
                </div>
            </section>
        </div>
      </Layout>
}


export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
