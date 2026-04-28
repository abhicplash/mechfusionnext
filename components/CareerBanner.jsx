"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/CareerBanner.module.css";

const CareerBanner = () => {
  const bannerRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.2 }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={bannerRef}
      className={`${styles.banner} ${show ? styles.show : ""}`}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <span className={styles.tag}>Careers</span>

          <h1 className={styles.heading}>Build Your Engineering Career</h1>

          <p className={styles.text}>
            At Mechfusion, we foster a culture of innovation, collaboration, and
            growth. Our team thrives on creativity and solving complex
            challenges with cutting-edge engineering solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;