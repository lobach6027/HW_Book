import React from "react";
import s from './style.module.css'
export default function Company({ name, img, desc }) {
  return (
    <div className={s.card}>
      <img src={img} alt={name} />
      <p className={s.name}>{name}</p>
      <p className={s.desc}>{desc}</p>
    </div>
  );
}
