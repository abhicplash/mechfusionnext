"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Countries.module.css";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "Switzerland",
  "Sweden",
  "Netherlands",
  "France",
  "Australia",
  "United Arab Emirates",
  "India",
];

const Countries = () => {
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
      className={`${styles.section} ${show ? styles.show : ""}`}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>Global Presence</span>

          <h2 className={styles.heading}>Countries We Serve</h2>

          <p className={styles.subtext}>
            Mechfusion supports clients across major global markets with
            engineering solutions built for international quality,
            communication, and manufacturing expectations.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {countries.map((country, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <span className={styles.cardNumber}>
                {(index + 1).toString().padStart(2, "0")}
              </span>

              <span className={styles.cardText}>{country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;