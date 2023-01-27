import Image from "next/image";
import styles from "./projects.module.css";

export default function Project() {
  return (
    <section id="project" className="mb-16">
      <h3 className="mb-16">Projects</h3>
      <div className="flex flex-row flex-wrap">
        <Image
          src="/projects/beanterra.png"
          width={400}
          height={400}
          style={{
            maxHeight: "400px",
          }}
          alt="project"
        />
        <div className="flex flex-col text-start max-w-lg ml-5 mb-5">
          <h5 className={styles.beanterraText}>Beanterra</h5>
          <p className="mb-2 text-white text-base md:text-2xl tracking-widest mb-7	">
            Game • Unity
          </p>
          <p className="mb-2 text-white text-base md:text-2xl tracking-wider	mb-7	">
            A turn-based tactic game with rich storyline, a core game of our
            ecosystem.
          </p>
          <p className="mb-2 text-white text-base md:text-2xl tracking-widest	">
            HIGHLIGHTS
          </p>
          <p className="mb-2 text-white text-base md:text-2xl tracking-wider	">
            Complex sprite animation algorithm from multilayer body part • Novel
            Web5 onboarding system • Novel token mechanic • First ZRC6 NFT with
            Scilla • Multichain Support
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row mt-5  flex-wrap">
        <div className="flex flex-col md:text-end text-start max-w-lg mr-5 mb-5">
          <h5 className={styles.tttText}>TTT Club</h5>
          <p className="mb-2 text-white text-base md:text-2xl tracking-widest mb-7	">
            NFT • React • NextJS
          </p>
          <p className="mb-2 text-white text-base md:text-2xl tracking-wider	mb-7	">
            A beautiful and simplistic NFT minting landing page in collaboration
            with Singapore NFT community
          </p>
          <p className="mb-2 text-white text-base md:text-2xl tracking-widest	">
            HIGHLIGHTS
          </p>
          <p className="mb-2 text-white text-base md:text-2xl tracking-wider	">
            Web3 wallet connector • Bug free, fuss free mint experience • Quick
            NFT generation • Metadata and rarity check pre-reveal
          </p>
        </div>
        <Image
          src="/projects/ttt.png"
          width={390}
          height={390}
          alt="project"
          style={{
            maxHeight: "390px",
          }}
        />
      </div>
    </section>
  );
}
