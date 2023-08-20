import Image from "next/image"
import wizard from "../../../public/images/wizard.png"
import Button from "../utils/Button"
import styles from "./index.css"

const Home = () => {
  return (
    <div className={styles.container}>
      <Image
        src={wizard}
        alt="wizard"
        className={styles.image}
        placeholder="blur"
        blurDataURL={wizard.src}
      />
      <div className={styles.presentation}>
        <h1 className={styles.title}>Unleash Your Palette&apos;s Magic</h1>
        <p className={styles.description}>
          Transforming a single color into infinite hues, begin your colorful
          journey here.
        </p>
        <Button large link={""}>
          Try It Out Now!
        </Button>
      </div>
    </div>
  )
}

export default Home
