import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const Blog = () => {
  const data = useStaticQuery(graphql`
  query	{
    allMarkdownRemark{
      edges{
       node {
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      } 
      }
    }
  }
 `)

  return (
    <Layout>
      <h1>Blog</h1>
      <h2>posts</h2>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <Link to={`/blog/${edge.node.fields.slug}`}>
              <div>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
              </div>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog