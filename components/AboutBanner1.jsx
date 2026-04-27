import styles from "@/styles/AboutBanner1.module.css";

const AboutBanner1 = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <span className={styles.tag}>About Mechfusion</span>

          <h1 className={styles.heading}>
            Shaping Ideas into Reality
          </h1>

          <p className={styles.text}>
            Mechfusion empowers innovation by turning conceptual ideas into
            accurate, manufacturable designs. With a commitment to quality,
            precision, and practical engineering, we deliver solutions that
            exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner1;