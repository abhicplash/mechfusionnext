"use client";

import { useRef, useEffect, useState } from "react";
import styles from "@/styles/ServiceBanner.module.css";

const ServiceBanner = () => {
  const bannerRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
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
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.tag}>Engineering Excellence</span>

        <h1 className={styles.heading}>Solutions We Deliver</h1>

        <p className={styles.text}>
          Backed by industry expertise, we deliver innovative and efficient
          engineering solutions that transform concepts into production-ready
          reality. Our skilled team uses advanced tools and precision workflows
          to create high-quality designs, documentation, and prototypes.
        </p>

        <div className={styles.line}></div>
      </div>
    </section>
  );
};

export default ServiceBanner;