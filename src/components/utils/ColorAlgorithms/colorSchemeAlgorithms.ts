import { hexToHsb, hsbToRgb, rgbToHex } from "./colorConversionAlgorithms"

import { v4 as uuid } from "uuid"

interface HSBType {
  hue: number
  saturation: number
  brightness: number
}

interface modelSchemesType {
  colors: Array<HSBType>
  name: string
}

const getComplementaryHue = (hue: number) => {
  const newHue = (hue + 180) % 360

  return newHue
}

const getSplitComplementaryHue = (hue: number, first?: boolean) => {
  const shiftAmount = first ? hue + 150 : hue - 150
  const newHue = shiftAmount % 360

  return newHue
}

const getAnalogousHue = (hue: number, first?: boolean) => {
  const shiftAmount = first ? hue + 30 : hue - 30
  const newHue = shiftAmount % 360

  return newHue
}

const getTriadicHue = (hue: number, first?: boolean) => {
  const shiftAmount = first ? hue + 120 : hue - 120
  const newHue = shiftAmount % 360

  return newHue
}

const getPalettes = (modelSchemes: Array<modelSchemesType>) => {
  const paletes = modelSchemes.map((scheme) => {
    const colors = scheme.colors.map((color) => {
      const [red, green, blue] = hsbToRgb(
        color.hue,
        color.saturation,
        color.brightness
      )

      return rgbToHex(red, green, blue)
    })

    const palette = {
      id: uuid(),
      name: scheme.name,
      colors,
    }

    return palette
  })

  return paletes
}

const createPalettes = (hexColor: string) => {
  const [hue] = hexToHsb(hexColor)

  const monochromaticModelScheme = [
    {
      hue,
      saturation: 15,
      brightness: 100,
    },
    {
      hue,
      saturation: 33,
      brightness: 83,
    },
    {
      hue,
      saturation: 51,
      brightness: 66,
    },
    {
      hue,
      saturation: 69,
      brightness: 49,
    },
    {
      hue,
      saturation: 87,
      brightness: 30,
    },
  ]

  const complementaryModelScheme = [
    { hue: hue, saturation: 15, brightness: 100 },
    { hue: hue, saturation: 60, brightness: 83 },
    { hue: hue, saturation: 80, brightness: 70 },
    {
      hue: getComplementaryHue(hue),
      saturation: 85,
      brightness: 49,
    },
    {
      hue: getComplementaryHue(hue),
      saturation: 90,
      brightness: 30,
    },
  ]

  const splitComplementaryModelScheme = [
    { hue: getSplitComplementaryHue(hue), saturation: 15, brightness: 100 },
    { hue: getSplitComplementaryHue(hue), saturation: 30, brightness: 86 },
    { hue, saturation: 45, brightness: 72 },
    { hue, saturation: 60, brightness: 58 },
    {
      hue: getSplitComplementaryHue(hue, true),
      saturation: 75,
      brightness: 44,
    },
    {
      hue: getSplitComplementaryHue(hue, true),
      saturation: 90,
      brightness: 30,
    },
  ]

  const analogousModelScheme = [
    {
      hue: getAnalogousHue(hue),
      saturation: 15,
      brightness: 100,
    },
    {
      hue: getAnalogousHue(hue),
      saturation: 30,
      brightness: 86,
    },
    {
      hue,
      saturation: 45,
      brightness: 72,
    },
    {
      hue,
      saturation: 60,
      brightness: 58,
    },
    {
      hue: getAnalogousHue(hue, true),
      saturation: 75,
      brightness: 44,
    },
    {
      hue: getAnalogousHue(hue, true),
      saturation: 90,
      brightness: 30,
    },
  ]

  const triadicModelScheme = [
    {
      hue: getTriadicHue(hue),
      saturation: 15,
      brightness: 100,
    },
    {
      hue: getTriadicHue(hue),
      saturation: 30,
      brightness: 86,
    },
    {
      hue,
      saturation: 45,
      brightness: 72,
    },
    {
      hue,
      saturation: 60,
      brightness: 58,
    },
    {
      hue: getTriadicHue(hue, true),
      saturation: 75,
      brightness: 44,
    },
    {
      hue: getTriadicHue(hue, true),
      saturation: 90,
      brightness: 30,
    },
  ]

  const modelSchemes = [
    { colors: monochromaticModelScheme, name: "Monocrhomatic Palette" },
    { colors: complementaryModelScheme, name: "Complementary Palette" },
    {
      colors: splitComplementaryModelScheme,
      name: "Split Complementary Palette",
    },
    { colors: analogousModelScheme, name: "Analogous Palette" },
    { colors: triadicModelScheme, name: "Triadic Palette" },
  ]

  const palettes = getPalettes(modelSchemes)

  return palettes
}

export default createPalettes
