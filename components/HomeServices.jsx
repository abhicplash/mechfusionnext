"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/HomeServices.module.css";
import { homeServiceList } from "@/utils/HomeService";
import HSCard from "./HSCard";

const HomeServices = () => {
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
      <h2 className={styles.heading}>Our Services</h2>

      <p className={styles.para}>
        <span className={styles.brand}>Mechfusion</span> delivers professional
        engineering services focused on precision, reliability, and
        manufacturability. By combining technical expertise with modern
        engineering tools, we help streamline development processes and bring
        ideas to life with confidence.
      </p>

      <div className={styles.wrapper}>
        {homeServiceList.map((service) => (
          <Link
            href={`/services/${service.urlname}`}
            key={service.servicesName}
            className={styles.cardLink}
          >
            <HSCard
              image={service.image}
              name={service.servicesName}
              alttext={service.alttext}
              para={service.para}
            />
          </Link>
        ))}
      </div>

      <Link href="/services" className={styles.buttonLink}>
        <button className={styles.button}>View All Services</button>
      </Link>
    </section>
  );
};

export default HomeServices;