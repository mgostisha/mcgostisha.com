import React from 'react';
import { graphql } from 'gatsby';

import BlogLayout from '../components/BlogLayout';
import Page from '../components/Page';
import SEO from '../components/SEO';

const TIL = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Page>
      <BlogLayout location={location} title={siteTitle}>
        <SEO title="TIL" />
        This is where some TILs would go!
      </BlogLayout>
    </Page>
  );
};

export default TIL;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
