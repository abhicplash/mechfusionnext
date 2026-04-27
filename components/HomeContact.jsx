import Link from "next/link";
import styles from "@/styles/HomeContact.module.css";

const HomeContact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h2 className={styles.heading}>Interested in working with us?</h2>
          <p className={styles.subtext}>Let’s Talk Now</p>
        </div>

        <Link href="/contact" className={styles.button}>
          Contact Us →
        </Link>
      </div>
    </section>
  );
};

export default HomeContact;
