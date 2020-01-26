import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/Bio';
import SEO from '../components/SEO';
import Page from '../components/Page';

const HomePage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Page title={siteTitle}>
      <SEO />
      <Bio />
      <Link to={`/blog`}>.blog</Link>
    </Page>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
