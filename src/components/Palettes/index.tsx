"use client"

import React from "react"
import Button from "../utils/Button"
import styles from "./index.css"

const colorTypes = [
  {
    id: 0,
    name: "Generic Gradient",
    colors: ["#845EC2", "#1574F3", "#0B95E9", "#0B9ED2", "#13AEBC"],
  },
  {
    id: 1,
    name: "Monochromatic Palette",
    colors: ["#CCBCF5", "#8963E9", "#6736E2", "#3C169C", "#2B1070"],
  },
  {
    id: 2,
    name: "Analogous Palette",
    colors: ["#E9BCF5", "#CC63E9", "#365BE2", "#1D42C9", "#102570"],
  },
]

const Palettes = () => {
  const [inputCode, setInputCode] = React.useState<string>("")

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Color Palette Generator</h1>

      <div className={styles.generator}>
        <input
          type="text"
          className={styles.generatorInput}
          placeholder="Color hex code (Ex:. #00C9B7)"
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setInputCode(target.value)
          }
          value={inputCode}
        />

        <Button>Generate</Button>
      </div>

      <div className={styles.palettes}>
        {colorTypes.map((colorType) => (
          <div key={colorType.id} className={styles.palette}>
            <h2 className={styles.paletteName}>{colorType.name}</h2>

            <div className={styles.paletteColors}>
              {colorType.colors.map((color) => (
                <div
                  key={color}
                  className={styles.color}
                  style={{ backgroundColor: color }}
                >
                  {color}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Palettes
