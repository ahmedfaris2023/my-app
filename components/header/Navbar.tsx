import style from "./header.module.css";
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div>
        <Link href="/" className={style.logo}>
          CLOUD
          <GrTechnology /> HOSTING
        </Link>
      </div>
      <ul className={style.navlinks}>
        <Link className={style.navLink} href="/">
          Home
        </Link>
        <Link className={style.navLink} href="/articles">
          Articles
        </Link>
        <Link className={style.navLink} href="/about">
          About
        </Link>
        <Link className={style.navLink} href="/admin">
          Admin Dashboard
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
