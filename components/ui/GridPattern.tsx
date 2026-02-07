import React from "react";

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number | string;
  y?: number | string;
  squares?: number[][];
  className?: string;
}

export function GridPattern({
  width = 20,
  height = 20,
  x = -1,
  y = -1,
  squares,
  className,
  ...props
}: GridPatternProps) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" className={className} {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sqX, sqY], index) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={sqX * width}
              y={sqY * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}