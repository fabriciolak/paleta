import React from "react";

export function ColorGrid() {
  const colors = React.useMemo(() => {
    return {
      color: "#28675b",
      name: "Majorelle Garden",
      palette: [
        {
          name: 50,
          color: "#f3faf7",
        },
        {
          name: 100,
          color: "#d6f1e8",
        },
        {
          name: 200,
          color: "#ADE2D2",
        },
        {
          name: 300,
          color: "#7cccb6",
        },
        {
          name: 400,
          color: "#51b099",
        },
        {
          name: 500,
          color: "#37957f",
        },
        {
          name: 600,
          color: "#2a7767",
        },
        {
          name: 700,
          color: "#28675b",
        },
        {
          name: 800,
          color: "#224d46",
        },
        {
          name: 900,
          color: "#20413b",
        },
        {
          name: 950,
          color: "#0d2622",
        },
      ],
    };
  }, []);

  return (
    <div className="w-full mt-16">
      <div className="max-w-7xl space-y-4 m-auto">
        {/* Title */}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold leading-8 text-cod-gray-950">
            Generated palette
          </h3>
          <span className="text-base ">Majorelle Garden</span>
        </div>

        {/* Color Grid */}
        <div className="flex gap-2 py-4">
          {/* Color */}
          {colors.palette.map((color, index) => {
            return (
              <>
                <div
                  key={index}
                  className="w-[109px] h-[220px] flex flex-col gap-4"
                >
                  <div
                    className="w-full h-[144px] rounded-lg p-2"
                    style={{ backgroundColor: color.color }}
                  ></div>
                  <div className="flex flex-col gap-1">
                    <div className="text-xl leading-8 font-semibold text-cod-gray-950">
                      {color.name}
                    </div>
                    <span className="text-base text-cod-gray-500">
                      {color.color.toUpperCase()}
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
