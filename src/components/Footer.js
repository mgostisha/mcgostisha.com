import React from 'react';

const Footer = () => {
  return (
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
  );
}

export default Footer;