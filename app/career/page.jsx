"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Career.module.css";
import CareerBanner from "@/components/CareerBanner";
import HomeContact from "@/components/HomeContact";

const Career = () => {
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
    <>
      {/* SEO */}
      <title>Engineering Careers & Mechanical Design Jobs | Mechfusion</title>
      <meta
        name="description"
        content="Explore engineering careers at Mechfusion. Discover mechanical design jobs and grow with our innovative team in the CAD/CAM industry."
      />

      <CareerBanner />

      <section
        ref={sectionRef}
        className={`${styles.container} ${show ? styles.show : ""}`}
      >
        <div className={styles.content}>
          <span className={styles.tag}>Join Our Team</span>

          <h2 className={styles.heading}>Build Your Career With Mechfusion</h2>

          <p className={styles.text}>
            At <span className={styles.brand}>Mechfusion</span>, we believe in
            fostering a culture of innovation, collaboration, and growth. Our
            team thrives on creativity and solving complex challenges with
            advanced engineering solutions.
          </p>

          <p className={styles.text}>
            We value integrity, diversity, and excellence in everything we do.
            By creating an environment where ideas are welcomed, skills are
            sharpened, and achievements are celebrated, we empower every team
            member to reach their highest potential.
          </p>

          <p className={styles.text}>
            Join us and be part of a dynamic journey where your talent creates
            real impact.
          </p>

          <div className={styles.applyBox}>
            <h4>
              To apply, send your resume and cover letter to
              <a href="mailto:enquiry@mechfusion.in"> enquiry@mechfusion.in</a>
            </h4>

            <span>Please mention the job title in the subject line.</span>
          </div>
        </div>
      </section>

      <HomeContact />
    </>
  );
};

export default Career;
