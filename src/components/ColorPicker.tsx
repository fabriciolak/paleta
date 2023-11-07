"use client";

import { useColor } from "@/hooks/useColor";
import { generateColorScale } from "@/store/slices/color";
import React from "react";
import { useDispatch } from "react-redux";

export function ColorPicker() {
  const store = useColor();
  const dispatch = useDispatch();
  const [color, setColor] = React.useState<string>("");

  React.useEffect(() => {
    dispatch(
      generateColorScale({
        color,
      })
    );
  }, [dispatch, color]);

  return (
    <input
      type="color"
      id="color-picker"
      className="w-8 h-8 [&::-webkit-color-swatch]:border-none [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch-wrapper]:p-0"
      value={`${store.color}`}
      onChange={(e) => setColor(e.target.value)}
    />
  );
}
