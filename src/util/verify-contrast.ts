import chroma from "chroma-js";

export function verifyContrast(color: string) {
  const contrast = chroma.contrast(color, "#FFF");

  // A minimum contrast of 4.5
  const validConstrast = contrast >= 4.5 ? true : false;

  return { contrast, validConstrast };
}