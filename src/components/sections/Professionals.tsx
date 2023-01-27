import { Autour_One } from "@next/font/google";
import Image from "next/image";
import styles from "./professional.module.css";

export default function Professional() {
  return (
    <section id="professionals" className="z-10">
      <h3 className="mb-16 z-10">Professionals</h3>
      <div className="flex flex-row justify-around w-full flex-wrap">
        <div className={styles.card}>
          <Image
            src="/professionals/horngbor.jpeg"
            alt="horngbor"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              borderRadius: "50%",
              width: "220px",
              height: "auto",
              margin: "auto",
              marginBottom: "20px",
            }}
          />
          <span className="text-white mt-2 mb-2" style={{ fontSize: "2rem" }}>
            Horng Bor
          </span>
          <br />
          <p
            className="text-white text-2xl tracking-wider mt-3 mb-8"
            style={{
              maxWidth: "300px",
              color: "rgba(255, 255, 255, 0.75)",
            }}
          >
            Game Design Lead Game Advisor
          </p>
        </div>
        <div className={styles.card}>
          <Image
            src="/professionals/chunhui.jpeg"
            alt="chun hui"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              borderRadius: "50%",
              width: "220px",
              height: "auto",
              margin: "auto",
              marginBottom: "20px",
            }}
          />
          <span className="text-white mt-2 mb-2" style={{ fontSize: "2rem" }}>
            Chun Hui
          </span>
          <br />
          <p
            className="text-white text-2xl tracking-wider mt-3 mb-8"
            style={{
              maxWidth: "310px",
              color: "rgba(255, 255, 255, 0.75)",
            }}
          >
            Blockchain Professor Web3 Fullstack DevSecOps
          </p>
        </div>
        <div className={styles.card}>
          <Image
            src="/professionals/david.jpeg"
            alt="davidjian"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              borderRadius: "50%",
              width: "220px",
              height: "auto",
              margin: "auto",
              marginBottom: "20px",
            }}
          />
          <span className="text-white mt-2 mb-2" style={{ fontSize: "2rem" }}>
            David Jian
          </span>
          <br />
          <p
            className="text-white text-2xl tracking-wider mt-3 mb-8"
            style={{
              maxWidth: "310px",
              color: "rgba(255, 255, 255, 0.75)",
            }}
          >
            Business Development & Consultant <br /> Frontend Dev
          </p>
        </div>
      </div>
    </section>
  );
}
