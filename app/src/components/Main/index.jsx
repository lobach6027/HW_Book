import React from "react";
import s from "./style.module.css";
import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.information}>
          <div className={s.congrat}>
            <div>
              <img src="images/Rectangle.png" alt="" />
            </div>
            <div className={s.congrat_text}>Welcome to Pages!!!</div>
          </div>
          <div className={s.title}>Your Books From</div>
          <div className={s.title}>The Best Writer.</div>
          <p className={s.text}>
            We believe that reading books are essential to a healthy culture.
          </p>
          <p className={s.text}>
            They’re where authors can connect with readers.
          </p>
          <div className={s.reference_block}>
            <div className={s.block_order}>
              <NavLink to="/order">Order Today</NavLink>
            </div>
            <p className={s.reference_text}>Read Free Demo</p>
          </div>

          <div className={s.addendum_info}>
            <div>
              <div className={s.addendum_title}>
                <img src="images/sircle.png" alt="point" />
                <div> Pages:</div>
              </div>
              <div className={s.addendum_text}>250divages</div>
            </div>
            <div>
              <div className={s.addendum_title}>
                <img src="images/sircle.png" alt="point" />
                <div> Length:</div>
              </div>
              <div className={s.addendum_text}>10 Hours</div>
            </div>
            <div>
              <div className={s.addendum_title}>
                <img src="images/sircle.png" alt="point" />
                <div>Rating:</div>
              </div>
              <div className={s.addendum_text}>4.5/5 (305 ratings)</div>
            </div>
          </div>
        </div>

        <div className={s.image}>
          <img src="images/IMAGE.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
}
