import Image from "next/image";
import styles from "@/styles/HSCard.module.css";

const HSCard = ({ image, name, alttext, para }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={alttext}
          fill
          className={styles.image}
          title={name}
        />
      </div>

      <h3 className={styles.title}>{name}</h3>
      <p className={styles.description}>{para}</p>
    </div>
  );
};

export default HSCard;
