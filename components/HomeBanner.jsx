"use client";

import styles from "@/styles/HomeBanner.module.css";

const HomeBanner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.overlay}>
        <span className={styles.smallHead}>Mechfusion</span>

        <h1 className={styles.mainHead}>The Art of Engineering</h1>

        <p className={styles.para}>
          At Mechfusion, we nurture a culture of innovation, collaboration, and
          growth. We’re driven by creativity and a shared passion for
          excellence, empowering our team to solve challenges and shape a better
          future together.
        </p>

        <a
          href="mailto:enquiry@mechfusion.in?subject=Mechanical Design Requirement"
          className={styles.cta}
        >
          Request a Consultation
        </a>
      </div>
    </section>
  );
};

export default HomeBanner;
