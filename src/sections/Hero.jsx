import { styles } from "../styles";
import { ComputersCanvas } from "../components";

const Hero = () => {
  return (
    <section className={`${styles.sectionHero}`} aria-labelledby='first-screen-title'>
      <div
        className={`${styles.row} flex flex-wrap items-start gap-6`}
      >
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm Dara</h1>
          <p className={`${styles.heroSubText}`}>I develop web aplications</p>
          <a className={`lg:text-[20px] ${styles.heroSubText} stroke-link`} href="https://cv-main-mu.vercel.app/">My resume</a>
        </div>
        <div className="lg:w-[350px] lg:h-[200px] sm:h-[150px] sm:w-[250px] w-[160px] h-[100px]">
          <ComputersCanvas />
        </div>
           
      </div>

    </section>
  )
}

export default Hero