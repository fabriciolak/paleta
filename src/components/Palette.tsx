import React from "react";
import { useDispatch } from "react-redux";
import { ColorPicker } from "./ColorPicker";
import { ColorScale } from "./ColorScale";
import { useColor } from "@/hooks/useColor";
import { generateColorScale } from "@/store/slices/color";

export function Palette() {
  const actionDispatched = React.useRef(false);
  const dispatch = useDispatch();
  const { palette, color } = useColor();

  React.useEffect(() => {
    if (!actionDispatched.current) {
      dispatch(generateColorScale({ color: "#860909" }));
      actionDispatched.current = true;
    }
  }, [actionDispatched, dispatch]);

  React.useEffect(() => {
    window.addEventListener("keydown", function (e) {
      if (e.code === "Space" && e.target == document.body) {
        e.preventDefault();

        dispatch(generateColorScale({ color: "" }));
      }
    });
  }, [dispatch]);

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

          <div className="flex gap-2 mt-8">
            <div className="flex flex-1 gap-4 px-6 items-center border border-cod-gray-600/20 rounded-lg">
              <div className="flex items-center justify-center">
                <ColorPicker />
              </div>

              <input
                type="text"
                className="w-full outline-none"
                placeholder={`${color}`}
              />
            </div>

            <button className="h-12 px-6 py-2 flex items-center bg-cod-gray-950 text-cod-gray-50 rounded-lg">
              Generate Palette
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
            <span className="text-base ">Majorelle Garden</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-2 py-4">
            {palette.map((color, colorIndex) => {
              return (
                <ColorScale
                  color={color}
                  colorIndex={colorIndex}
                  key={colorIndex}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
