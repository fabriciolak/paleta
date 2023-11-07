import { useAppSelector } from "@/store";

export function useColor() {
  return useAppSelector((store) => {
    const { color, palette } = store.color;

    return { color, palette };
  });
}
