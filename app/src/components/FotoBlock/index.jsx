import React from "react";
import s from "./style.module.css";
export default function FotoBlock() {
  return (
    <div className={s.wrapper}>
      
      <div className={s.border}></div>
      <div className={s.img}>
        <img src="/images/author.jpg" alt="foto" />
      </div>
    </div>
  );
}
