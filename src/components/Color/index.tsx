"use client";

import React from "react";
import { Palette } from "./Palette";
import { useColor } from "@/hooks/useColor";

export function ColorPalette() {
  // const colors = {
  //   color: "#28675b",
  //   name: "Majorelle Garden",
  //   palette: [
  //     { name: 0, color: "hsl(157, 34%, 75%)" },
  //     { name: 0, color: "hsl(157, 33.9%, 65%)" },
  //     { name: 0, color: "hsl(157, 33.8%, 55%)" },
  //     { name: 0, color: "hsl(157, 33.7%, 45%)" },
  //     { name: 0, color: "hsl(157, 33.6%, 35%)" },
  //     { name: 0, color: "hsl(157, 33.5%, 25%)" },
  //     { name: 0, color: "hsl(157, 33.4%, 15%)" },
  //     { name: 0, color: "hsl(157, 33.3%, 5%)" },
  //     { name: 0, color: "hsl(157, 33.2%, -5%)" },
  //     { name: 0, color: "hsl(157, 33.1%, -15%)" },
  //     { name: 0, color: "hsl(157, 33%, -25%)" },
  //   ],
  // };
  const { palette } = useColor();
  const colorName = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

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
          {palette.map((color, index) => {
            return (
              <Palette
                key={index}
                colorInfo={{ color, name: colorName[index] }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
