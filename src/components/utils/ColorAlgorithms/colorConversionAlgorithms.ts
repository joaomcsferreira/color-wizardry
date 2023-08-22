const valueToHex = (value: number) => {
  const hex = value.toString(16)
  return hex.length === 1 ? `0${hex}` : hex
}

export const hexToHsb = (hexColor: string) => {
  const [red, green, blue] = hexToRgb(hexColor)

  return rgbToHsb(red, green, blue)
}

export const hexToRgb = (hexColor: string) => {
  hexColor = hexColor.replace("#", "")

  const red = parseInt(hexColor.substring(0, 2), 16)
  const green = parseInt(hexColor.substring(2, 4), 16)
  const blue = parseInt(hexColor.substring(4, 6), 16)

  return [red, green, blue]
}

export const rgbToHsb = (red: number, green: number, blue: number) => {
  red /= 255
  green /= 255
  blue /= 255

  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  const delta = max - min

  const hue_decimal =
    delta === 0
      ? 0
      : delta && max === red
      ? (green - blue) / delta
      : max === green
      ? 2 + (blue - red) / delta
      : 4 + (red - green) / delta

  const hue = Math.round(60 * (hue_decimal < 0 ? hue_decimal + 6 : hue_decimal))
  const saturation = (delta && delta / max) * 100
  const brightness = max * 100

  return [hue, saturation, brightness]
}

export const hsbToRgb = (
  hue: number,
  saturation: number,
  brightness: number
) => {
  saturation /= 100
  brightness /= 100

  const calculateNormalizedAngle = (angle: number) => (angle + hue / 60) % 6
  const calculateColorComponent = (angle: number) =>
    brightness *
    (1 -
      saturation *
        Math.max(
          0,
          Math.min(
            calculateNormalizedAngle(angle),
            4 - calculateNormalizedAngle(angle),
            1
          )
        ))

  const red = Math.round(255 * calculateColorComponent(5))
  const green = Math.round(255 * calculateColorComponent(3))
  const blue = Math.round(255 * calculateColorComponent(1))

  return [red, green, blue]
}

export const rgbToHex = (red: number, green: number, blue: number) => {
  return `#${valueToHex(red)}${valueToHex(green)}${valueToHex(blue)}`
}
