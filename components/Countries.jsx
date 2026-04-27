import styles from "@/styles/Countries.module.css";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "Switzerland",
  "Sweden",
  "Netherlands",
  "France",
  "Australia",
  "United Arab Emirates",
  "India",
];

const Countries = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Countries We Serve</h2>
          <p className={styles.subtext}>
            Mechfusion works with clients across key global markets, delivering
            engineering services aligned with international manufacturing
            standards and expectations.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {countries.map((country, index) => (
            <div key={index} className={styles.card}>
              {country}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;