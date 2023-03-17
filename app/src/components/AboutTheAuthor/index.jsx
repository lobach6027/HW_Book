import React from "react";
import FotoBlock from "../FotoBlock";
import s from "./style.module.css";

export default function AboutTheAuthor() {
  return (
    <div className={s.wrapper}>
      <FotoBlock/>
      <div className={s.info}>
        <div className={s.title}>About the Author</div>
        <img src="images/Rectangle.png" alt="line" />
        <p className={s.discr}>
          We believe that bookstores are essential to a healthy culture. They’re
          where authors can connect with readers, where we discover new writers,
          where children get hooked on the thrill of reading that can last a
          lifetime.
        </p>
        <div className={s.statistic}>
          <div>
            <div className={s.numbers}>02</div>
            <p className={s.numbers_descr}>Books Published</p>
          </div>
          <img src="images/Line.png" alt="line" />
          <div>
            <div className={s.numbers}>4.5</div>
            <p className={s.numbers_descr}>User Reviews</p>
          </div>
          <img src="images/Line.png" alt="line" />
          <div>
            <div className={s.numbers}>04</div>
            <p className={s.numbers_descr}>Best Seller Awards</p>
          </div>
        </div>
        <div className={s.qr_block}>
          <img src="images/qr.png" alt="qr" />
          <div className={s.qr_info}>
            <div className={s.qr_name}>John Abraham , divh.d</div>
            <div className={s.qr_contacts}>
              <span> Mail:</span>
              <a href="mailto:johnabraham@gmail.com">johnabraham@gmail.com</a>
            </div>
            <div className={s.qr_contacts}>
              <span>Phone:</span>
              <a href="tel:(+2) 123 545 9000">(+2) 123 545 9000</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
