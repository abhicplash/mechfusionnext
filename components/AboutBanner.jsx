"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/AboutBanner.module.css";
import aboutImg from "@/public/images/Assets/35.webp";

const AboutBanner = () => {
  const sectionRef = useRef(null);
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${show ? styles.show : ""}`}
    >
      <div className={styles.container}>
        {/* Image Side */}
        <div className={styles.imageWrap}>
          <div className={styles.imageCircle}>
            <Image
              src={aboutImg}
              alt="Engineering design and manufacturing services"
              className={styles.image}
              priority
            />
          </div>
        </div>

        {/* Content Side */}
        <div className={styles.content}>
          <span className={styles.tag}>Mechfusion</span>

          <h2 className={styles.heading}>
            Your Premier Provider of Tailored Engineering Design and
            Manufacturing Services
          </h2>

          <p className={styles.text}>
            With years of industry expertise, we deliver innovative solutions to
            streamline production and bring ideas to life with precision,
            efficiency, and manufacturable engineering excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;