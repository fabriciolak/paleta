import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/logo.svg"
        alt="A black rectangle with rounded corners and a Paint Palette in the middle"
        width={36}
        height={36}
        priority
      />

      <h2 className="text-2xl font-semibold">Paleta</h2>
    </div>
  );
}
