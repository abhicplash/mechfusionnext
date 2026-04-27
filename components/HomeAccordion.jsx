"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/HomeAccordion.module.css";
import Accordion from "./Accordion";
import { faqList } from "@/utils/faq";

const HomeAccordion = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.container} ${show ? styles.show : ""}`}
    >
      <h2 className={styles.heading}>Frequently Asked Questions</h2>

      <div className={styles.accordionWrap}>
        <Accordion items={faqList} />
      </div>
    </section>
  );
};

export default HomeAccordion;