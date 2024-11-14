'use client';

const MenuSvg = ({ openNavigation }) => {
  return (
    <svg
      className="overflow-visible"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      {/* First Rect */}
      <rect
        className="transition-transform duration-300 ease-in-out"
        width="20"
        height="2"
        rx="1"
        fill="white"
        y={openNavigation ? "5" : "0"}
        transform-origin="10 1" /* Center the origin for rotation */
        transform={`rotate(${openNavigation ? "45" : "0"})`}
      />
      {/* Second Rect */}
      <rect
        className="transition-transform duration-300 ease-in-out"
        width="20"
        height="2"
        rx="1"
        fill="white"
        y={openNavigation ? "5" : "10"}
        transform-origin="10 11" /* Center the origin for rotation */
        transform={`rotate(${openNavigation ? "-45" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;
