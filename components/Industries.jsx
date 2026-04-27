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
  { icon: <FaIndustry />, title: "Industrial Equipment & Machinery" },
  { icon: <FaCar />, title: "Automotive & EV Components" },
  { icon: <FaBoxOpen />, title: "Consumer & Commercial Products" },
  { icon: <FaCogs />, title: "Manufacturing & Fabrication" },
  { icon: <FaRobot />, title: "Automation & General Engineering" },
  { icon: <FaPlane />, title: "Aerospace, Medical & Defence" },
];

const Industries = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Industries We Support</h2>
          <p className={styles.subtext}>
            We support a wide range of industries with precision-focused,
            manufacturing-ready engineering solutions.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {industries.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
