import React from "react";
import { useSelector } from "@/store";

export function useColor() {
  return useSelector((store) => {
    const { palette, color } = store.color;

    return {
      palette,
      color: String(color),
    };
  });
}
