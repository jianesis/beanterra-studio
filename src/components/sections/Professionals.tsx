import { Autour_One } from "@next/font/google";
import Image from "next/image";
import styles from "./professional.module.css";

export default function Professional() {
  const professionals = [
    {
      image: "/professionals/horngbor.jpeg",
      name: "Horng Bor",
      position: "Game Design Lead Game Advisor",
    },
    {
      image: "/professionals/chunhui.jpeg",
      name: "Chun Hui",
      position: "Blockchain Professor Web3 Fullstack DevSecOps",
    },
    {
      image: "/professionals/david.jpeg",
      name: "David Jian",
      position: "Business Development & Consultant & Fullstack Dev",
    },
  ];
  return (
    <section id="professionals" className="z-10">
      <h3 className="mb-16 z-10">Professionals</h3>
      <div className="flex flex-row justify-around w-full flex-wrap">
        {professionals.map((item, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={item.image}
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
            <span className="text-white mt-2 mb-2 text-2xl  md:text-3xl">
              {item.name}
            </span>
            <br />
            <p
              className="text-white text-xl md:text-2xl tracking-wider mt-3 mb-8"
              style={{
                maxWidth: "300px",
                color: "rgba(255, 255, 255, 0.75)",
              }}
            >
              {item.position}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
