import React, { Fragment } from 'react';

import Header from './Header';

const BlogLayout = ({ location, children }) => {
  const showLarge = ['/', '/blog'];
  return (
    <Fragment>
      <Header showLarge={showLarge.indexOf(location.pathname) > -1} title="mcgostisha.blog" to="/blog" />
      <main>{children}</main>
    </Fragment>
  );
};

export default BlogLayout;
