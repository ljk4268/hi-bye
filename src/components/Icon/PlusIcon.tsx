import { memo } from "react";

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.7143 10.7143V3H13.2857V10.7143H21V13.2857H13.2857V21H10.7143V13.2857H3V10.7143H10.7143Z"
        fill="#212121"
      />
    </svg>
  );
};
export default memo(PlusIcon)
