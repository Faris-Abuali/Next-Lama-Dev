import Image from "next/image";
import styles from "./home.module.css";
import clsx from "clsx";

const Home = () => {
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ut! Lorem, ipsum dolor.
        </p>

        <div className={styles.buttons}>
          <button className={clsx(styles.button, styles.primary)}>
            Learn More
          </button>
          <button className={styles.button}>
            Contact
          </button>
        </div>

        <div className={styles.brands}>
          <Image
            src="/images/brands.png"
            alt="brands"
            fill
            className={styles.brandImage}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/hero.gif"
          alt="hero"
          fill
          className={styles.heroImage}
        />
      </div>
    </main>
  )
}

export default Home;
