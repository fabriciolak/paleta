import chroma from "chroma-js"

export function colorScale() {
  let color = chroma.random()

  const darkColor = chroma(color).darken(8)
  const brightColour = color.brighten((2 - color.luminance()) * 4)
  const palette = chroma.scale([brightColour, color, darkColor]).colors(11)

  return {
    color,
    palette
  }
}