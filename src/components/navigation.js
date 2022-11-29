import "./navigation.css";
import DecodeLogo from "./decodeslogo";
import "../logo.css";

function Navbar() {
  return (
    <header>
      <nav className="logo">
        <DecodeLogo />
        <h3 className="name">Decodes</h3>
      </nav>

      <nav>
        <a href="/#">Projects</a>
        <a href="/#">Team</a>
        <a href="/#">About</a>
      </nav>

      <button>Connect</button>
    </header>
  );
}

export default Navbar;
