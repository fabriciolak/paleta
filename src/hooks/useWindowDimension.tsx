import React from "react";

export function useWindowDimension() {
  const [dimension, setDimension] = React.useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  function updateDimension() {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  React.useEffect(() => {
    window.addEventListener("resize", updateDimension);

    return () => window.removeEventListener("resize", updateDimension);
  }, [dimension]);

  const { width, height } = dimension;

  return {
    width: width,
    height: height,
  };
}
