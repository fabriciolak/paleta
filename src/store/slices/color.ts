import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import chroma from "chroma-js";

interface ColorSliceType {
  color: string
  palette: Array<string>
}

const initialState = {
  color: '',
  palette: []
} as ColorSliceType

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    generate: (state, action: PayloadAction<{ color: string }>) => {
      let color = action.payload.color ? chroma(action.payload.color) : chroma.random()
      const mainColorIndex = Math.floor(Math.random() * 11)

      const dark = chroma(color).darken(1.6)
      const bright = chroma(color).brighten((2 - chroma(color).luminance()) * 6)

      const brightPalette = chroma.scale([bright, color]).colors(mainColorIndex + 1)
      brightPalette.pop()

      const darkPalette = chroma.scale([color, dark]).colors(11 - mainColorIndex)

      const palette = [...brightPalette, ...darkPalette]

      state.color = chroma(color).hex()
      state.palette = palette    
    },
  },
})

export const color = colorSlice.reducer

export const { generate } = colorSlice.actions