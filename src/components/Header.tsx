import Logo from "@/components/Logo";

export function Header() {
  return (
    <div className="w-full h-14 px-6 py-2 flex items-center justify-center border border-b-cod-gray-400/20">
      <div className="w-[1280px] flex items-center justify-between">
        <Logo />

        <nav className="flex gap-2">
          <button className="h-10 px-6 py-2 flex items-center">
            Browse all
          </button>
          <button className="h-10 px-6 py-2 flex items-center bg-cod-gray-950 text-cod-gray-50 rounded-lg">
            Generate Palette
          </button>
        </nav>
      </div>
    </div>
  );
}
