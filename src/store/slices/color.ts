import { colorScale } from "@/lib/color-scale";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import chroma from "chroma-js";

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    color: '',
    palette: [] as Array<string>
  },
  reducers: {
    generateColorScale: (state, action: PayloadAction<{ color: string }>) => {
      let color = action.payload.color ? chroma(action.payload.color) : chroma.random()

      console.log(action.payload.color)

      const darkColor = chroma(color).darken(8)
      const brightColour = color.brighten((2 - color.luminance()) * 4)
      const palette = chroma.scale([brightColour, color, darkColor]).colors(11)

      state.palette = palette
      state.color = color.hex()
    },
  },
})

export const { generateColorScale } = colorSlice.actions
export const color = colorSlice.reducer