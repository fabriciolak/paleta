"use client";

import React from "react";

import { Header } from "@/components/Header";
import { Palette } from "@/components/Palette";
import { ColorCopy } from "@/components/ColorCopy";

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

            <p>
              See more in{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://tailwindcss.com/docs/customizing-colors#using-custom-colors"
                className="font-semibold hover:text-blue-500"
              >
                Using custom colors.
              </a>
            </p>
          </section>

          <section className="rounded-lg p-4">
            <div className="h-full text-cod-gray-100">
              <ColorCopy />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
