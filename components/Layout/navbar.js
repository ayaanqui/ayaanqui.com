import Link from "next/link";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <a className="navbar-brand" href="/">Ayaan Siddiqui</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link href='/'>
              <a className="nav-link">Home <span className="sr-only">(current)</span></a>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="portfolio">
              <a className="nav-link">Portfolio</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="resume">
              <a className="nav-link">Resume</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="about">
              <a className="nav-link">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;