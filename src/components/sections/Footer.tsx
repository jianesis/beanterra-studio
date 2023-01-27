import styles from "./footer.module.css";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section>
      <div className="flex flex-col justify-center align-center w-full m-16">
        <span className={styles.footerText}>Beanterra Studio</span>
        <br />
        <p className="text-gray-500 text-center">
          &copy; {year} All rights reserved.
        </p>
        <p className="text-gray-500 text-center">
          Bridging the Web3 and Web2 worlds
        </p>
      </div>
    </section>
  );
}
