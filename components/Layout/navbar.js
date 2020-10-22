import Link from "next/link";
import NavLink from "./navLink";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
      <Link href="/"><a className="navbar-brand">Ayaan Siddiqui</a></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <NavLink href="/"><a className="nav-link">Home</a></NavLink>

          <NavLink href="/portfolio"><a className="nav-link">Portfolio</a></NavLink>

          <NavLink href="/resume"><a className="nav-link">Resume</a></NavLink>

          <NavLink href="/about"><a className="nav-link">About</a></NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;