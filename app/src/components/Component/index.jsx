import React from "react";
import s from "./style.module.css";
export default function Component({ image, title, descr, date }) {
  return (
    <div className={s.card}>
      <img src={image} alt={title} />
      <div className={s.info}>
        <div className={s.title}>{title}</div>
        <div className={s.descr}>{descr}</div>
        <div className={s.date}>{date}</div>
      </div>
    </div>
  );
}
