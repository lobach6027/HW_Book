import React from "react";
import Component from "../Component";
import s from './style.module.css'
export default function Components() {
  const data = [
    {
      id: 1,
      image: "images/art1.png",
      title: "Significant reading has more info number",
      descr:
        "Override the digital divide with additional clickthroughs from DevOps for real-time schemas.",
      date: "October 6, 2021",
    },
    {
        id: 2,
        image: "images/art2.png",
        title: "Many variations of pass majority have suffered",
        descr:
          "Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.",
        date: "October 6, 2021",
      },
      {
        id: 3,
        image: "images/art3.png",
        title: "Words which don’t look even slightly believable",
        descr:
          "Podcasting operational change management inside of workflows to establish a framework.",
        date: "October 6, 2021",
      },
  ];
  return <div className={s.container}>
    
    {data.map((item)=><Component key={item.id} {...item}/>)}
  </div>;
}
