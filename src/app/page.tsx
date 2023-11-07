"use client";

import React from "react";
import Highlight from "react-highlight";

import { Header } from "@/components/Header";
import { useColor } from "@/hooks/useColor";
import { Palette } from "@/components/Palette";

export default function Home() {
  return (
    <main>
      <Header />

      <Palette />

      <div className="w-full mt-16 px-6">
        <div className="max-w-7xl m-auto grid md:grid-cols-2 gap-6">
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

          <section className="bg-cod-gray-950 rounded-lg p-4">
            <div className="h-full text-cod-gray-100">
              <Highlight className="json">
                {`module.exports = {
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
              }`}
              </Highlight>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
