import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./style.module.css";

export default function Header() {
    const checkClass = ({isActive})=>isActive ? s.active:''
  return (
    <header className={s.wrapper}>
      <div className={s.header_block}>
        <div className={s.logo}>
          <img src="images/IMAGE.png" alt="logo" />
        </div>
        <div className={s.social}>
          <img src="images/facebook.png" alt="" />
          <img src="images/twiter.png" alt="" />
          <img src="images/linkedln.png" alt="" />
        </div>
        <nav className={s.navigation}>
          <NavLink className={checkClass} to="/">Home</NavLink>
          <NavLink className={checkClass} to="/author">Author</NavLink>
          <NavLink className={checkClass} to="/companies">Companies</NavLink>
          <NavLink className={checkClass} to="/articles">Articles</NavLink>
        </nav>
        <div className={s.order}>
          <div className={s.block_order}>
            <Link to="/order">Order Today</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
