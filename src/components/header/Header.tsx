import Link from "next/link";
import style from "./header.module.css";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <header className={style.header}>
      <Navbar />
      <div className={style.right}>
        <Link className={style.btn} href="/login">
          Login
        </Link>
        <Link className={style.btn} href="/register">
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
