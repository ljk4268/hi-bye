import { memo } from "react";

const Complete = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
    >
      <rect x="1" y="1" width="66" height="66" rx="33" fill="#841EFF" />
      <rect
        x="1"
        y="1"
        width="66"
        height="66"
        rx="33"
        stroke="#841EFF"
        strokeWidth="2"
      />
      <path
        d="M28.3333 46.4667L17 35.1334L20.9667 31.1667L28.3333 38.5334L47.0333 19.8334L51 23.8L28.3333 46.4667Z"
        fill="white"
      />
    </svg>
  );
};

export default memo(Complete);
