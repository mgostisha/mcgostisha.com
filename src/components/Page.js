import React from 'react';

import Footer from '../components/Footer';
import { rhythm } from '../utils/typography';

import '../styles/main.css';

const Page = ({ children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {children}
      <Footer />
    </div>
  );
};

export default Page;
