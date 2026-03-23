import Image from "next/image";
import styles from "./EmailInput.module.css";

export default function EmailInput() {
  return (
    <div className={styles.input}>
      <input className={styles.field} placeholder="Enter your email" type="email" />
      <Image className={styles.arrow} width={16} height={16} alt="" src="/arrow-right-alt.svg" />
    </div>
  );
}
