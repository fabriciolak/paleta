import React from "react";
import Logo from "@/components/Logo";

function HeaderMemo() {
  return (
    <header className="w-full h-14 px-6 py-2 flex items-center justify-center border-b border-b-cod-gray-400/20">
      <nav className="w-[1280px] flex items-center justify-between">
        <Logo />

        <div className="flex gap-2">
          <button className="h-10 px-6 py-2 flex items-center">
            Browse all
          </button>
          <button className="h-10 px-6 py-2 flex items-center bg-cod-gray-950 text-cod-gray-50 rounded-lg">
            Generate Palette
          </button>
        </div>
      </nav>
    </header>
  );
}

export const Header = React.memo(HeaderMemo);
