"use client"

import { useState } from "react";
import styles from "@/styles/Accordion.module.css";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <div
            className={styles.header}
            onClick={() => handleToggle(index)}
          >
            <span className={styles.title}>{item.title}</span>
            <span
              className={`${styles.icon} ${
                activeIndex === index ? styles.rotate : ""
              }`}
            >
              +
            </span>
          </div>

          <div
            className={`${styles.content} ${
              activeIndex === index ? styles.open : ""
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;