import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <section id="banner" style={{ height: "100%" }}>
        <h1 className={styles.mainText + " mb-3"}>Beanterra Studio</h1>
        <p className={styles.paragraphText}>The Web5 Metaverse Studio</p>
        <p className={styles.paragraphText}>Bridging the technology gap</p>
      </section>
    </div>
  );
}
