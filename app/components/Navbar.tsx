import { Link } from '~/core';

export default function Navbar() {
  const prefersDarkMode = true;
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={prefersDarkMode ? '/images/site-logo-light.svg' : '/images/site-logo.svg'} alt="" className="navbar__logo" />
      </Link>
    </nav>
  );
}