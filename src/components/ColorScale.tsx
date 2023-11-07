import { verifyContrast } from "@/util/verify-contrast";

interface PaletteProps {
  color: string;
  colorIndex: number;
}

export function ColorScale({ color, colorIndex }: PaletteProps) {
  const colorName = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  const contrast = verifyContrast(color);

  return (
    <>
      <div className="w-full lg:w-[6.8125rem] lg:h-[220px] h-16 flex flex-col gap-4 relative">
        <div
          className="w-full h-[144px] rounded-lg p-2"
          style={{ backgroundColor: color }}
        ></div>

        <div
          data-valid-contrast={contrast.validConstrast}
          className="flex flex-col gap-1 absolute top-2 left-6 lg:static  data-[valid-contrast=true]:text-cod-gray-50"
        >
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
