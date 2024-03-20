import React from "react";

const RectanglePattern = ({ width = "420", height = "418" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 420 418"
    >
      <path fill="#093F00" d="M350 0h70v70h-70z" />
      <path fill="#0C4B00" d="M350 68h70v70h-70z" />
      <path fill="#43AB00" d="M280 68h70v70h-70z" />
      <path fill="#B0B0B0" d="M280 138h70v70h-70z" />
      <path fill="#175F00" d="M350 138h70v70h-70z" />
      <path fill="#747474" d="M210 208h70v70h-70z" />
      <path fill="#227100" d="M210 348h70v70h-70z" />
      <path fill="#43AB00" d="M70 278h70v70H70z" />
      <path fill="#175F00" d="M140 348h70v70h-70z" />
      <path fill="#0C4B00" d="M70 348h70v70H70z" />
      <path fill="#093F00" d="M0 348h70v70H0z" />
      <path fill="#2D8400" d="M280 348h70v70h-70z" />
      <path fill="#B0B0B0" d="M140 278h70v70h-70v-70Z" />
      <path fill="#D9D9D9" d="M210 278h70v70h-70z" />
      <path fill="#175F00" d="M280 278h70v70h-70z" />
      <path fill="#389800" d="M350 348h70v70h-70z" />
      <path fill="#2D8400" d="M350 278h70v70h-70z" />
      <path fill="#227100" d="M350 208h70v70h-70z" />
      <path fill="#D9D9D9" d="M280 208h70v70h-70z" />
    </svg>
  );
};

export default RectanglePattern;
