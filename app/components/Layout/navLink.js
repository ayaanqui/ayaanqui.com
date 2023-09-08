import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ href, children }) => {
  const router = useRouter();

  let active = '';
  if (router.pathname === href) {
    active = 'active';
  }

  return (
    <li className={`nav-item ${active}`}>
      <Link href={href}>
        {React.cloneElement(children)}
      </Link>
    </li>
  );
};

export default NavLink;