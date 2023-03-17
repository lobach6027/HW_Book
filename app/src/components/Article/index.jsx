import React from "react";
import s from './style.module.css'
export default function Article({ id, text }) {
  return (
    <div className={s.card}>
      <div className={s.id}><div>{id}</div></div>
      <div className={s.text}>{text}</div>
    </div>
  );
}
