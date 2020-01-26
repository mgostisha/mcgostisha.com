import React, { Fragment } from 'react';

import Header from './Header';

const BlogLayout = ({ location, children }) => {
  const rootPath = '/blog';
  
  return (
    <Fragment>
      <Header
        showLarge={location.pathname === rootPath}
        title="mcgostisha.blog"
        to="/blog"
      />
      <main>{children}</main>
    </Fragment>
  );
};

export default BlogLayout;
