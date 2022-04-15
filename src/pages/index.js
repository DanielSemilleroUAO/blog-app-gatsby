import * as React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import HomeBanner from "components/HomeBanner"
import BlogPostCard from "components/BlogPostCard"
import Seo from "components/SEO"


const IndexPage = ({ data }) => {

  const posts = data.allMarkdownRemark.edges

  console.log(data)
  return (
    <Layout>
      <Seo title="Home" />
      <HomeBanner />
      <main>
        {posts.map(({node}, i) => {
          const title = node.frontmatter.title
           return <BlogPostCard 
            key={i}
            slug="/"
            title={title}
            date={node.frontmatter.date}
            readingTime={node.fields.readingTime.text}
            excerpt={node.excerpt}
            image={node.frontmatter.image.childImageSharp.fluid}
           />
        })}
        
      </main>
    </Layout>
  )
}




export default IndexPage


export const query = graphql`
query blogListQuery {
  allMarkdownRemark(
    filter: {frontmatter: {type: {eq: "post"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    edges {
      node {
        fields {
          readingTime {
            text
          }
        }
        frontmatter {
          date
          title
          image {
            childImageSharp {
              fluid(maxWidth:100, maxHeight:100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`