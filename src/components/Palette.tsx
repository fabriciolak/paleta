import React from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { generate } from "@/store/slices/color";
import { useColor } from "@/hooks/useColor";
import { ColorPicker } from "./ColorPicker";
import { ColorScale } from "./ColorScale";
import chroma from "chroma-js";
import { useWindowDimension } from "@/hooks/useWindowDimension";

export function Palette() {
  const { color, palette } = useColor();
  const loading = true;
  const [inputValue, setInputValue] = React.useState<string>(color);
  const { width } = useWindowDimension();
  const dispatch = useAppDispatch();

  const IS_MOBILE = width <= 640;

  function handleGenerate() {
    const inputValueHex = inputValue.replace("#", "");
    const isValidHex = chroma.valid(inputValue) && inputValueHex.length <= 6;

    if (isValidHex) {
      dispatch(generate({ color: inputValue }));
      setInputValue("");
    }
  }

  React.useEffect(() => {
    dispatch(generate({ color: "" }));

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();

        dispatch(generate({ color: "" }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [dispatch]);

  const colorGeneratedIndex = palette.findIndex((value) => value === color);

  return (
    <div>
      <div className="w-full flex justify-center mt-16">
        <div className="w-[624px] px-6">
          <div className="space-y-6">
            <h1 className="md:text-7xl text-4xl text-center font-bold -tracking-[2px]">
              Tailwind CSS palette generator
            </h1>
            <p className="md:text-base text-sm text-center font-medium">
              Paleta is a Tailwind CSS color Palette Generator. Press spacebar
              or enter a hex code value, Click &apos;Generate Palette&apos; and
              craft your Tailwind Project&apos;s Perfect Palette
            </p>
          </div>

          <div className="flex gap-2 mt-8 sm:static fixed bottom-16 inset-x-4 sm:inset-0 z-10 sm:z-0 sm:h-auto bg-cod-gray-50 sm:bg-transparent p-4 sm:p-0 border sm:border-none border-cod-gray-600/20 rounded-full sm:rounded-none shadow-sm sm:shadow-none">
            <div className="flex flex-1 gap-4 bg-cod-gray-50 sm:bg-transparent px-6 items-center border border-cod-gray-600/20 rounded-full sm:rounded-lg">
              <div className="flex items-center justify-center">
                <ColorPicker />
              </div>

              <input
                type="text"
                className="w-full outline-none "
                placeholder={color}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            <button
              onClick={handleGenerate}
              className="h-12 px-6 py-2 flex items-center bg-cod-gray-950 text-cod-gray-50 rounded-full md:rounded-lg"
            >
              {IS_MOBILE ? "Random" : "Generate"}
            </button>
          </div>
        </div>
      </div>

      <section className="w-full mt-16">
        <div className="max-w-7xl space-y-4 m-auto px-6">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold leading-8 text-cod-gray-950">
              Generated palette
            </h3>
            <span className="text-base ">Copy your custom palette bellow</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-2 py-4">
            {palette.length > 0
              ? palette.map((color, colorIndex) => {
                  return (
                    <ColorScale
                      color={color}
                      colorIndex={colorIndex}
                      colorGeneratedIndex={colorGeneratedIndex}
                      key={colorIndex}
                    />
                  );
                })
              : Array.from({ length: 11 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-full lg:w-[6.8125rem] lg:h-[220px] h-16 flex flex-col gap-4 rounded-lg bg-cod-gray-500/10"
                  >
                    <div className="w-full h-[144px] rounded-lg p-2 flex justify-end md:justify-center pr-6 md:pr-0 items-center"></div>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}
