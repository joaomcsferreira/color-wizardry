"use client"

import Image from "next/image"
import Link from "next/link"

import React from "react"

import bars from "../../../public/svgs/bars.svg"
import close from "../../../public/svgs/close.svg"

import styles from "./index.css"

const menuItems = [
  { id: 1, name: "Palettes", link: "/" },
  { id: 2, name: "Contact", link: "/" },
  { id: 3, name: "Info", link: "/" },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <>
      <header className={styles.container}>
        <Link href={"/"}>
          <h1 className={styles.logo}>Color Wizardry</h1>
        </Link>
        <Image
          className={styles.menuIcon}
          src={menuOpen ? close : bars}
          alt="menu icon"
          width={50}
          height={50}
          onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
        />

        <nav className={`${styles.menu} ${menuOpen ? "flex" : "hidden"}`}>
          <ul className={styles.menuItem}>
            {menuItems.map((menuItem) => (
              <Link key={menuItem.id} href={menuItem.link}>
                <li className={styles.menuItemName}>{menuItem.name}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
