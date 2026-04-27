import styles from "@/styles/WhyChoose.module.css";

const WhyChoose = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Why Choose Mechfusion</h2>
          <p className={styles.subtext}>
            Clients choose Mechfusion because we deliver more than drawings — we
            deliver dependable engineering support.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Strict Data Security</h3>
            <p>Strict data security and confidentiality</p>
          </div>

          <div className={styles.card}>
            <h3>Faster Turnaround</h3>
            <p>Faster turnaround than large engineering firms</p>
          </div>

          <div className={styles.card}>
            <h3>Direct Engineer Access</h3>
            <p>Direct access to experienced mechanical engineers.</p>
          </div>

          <div className={styles.card}>
            <h3>Cost-Effective Support</h3>
            <p>Cost-effective outsourcing for startups and SMEs</p>
          </div>

          <div className={styles.card}>
            <h3>Global Communication</h3>
            <p>Strong communication across global time zones.</p>
          </div>

          <div className={styles.card}>
            <h3>Strict Confidentiality</h3>
            <p>Strong data protection and secure project management.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
