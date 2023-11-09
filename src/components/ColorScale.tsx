import React from "react";
import { LockKeyhole } from "lucide-react";
import { verifyContrast } from "@/util/verify-contrast";

interface PaletteProps {
  color: string;
  colorIndex: number;
  colorGeneratedIndex: number;
}

export function ColorScale({
  color,
  colorIndex,
  colorGeneratedIndex,
}: PaletteProps) {
  const colorName = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const contrast = verifyContrast(color);

  return (
    <>
      <div
        data-valid-contrast={contrast.validConstrast}
        className="w-full lg:w-[6.8125rem] lg:h-[220px] h-16 flex flex-col gap-4 relative group"
      >
        <div
          className="w-full h-[144px] rounded-lg p-2 flex justify-end md:justify-center pr-6 md:pr-0 items-center"
          style={{ backgroundColor: color }}
        >
          {colorGeneratedIndex === colorIndex && (
            <LockKeyhole className="w-6 h-6 text-cod-gray-950 group-data-[valid-contrast=true]:text-cod-gray-50" />
          )}
        </div>

        <div className="flex flex-col gap-1 absolute top-2 left-6 lg:static  group-data-[valid-contrast=true]:text-cod-gray-50">
          <div className="text-base lg:text-xl lg:leading-8 font-semibold lg:text-cod-gray-950">
            {colorName[colorIndex]}
          </div>
          <span className="text-sm lg:text-base lg:text-cod-gray-950">
            {color}
          </span>
        </div>
      </div>
    </>
  );
}
