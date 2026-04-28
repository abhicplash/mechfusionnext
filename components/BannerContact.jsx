// import React from 'react'

// const BannerContact = () => {
//   return (
//     <div>BannerContact</div>
//   )
// }

// export default BannerContact

"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/BannerContact.module.css";

const BannerContact = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.banner} ${show ? styles.show : ""}`}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.tag}>Contact Mechfusion</span>

        <h1 className={styles.heading}>Connect With Our Engineering Experts</h1>

        <p className={styles.text}>
          Connect with our experienced engineers to discuss your design,
          manufacturing, and product development requirements. We deliver
          precise, scalable, and efficient engineering solutions tailored to
          your business needs.
        </p>
      </div>
    </section>
  );
};

export default BannerContact;
