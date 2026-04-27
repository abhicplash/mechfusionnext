"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Industries.module.css";
import {
  FaIndustry,
  FaCar,
  FaBoxOpen,
  FaCogs,
  FaRobot,
  FaPlane,
} from "react-icons/fa";

const industries = [
  {
    icon: <FaIndustry />,
    title: "Industrial Equipment & Machinery",
    text: "Robust engineering support for heavy-duty systems and industrial operations.",
  },
  {
    icon: <FaCar />,
    title: "Automotive & EV Components",
    text: "Precision components, assemblies, and next-gen mobility solutions.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Consumer & Commercial Products",
    text: "Design optimization for scalable and production-ready products.",
  },
  {
    icon: <FaCogs />,
    title: "Manufacturing & Fabrication",
    text: "Efficient drawings, tooling support, and fabrication-ready outputs.",
  },
  {
    icon: <FaRobot />,
    title: "Automation & Engineering",
    text: "Smart mechanical systems for automation and industrial innovation.",
  },
  {
    icon: <FaPlane />,
    title: "Aerospace, Medical & Defence",
    text: "High-accuracy engineering for critical and regulated sectors.",
  },
];

const Industries = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.section} ${show ? styles.show : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Industries</span>
          <h2 className={styles.heading}>Industries We Support</h2>
          <p className={styles.subtext}>
            Mechfusion supports multiple sectors with practical,
            manufacturing-ready engineering solutions.
          </p>
        </div>

        <div className={styles.grid}>
          {industries.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;