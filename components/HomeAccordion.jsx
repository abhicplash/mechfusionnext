import styles from "@/styles/HomeAccordion.module.css";
import Accordion from "./Accordion";
import { faqList } from "@/utils/faq";

const HomeAccordion = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <Accordion items={faqList} />
    </section>
  );
};

export default HomeAccordion;
