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
  initialState: {
    ...initialState,
    loading: false
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true
    },
    finishLoading: (state) => {
      state.loading = false
    },
    generate: (state, action: PayloadAction<{ color: string }>) => {
      let color = action.payload.color ? chroma(action.payload.color) : chroma.random()
      const mainColorIndex = Math.floor(Math.random() * 11)

      color = color.luminance(1 - mainColorIndex / 10)

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

export const { generate, startLoading, finishLoading } = colorSlice.actions