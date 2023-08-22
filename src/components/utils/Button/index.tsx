import Link from "next/link"
import styles from "./index.css"

interface ButtonProps {
  children: React.ReactNode
  large?: boolean
  link?: string
  href?: string
  onClick?: () => void
}

const Button = ({ children, large, link, href, onClick }: ButtonProps) => {
  const button = (
    <a
      onClick={onClick}
      href={href}
      className={`${styles.container} ${large && "w-[80%]"}`}
    >
      {children}
    </a>
  )

  if (link)
    return (
      <Link href={link} className={`${large && "w-6/12"}`}>
        {button}
      </Link>
    )
  return button
}

export default Button
