import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header'
import Helmet from 'react-helmet'
import './index.css'
import Footer from '../components/Footer'

const Layout = ({ children, data }) => (
  <div>
    {/* <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    /> */}
    <Header />    
    {children()}
    {/* <Footer links={data.allContentfulLink.edges}>
    Backgrounds made in Cinema 4D, iOS app in Swift, site in React. <a href="mailto:support@designcode.io">Email us</a> to ask anything. © 2022
    </Footer> */}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          title
          url
          createdAt
        }
      }
    }
  }
`