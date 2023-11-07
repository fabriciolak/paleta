import React from "react";
import Logo from "@/components/Logo";

function HeaderMemo() {
  return (
    <header className="w-full h-14 px-6 py-2 flex items-center justify-center border-b border-b-cod-gray-400/20">
      <div className="w-[1280px] flex items-center justify-between">
        <Logo />
      </div>
    </header>
  );
}

export const Header = React.memo(HeaderMemo);
