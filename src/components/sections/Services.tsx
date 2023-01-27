import Image from "next/image";
import styles from "./services.module.css";
export default function Services() {
  const services = [
    {
      point: "Smart Contract Development",
      image: "/core-services/smart-contract.svg",
    },
    {
      point: "Website / Application Development",
      image: "/core-services/tv.svg",
    },
    {
      point: "Unity Game / Metaverse Development",
      image: "/core-services/code.svg",
    },
  ];

  return (
    <section id="services" className="relative">
      <h3 className="mb-16 z-10">Core Services</h3>
      <Image
        src="/core-services/service-bg.png"
        alt="services-bg"
        height="0"
        width="0"
        sizes="100vw"
        // style={{
        //   position: "absolute",
        //   top: "-150px",
        //   left: "0",
        //   height: "auto",
        //   width: "100%",
        //   zIndex: "1",
        // }}
        className={styles.bgImage}
      />
      <div className="flex flex-row justify-around w-full flex-wrap">
        {services.map((item, index) => (
          <div className={styles.card}>
            <div className={styles.innerCard}>
              <Image src={item.image} width={50} height={50} alt="sc" />
              <span className="text-white text-lg md:text-2xl text-start ml-8">
                {item.point}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
