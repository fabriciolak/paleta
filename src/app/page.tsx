import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="w-full flex justify-center mt-16">
        <div className="w-[624px]">
          <div className="space-y-6">
            <h1 className="text-7xl text-center font-bold leading-[88px]">
              Tailwind CSS palette generator
            </h1>
            <p className="text-center">
              Paleta is a Tailwind CSS color Palette Generator. Press space bar
              or enter a hex code value, Click &apos;Generate Palette&apos; and
              craft your Tailwind Project&apos;s Perfect Palette
            </p>
          </div>

          <div className="flex gap-2 mt-8">
            <div className="flex flex-1 gap-4 px-6 items-center border border-cod-gray-600/20 rounded-lg">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#28675B]" />
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
    </main>
  );
}
