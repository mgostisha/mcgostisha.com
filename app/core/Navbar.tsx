import { useEffect, useState } from 'react';
import { Link } from '~/core';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" aria-label="Back to home page">
        <img src={theme === 'light' ? '/images/site-logo.svg' : '/images/site-logo-light.svg'} alt="" className="navbar__logo" />
      </Link>
    </nav>
  );
}