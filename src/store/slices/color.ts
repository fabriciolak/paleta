import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import chroma from "chroma-js";

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    color: {},
    palette: [] as Array<string>
  },
  reducers: {
    generate: (state) => {
      let color = chroma.random()

      const darkColor = chroma(color).darken(8)
      const brightColour = color.brighten((2 - color.luminance()) * 4)
      const palette = chroma.scale([brightColour, color, darkColor]).colors(11)
      
      state.palette = palette
      state.color = color
    }
  }
})

export const { generate } = colorSlice.actions
export const color = colorSlice.reducer