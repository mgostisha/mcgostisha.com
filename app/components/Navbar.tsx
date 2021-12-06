import { Link } from '~/core';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar__right">
        <Link to="blog">Blog</Link>
      </div>
    </nav>
  );
}