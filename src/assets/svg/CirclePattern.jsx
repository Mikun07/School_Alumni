import React from "react";

const CirclePattern = ({
  width = "237",
  height = "607",
  color = "#093F00",
  opacity = "0.2"
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 237 607"
    >
      <circle
        cx={12.5}
        cy={162.5}
        r={12.5}
        fill={color}
        fillOpacity={opacity}
        style={{
          mixBlendMode: "overlay",
        }}
      />
      <circle cx={12.5} cy={162.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={12.5} cy={234.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={12.5} cy={306.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={12.5} cy={378.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={12.5} cy={450.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={12.5} cy={522.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={12.5} cy={594.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle
        cx={65.5}
        cy={129.5}
        r={12.5}
        fill={color}
        fillOpacity={opacity}
        style={{
          mixBlendMode: "overlay",
        }}
      />
      <circle cx={65.5} cy={129.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={65.5} cy={201.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={65.5} cy={273.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={65.5} cy={345.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={65.5} cy={417.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={65.5} cy={489.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={65.5} cy={561.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle
        cx={118.5}
        cy={90.5}
        r={12.5}
        fill={color}
        fillOpacity={opacity}
        style={{
          mixBlendMode: "overlay",
        }}
      />
      <circle cx={118.5} cy={90.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={118.5} cy={162.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={118.5} cy={234.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={118.5} cy={306.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={118.5} cy={378.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={118.5} cy={450.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={118.5} cy={522.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle
        cx={171.5}
        cy={51.5}
        r={12.5}
        fill={color}
        fillOpacity={opacity}
        style={{
          mixBlendMode: "overlay",
        }}
      />
      <circle cx={171.5} cy={51.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={171.5} cy={123.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={171.5} cy={195.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={171.5} cy={267.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={171.5} cy={339.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={171.5} cy={411.5} r={12.5} fill={color} fillOpacity={opacity} />
      <circle cx={171.5} cy={483.5} r={12.5} fill={color} fillOpacity={opacity} />
      <g fill={color} fillOpacity={opacity}>
        <circle cx={224.5} cy={12.5} r={12.5} />
        <circle cx={224.5} cy={12.5} r={12.5} />
        <circle cx={224.5} cy={84.5} r={12.5} />
        <circle cx={224.5} cy={156.5} r={12.5} />
        <circle cx={224.5} cy={228.5} r={12.5} />
        <circle cx={224.5} cy={300.5} r={12.5} />
        <circle cx={224.5} cy={372.5} r={12.5} />
        <circle cx={224.5} cy={444.5} r={12.5} />
      </g>
    </svg>
  );
};

export default CirclePattern;
