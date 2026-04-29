"use client";

import styles from "@/styles/BlogBanner.module.css";
import { useEffect, useRef, useState } from "react";

export default function BlogBanner() {
  const bannerRef = useRef(null);
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
          <span className={styles.tag}>Blogs</span>

          <h1 className={styles.heading}>
            Engineering Knowledge, Trends, and Updates
          </h1>

          <p className={styles.text}>
            With years of industry expertise, we deliver innovative solutions to
            streamline production and bring ideas to life with precision and
            efficiency
          </p>
        </div>
      </div>
    </section>
  );
}
