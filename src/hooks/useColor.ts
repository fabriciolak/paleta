import React from "react"
import chroma from "chroma-js"

interface UseColor {
  color: string
  name: string
  palette: string[]
}

export function useColor(): UseColor {
  const [palette, setPalette] = React.useState<UseColor['palette']>([])
  const [color, setColor] = React.useState(() => {
    return chroma.random()
  })
  
  React.useEffect(() => {
    const darkColor = chroma(color).darken(8)
    const brightColour = color.brighten((2 - color.luminance()) * 4)
    const colors: Array<string> = chroma.scale([brightColour, color, darkColor]).colors(11)

    setPalette(colors)
  }, [color])

  React.useEffect(() => {
    window.addEventListener("keydown", function (e) {
      if (e.code === "Space" && e.target == document.body) {
        e.preventDefault();
        
        setColor(chroma.random())
      }
    });
  }, [])

  const find = palette.find(value => {
    return value === color.hex()
  })

  console.log(find)

  return {
    color: color.hex(),
    name: color.name(),
    palette
  }
}