import  React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
    `)
    return (
        <footer>
            <p>{data.site.siteMetadata.author} © 2020</p>
            <Link to="/">Home</Link>
        </footer>
    )
}

export default Footer