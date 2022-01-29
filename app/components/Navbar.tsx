export default function Navbar() {
  const prefersDarkMode = true;
  return (
    <nav className="navbar">
      <img src={prefersDarkMode ? '/images/site-logo-light.svg' : '/images/site-logo.svg'} alt="" className="navbar__logo" />
    </nav>
  );
}