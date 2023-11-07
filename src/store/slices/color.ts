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
      const color = action.payload.color ? chroma(action.payload.color) : chroma.random()

      const dark = chroma(color).darken(16)
      const bright = chroma(color).brighten((2 - chroma(color).luminance()) * 4)

      const palette = chroma.scale([bright, color, dark]).colors(11)

      state.color = chroma(color).hex()
      state.palette = palette
    },
  },
})

export const color = colorSlice.reducer

export const { generate } = colorSlice.actions