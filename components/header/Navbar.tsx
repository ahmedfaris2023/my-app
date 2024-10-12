"use client";

import style from "./header.module.css";
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className={style.navbar}>
      <div>
        <Link href="/" className={style.logo}>
          CLOUD
          <GrTechnology /> HOSTING
        </Link>
        <div className={style.menu}>
          {toggle ? (
            <IoMdClose onClick={() => setToggle((prev) => !prev)} />
          ) : (
            <AiOutlineMenu onClick={() => setToggle((prev) => !prev)} />
          )}
        </div>
      </div>
      <div
        className={style.navLinksWrapper}
        style={{
          clipPath: (toggle && "polygon(0 0,100% 0 ,100% 100%,0 100%") || "",
        }}
      >
        <ul className={style.navLinks}>
          <Link
            onClick={() => setToggle(false)}
            className={style.navLink}
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setToggle(false)}
            className={style.navLink}
            href="/articles"
          >
            Articles
          </Link>
          <Link
            onClick={() => setToggle(false)}
            className={style.navLink}
            href="/about"
          >
            About
          </Link>
          <Link
            onClick={() => setToggle(false)}
            className={style.navLink}
            href="/admin"
          >
            Admin Dashboard
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
