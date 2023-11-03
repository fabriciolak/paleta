"use client";

import React from "react";
import { Palette } from "./Palette";
import { useDispatch } from "react-redux";
import { generate } from "@/store/slices/color";
import { useColor } from "@/hooks/useColor";

export function ColorPalette() {
  const dispatch = useDispatch();
  const { palette } = useColor();

  React.useEffect(() => {
    window.addEventListener("keydown", function (e) {
      if (e.code === "Space" && e.target == document.body) {
        e.preventDefault();

        dispatch(generate());
      }
    });
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(generate());
  }, [dispatch]);

  return (
    <div className="w-full mt-16">
      <div className="max-w-7xl space-y-4 m-auto">
        {/* Title */}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold leading-8 text-cod-gray-950">
            Generated palette
          </h3>
          <span className="text-base ">Majorelle Garden</span>
        </div>

        {/* Colors */}
        <div className="flex gap-2 py-4">
          {palette.map((color, colorIndex) => {
            return (
              <Palette color={color} colorIndex={colorIndex} key={colorIndex} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
