import Image from "next/image"
import Link from "next/link"

import mail from "../../../public/svgs/mail.svg"
import linkedin from "../../../public/svgs/linkedin.svg"

import styles from "./index.css"

const contactLinks = [
  {
    name: "joaomcsferreira@gmail.com",
    alt: "email icon",
    icon: mail,
    url: "mailto:joaomcsferreira@gmail.com",
  },
  {
    name: "linkedin.com/in/joaomcsferreira",
    alt: "linkedin icon",
    icon: linkedin,
    url: "https://linkedin.com/in/joaomcsferreira",
  },
]

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact us!</h1>
      <p className={styles.description}>
        If you possess any inquiries, ideas, or other demands, don&apos;t
        hesitate to get in touch with us! We&apos;re consistently delighted to
        receive your communication!
      </p>

      <div className={styles.linkGroup}>
        {contactLinks.map((link) => (
          <Link key={link.url} href={link.url}>
            <div className={styles.link}>
              <Image src={link.icon} alt={link.alt} />
              <p className={styles.linkName}>{link.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Contact
