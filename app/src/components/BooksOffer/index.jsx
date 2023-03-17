import React from "react";
import s from "./style.module.css";

export default function BookOffer() {
  return (
    <div>
      <div className={s.title_block}>
        <div>The Author’s Book</div>
        <img src="images/Rectangle.png" alt="line" />
      </div>
      <div className={s.books_offer}>
      <div>
        <div className={s.book_card}>
          <div>
            <img src="images/book1.png" alt="book" />
          </div>
          <div className={s.info}>
            <p className={s.book_title}>Atomic One’s</p>
            <p className={s.book_price}>$ 13.84 USD</p>
            <p className={s.book_discr}>
              As the book contains theoretical content as well as solved
              questions.
            </p>
            <div className={s.print}>
              <img src="images/sircle.png" alt="point" />
              <div>Printed Book</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={s.book_card}>
          <div>
            <img src="images/book2.png" alt="book" />
          </div>
          <div className={s.info}>
            <p className={s.book_title}>The Dark Light</p>
            <p className={s.book_price}>$ 86.11 USD</p>
            <p className={s.book_discr}>
            As the book contains theoretical content as well as solved questions.
            </p>
            <div className={s.print}>
              <img src="images/sircle.png" alt="point" />
              <div>Printed Book</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
