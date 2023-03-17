import React from "react";
import Company from "../Company";
import s from "./style.module.css";
export default function Companies() {
  const companies = [
    {
      img: "/images/company1.png",
      name: "Amazen Corp.",
      desc: "They has been helping readers, music lovers, and videophiles find quality material.",
    },
    {
      img: "/images/company2.png",
      name: "Megan Books",
      desc: "We help physical bookstores manage their overstock to the book inventory.",
    },
    {
      img: "/images/company3.png",
      name: "Megank",
      desc: "Bookstore serving up the full spectrum of Black literature and wine black books.",
    },
    {
      img: "/images/company4.png",
      name: "Urban Store",
      desc: "We also carry the latest records, issues of all of your favorite comic books.",
    },
  ];
  return (
    <div className={s.wrapper}>
        <div className={s.companies_block}>
        <div className={s.companies_title}>Trusted By The Best</div>
        <div className={s.line}><img src="images/Rectangle.png" alt="line" /></div>
      <div className={s.companies}>
        {companies.map((item) => (
          <Company key={item.name} {...item} />
        ))}
      </div>
        </div>
      <div className={s.get_copy}>
        <div className={s.descr}>
          <div className={s.title}>Get Book Copy Today!</div>
          <img src="images/Rectangle.png" alt="" />
          <p className={s.text}>
            We believe that bookstores are essential to a healthy culture.
            They’re where authors can connect with readers.
          </p>
        </div>
        <div>
          <img src="images/tee.png" alt="" />
        </div>
      </div>
    </div>
  );
}
