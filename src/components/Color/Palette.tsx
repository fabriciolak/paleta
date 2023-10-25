import React from "react";

type PaletteProps = React.ComponentProps<"div"> & {
  colorInfo: {
    color: string;
    name: number;
  };
};

export function Palette({ colorInfo }: PaletteProps) {
  return (
    <div className="w-[6.8125rem] h-[13.75rem] flex flex-col gap-4">
      <div
        className="w-full h-[144px] rounded-lg p-2"
        style={{ backgroundColor: colorInfo.color }}
      ></div>

      <div className="flex flex-col gap-1">
        <div className="text-xl leading-8 font-semibold text-cod-gray-950">
          {colorInfo.name}
        </div>
        <span className="text-base text-cod-gray-500">
          {colorInfo.color.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
