import Image from "next/image";
import Link from "next/link";

function NavItem(props: { link: string; title: string; iconUrl: string }) {
  return (
    <li className="nav-item">
      <a href={props.link} className="nav-link">
        <Image
          src={props.iconUrl}
          width={20}
          height={20}
          alt={`${props.title} Icon`}
          title={`${props.title} Link`}
        />
      </a>
    </li>
  );
}

export default function Navbar(_props: {}) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">Ayaan Siddiqui</a>
        </Link>

        <div className="navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <NavItem
              link="https://github.com/ayaanqui"
              title="GitHub"
              iconUrl="/images/github.png"
            />

            <NavItem
              link="https://www.linkedin.com/in/ayaanqui"
              title="LinkedIn"
              iconUrl="/images/linkedin.png"
            />

            <NavItem
              link="mailto:ayaanqui.com@gmail.com"
              title="Email"
              iconUrl="/images/email.png"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
