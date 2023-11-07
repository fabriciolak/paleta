interface PaletteProps {
  color: string;
  colorIndex: number;
}

export function Palette({ color, colorIndex }: PaletteProps) {
  const colorName = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  return (
    <>
      <div className="w-[6.8125rem] h-[13.75rem] flex flex-col gap-4">
        <div
          className="w-full h-[144px] rounded-lg p-2"
          style={{ backgroundColor: color }}
        ></div>

        <div className="flex flex-col gap-1">
          <div className="text-xl leading-8 font-semibold text-cod-gray-950">
            {colorName[colorIndex]}
          </div>
          <span className="text-base text-cod-gray-500">{color}</span>
        </div>
      </div>
    </>
  );
}
