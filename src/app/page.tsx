"use client";

import React from "react";
import Highlight from "react-highlight";

import { ColorPalette } from "@/components/Color";
import { Header } from "@/components/Header";
import { useColor } from "@/hooks/useColor";

export default function Home() {
  const { color } = useColor();

  return (
    <main>
      <Header />

      <div className="w-full flex justify-center mt-16">
        <div className="w-[624px]">
          <div className="space-y-6">
            <h1 className="text-7xl text-center font-bold leading-[88px] -tracking-[2px]">
              Tailwind CSS palette generator
            </h1>
            <p className="text-center font-medium">
              Paleta is a Tailwind CSS color Palette Generator. Press spacebar
              or enter a hex code value, Click &apos;Generate Palette&apos; and
              craft your Tailwind Project&apos;s Perfect Palette
            </p>
          </div>

          <div className="flex gap-2 mt-8">
            <div className="flex flex-1 gap-4 px-6 items-center border border-cod-gray-600/20 rounded-lg">
              <div>
                <div
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: color }}
                />
              </div>

              <input
                type="text"
                className="w-full outline-none"
                placeholder="#28675B"
              />
            </div>

            <button className="h-12 px-6 py-2 flex items-center bg-cod-gray-950 text-cod-gray-50 rounded-lg">
              Generate Palette
            </button>
          </div>
        </div>
      </div>

      <ColorPalette />

      <div className="w-full mt-16">
        <div className="max-w-7xl m-auto grid grid-cols-2 gap-6">
          {/* Using custom colors */}
          <section className="space-y-4">
            <h3 className="text-xl leading-8 font-medium">
              Using custom Tailwind colors
            </h3>
            <p className="font-normal">
              If you’d like to completely replace the default color palette with
              your own custom colors, add your colors directly under the{" "}
              <span className="font-medium">`theme.colors`</span> section of
              your configuration file:
            </p>
          </section>

          {/* Generated palette */}
          <section className="bg-cod-gray-950 rounded-lg p-4">
            <div className="h-full text-cod-gray-100">
              <Highlight className="json">{`module.exports = {
       theme: {
        colors: {
          'cod-gray': {
            '50': '#f6f6f6',
            '100': '#e7e7e7',
            '200': '#d1d1d1',
            '300': '#b0b0b0',
            '400': '#888888',
            '500': '#6d6d6d',
            '600': '#5d5d5d',
            '700': '#4f4f4f',
            '800': '#454545',
            '900': '#3d3d3d',
            '950': '#121212',
          }
        }
      }
     }`}</Highlight>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
