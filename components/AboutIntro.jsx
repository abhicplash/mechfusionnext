"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/AboutIntro.module.css";
import imageintro from "@/public/images/06.webp";

const AboutIntro = () => {
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
      className={`${styles.container} ${show ? styles.show : ""}`}
    >
      <h2 className={styles.heading}>Who We Are ?</h2>

      <div className={styles.wrapper}>
        {/* Image */}
        <div className={styles.imageWrap}>
          <Image
            src={imageintro}
            alt="About Mechfusion"
            className={styles.image}
            priority
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h3 className={styles.subHeading}>Our Vision</h3>

          <p className={styles.text}>
            <span className={styles.brand}>Mechfusion</span> is committed to
            providing quality professional engineering services to enhance the
            communities where our clients live and work. Our approach combines
            exceptional design, innovative solutions, and proven performance.
          </p>

          <h3 className={styles.subHeading}>Our Mission</h3>

          <p className={styles.text}>
            To be the leading multi-discipline engineering consulting service
            company providing Mechanical Engineering Services through strong
            client loyalty, optimal engineering methodologies, effective
            communication, and proactive planning.
          </p>

          <Link href="/services" className={styles.btn}>
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;