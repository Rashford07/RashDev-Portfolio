import React from "react";
import styles from "./card.module.css";

const Span = (props) => {
  return <span className={styles.span_design}>{props.tool}</span>;
};

function Card(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <a href="https://www.google.com" type="">
          <img src={props.img} />
        </a>
      </div>
      <div className={styles.details}>
        <h4>{props.title || "Title"}</h4>
        <p>Tags</p>
        <div>
          {props.tools.map((tl, i) => (
            <Span tool={tl} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
