import React from "react";
import Article from "../Article";
import s from "./style.module.css";
import FotoBlock from "../FotoBlock";
import Components from "../Components";

export default function Articles() {
  const learnList = [
    {
      id: 1,
      text: "Use HDFS & Map Reduce for storing & analyzing data at scale.",
    },
    {
      id: 2,
      text: "Consume streaming data using Spark Streaming, Flink, and Storm.",
    },
    {
      id: 3,
      text: "Choose an appropriate data storage technology for your application",
    },
    {
      id: 4,
      text: "Analyze non-relational data using HBase, Cassandra, and MongoDB.",
    },
  ];
  return (
    <div className={s.wrapper}>
     <div>
     <div className={s.titleBlock}>
        <div className={s.title}>What Will You Learn?</div>
        <img src="images/Rectangle.png" alt="line" />
      </div>
      <div className={s.articleBlock}>
        <div className={s.articles}>
          {learnList.map((item) => (
            <Article key={item.text} {...item} />
          ))}
        </div>
        <div className={s.articleFoto}><FotoBlock/></div>
      </div>
     </div>
     <Components/>
    </div>
  );
}
