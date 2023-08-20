import Link from "next/link"
import styles from "./index.css"

interface ButtonProps {
  children: React.ReactNode
  large?: boolean
  link?: string
}

const Button = ({ children, large, link }: ButtonProps) => {
  const button = (
    <button className={`${styles.container} ${large && "w-full"}`}>
      {children}
    </button>
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
