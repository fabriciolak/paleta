"use client";

import React from "react";
import { useColor } from "@/hooks/useColor";
import { useAppDispatch } from "@/store";
import { generate } from "@/store/slices/color";

export function ColorPicker() {
  const { color } = useColor();
  const [inputValue, setInputValue] = React.useState<string>(color);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(generate({ color: inputValue }));
  }, [dispatch, inputValue]);

  return (
    <input
      type="color"
      id="color-picker"
      className="w-8 h-8 [&::-webkit-color-swatch]:border-none [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch-wrapper]:p-0"
      value={`${color}`}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}
