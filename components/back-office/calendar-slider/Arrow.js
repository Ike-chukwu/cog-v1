import React from "react"

// Custom Next Arrow Component
const NextArrow = ({ className, style, onClick }) => (
  <div
    className={` absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer z-10`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3768 8.79005L0.265625 0.0859375L0.495475 17.6655L15.3768 8.79005Z"
        fill="#4B4B4B"
      />
    </svg>
  </div>
)

// Custom Previous Arrow Component
const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={` absolute top-1/2 transform -translate-y-1/2 left-0 t cursor-pointer z-10`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <svg
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9139 17.1308L1.85304 9.1363L15.3952 1.26092L14.9139 17.1308Z"
        fill="#B1B1B4"
        stroke="#62909F"
      />
    </svg>
  </div>
)

export { NextArrow, PrevArrow }
