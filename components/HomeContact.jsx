"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "@/styles/HomeContact.module.css";

const HomeContact = () => {
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
      <div className={styles.wrapper}>
        <div className={styles.blurOne}></div>
        <div className={styles.blurTwo}></div>

        <div className={styles.info}>
          <span className={styles.tag}>Let’s Build Together</span>

          <h2 className={styles.heading}>
            Interested in working with us?
          </h2>

          <p className={styles.subtext}>
            Let’s discuss your next engineering project and turn ideas into
            production-ready solutions.
          </p>
        </div>

        <Link href="/contact" className={styles.button}>
          Contact Us →
        </Link>
      </div>
    </section>
  );
};

export default HomeContact;