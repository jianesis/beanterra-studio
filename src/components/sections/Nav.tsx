import Image from "next/image";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Image
        src="/beanterra-logo.png"
        alt="logo"
        height={0}
        width={0}
        sizes="80vw"
        className={styles.logo}
      />
    </nav>
  );
}
