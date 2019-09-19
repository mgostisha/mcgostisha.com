import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

const Layout = ({ location, title, children }) => {
  const rootPath = '/blog';
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {`${title}.blog`}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {`${title}${location.pathname === '/' ? '' : '.blog'}`}
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer
        style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between', alignItems: 'flex-end' }}
      >
        <div
          style={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'flex-end', alignItems: 'flex-start' }}
        >
          <div>© Martin Gostisha {new Date().getFullYear()}</div>
          <div>
            <a
              href="https://twitter.com/mg0stisha"
              target="_blank"
              rel="noreferrer noopener"
              style={{ marginRight: '8px' }}
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/mg0stisha"
              target="_blank"
              rel="noreferrer noopener"
              style={{ marginRight: '8px' }}
            >
              Instagram
            </a>
            <a
              href="https://github.com/mg0stisha"
              target="_blank"
              rel="noreferrer noopener"
              style={{ marginRight: '8px' }}
            >
              Github
            </a>
          </div>
        </div>
        <div style={{ marginTop: '8px' }}>
          Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
