import Image from "next/image";
import styles from "./whyus.module.css";
export default function WhyUs() {
  const firstRow = [
    {
      point: "Security",
      desc: "Safe and Secure",
    },
    {
      point: "Fast",
      desc: "Optimised for Performance",
    },
    {
      point: "Expertise",
      desc: "Industry top tier talent",
    },
  ];

  const rowTwo = [
    {
      point: "Support",
      desc: "First class support",
    },
    {
      point: "Communication",
      desc: "Direct channel with developers",
    },
  ];

  return (
    <section id="why-us">
      <h3 className="mb-3 md:mb-16">Why Us?</h3>
      <div className="flex flex-row justify-around w-full max-w-7xl mb-5 h-fit flex-wrap">
        {firstRow.map((item, index) => (
          <div className="flex-col " key={index}>
            <div className={styles.placeholder}>
              <Image
                src={`/why-us/${index + 1}.svg`}
                width={200}
                height={200}
                alt="security"
                style={{ background: "transparent" }}
              />
            </div>
            <p className="m-0 text-3xl	md:text-5xl text-white">{item.point}</p>
            <span className="text-lg	md:text-2xl mb-5 text-white">
              {item.desc}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-evenly w-full max-w-7xl flex-wrap md:mt-8">
        {rowTwo.map((item, index) => (
          <div className="flex-col " key={index}>
            <div className={styles.placeholder}>
              <Image
                src={`/why-us/${index + 4}.svg`}
                width={200}
                height={200}
                alt="security"
                style={{ background: "transparent" }}
              />
            </div>
            <p className="m-0 text-3xl	md:text-5xl text-white">{item.point}</p>
            <span className="text-lg	md:text-2xl mb-5 text-white">
              {item.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
