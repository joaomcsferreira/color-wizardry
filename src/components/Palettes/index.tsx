"use client"

import React from "react"
import Button from "../utils/Button"
import styles from "./index.css"

import createPalettes from "../utils/ColorAlgorithms/colorSchemeAlgorithms"

const colorTypes = [
  {
    id: "0",
    name: "Generic Gradient",
    colors: ["#845EC2", "#1574F3", "#0B95E9", "#0B9ED2", "#13AEBC"],
  },
  {
    id: "1",
    name: "Monochromatic Palette",
    colors: ["#CCBCF5", "#8963E9", "#6736E2", "#3C169C", "#2B1070"],
  },
  {
    id: "2",
    name: "Analogous Palette",
    colors: ["#E9BCF5", "#CC63E9", "#365BE2", "#1D42C9", "#102570"],
  },
]

const Palettes = () => {
  const [inputCode, setInputCode] = React.useState<string>("")
  const [schemes, setSchemes] = React.useState(colorTypes)

  const inputRef = React.useRef<HTMLInputElement>(null)

  const validateHexCod = () => {
    const pattern = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    return pattern.test(inputCode)
  }

  const handleClick = () => {
    if (validateHexCod()) {
      setSchemes(() => [...createPalettes(inputCode)])
      setInputCode("")
    }
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && validateHexCod()) {
      setSchemes(() => [...createPalettes(inputCode)])
      setInputCode("")
    }
  }

  return (
    <div id="palettes" className={styles.container}>
      <h1 className={styles.title}>Color Palette Generator</h1>

      <div className={styles.generator}>
        <input
          type="text"
          ref={inputRef}
          className={styles.generatorInput}
          placeholder="Color hex code (Ex:. #00C9B7)"
          onKeyDown={handleInputKeyDown}
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setInputCode(target.value)
          }
          value={inputCode}
        />

        <Button onClick={() => handleClick()}>Generate</Button>
      </div>

      <div className={styles.palettes}>
        {schemes.map((colorType) => (
          <div key={colorType.id} className={styles.palette}>
            <h2 className={styles.paletteName}>{colorType.name}</h2>

            <div className={styles.paletteColors}>
              {colorType.colors.map((color) => (
                <div
                  key={color}
                  className={styles.color}
                  style={{ backgroundColor: color }}
                >
                  <p className={styles.colorCod}>{color}</p>
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
