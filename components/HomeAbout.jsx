import styles from "@/styles/HomeAbout.module.css";
import Image from "next/image";
import Link from "next/link";
import aboutImg from "@/public/images/engineeringservices.jpg";

const HomeAbout = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* Image */}
        <div className={styles.imageWrap}>
          <Image
            src={aboutImg}
            alt="engineering services"
            className={styles.image}
            priority
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h2 className={styles.heading}>What We Aim For</h2>

          <p className={styles.text}>
            <span>
              <span className={styles.brand}>Mechfusion</span> is a trusted
              global engineering services partner, delivering practical,
              production-ready solutions for modern design and manufacturing
              needs.
            </span>
            <span>
              With extensive industry experience, we specialize in mechanical
              design, CNC programming, and engineering documentation that
              supports efficient, accurate manufacturing.
            </span>
            <span>
              Our focus is not just on creating designs — but on ensuring those
              designs work seamlessly in real production environments.
            </span>
            <span>
              By combining skilled engineers, advanced technology, and proven
              workflows, we help clients reduce rework, improve efficiency, and
              accelerate time to market.
            </span>
          </p>

          <Link href="/about" className={styles.btn}>
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
