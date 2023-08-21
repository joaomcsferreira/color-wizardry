import Image from "next/image"
import Link from "next/link"

import JMBrand from "../../../public/svgs/JMBrand.svg"
import github from "../../../public/svgs/github.svg"
import styles from "./index.css"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.brand}>
        <Image
          src={JMBrand}
          alt="Joao Marcos's brand"
          className={styles.brandIcon}
        />
        <div className={styles.rights}>
          <h3 className={styles.rightsTitle}>Copyright &copy; 2023.</h3>
          <p className={styles.rightsDescription}>All rights are reserved.</p>
        </div>
      </div>

      <Link href={"https://github.com/joaomcsferreira"}>
        <Image src={github} alt="github" className={styles.gitIcon} />
      </Link>
    </footer>
  )
}

export default Footer
