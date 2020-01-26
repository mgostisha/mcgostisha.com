import React from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import Header from '../components/Header';
import Page from '../components/Page';
import SEO from '../components/SEO';

const HomePage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Page title={siteTitle}>
      <SEO />
      <Header showLarge title="mcgostisha" />
      <Bio />
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
