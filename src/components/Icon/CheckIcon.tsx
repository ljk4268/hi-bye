import React from "react";

interface ICheckIconPros {
  check?: boolean
  onClick?: () => void
}

const CheckIcon: React.FC<ICheckIconPros> = ({ check}) => {
  return (
    <>
      {check ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16 29.3332C8.63619 29.3332 2.66666 23.3636 2.66666 15.9998C2.66666 8.63604 8.63619 2.6665 16 2.6665C23.3637 2.6665 29.3333 8.63604 29.3333 15.9998C29.3333 23.3636 23.3637 29.3332 16 29.3332ZM14.6701 21.3332L24.0983 11.9051L22.2127 10.0195L14.6701 17.562L10.8989 13.7906L9.01331 15.6764L14.6701 21.3332Z"
            fill="#841EFF"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.66666 15.9998C2.66666 23.3636 8.63619 29.3332 16 29.3332C23.3637 29.3332 29.3333 23.3636 29.3333 15.9998C29.3333 8.63604 23.3637 2.6665 16 2.6665C8.63619 2.6665 2.66666 8.63604 2.66666 15.9998ZM26.6667 15.9998C26.6667 21.8909 21.8911 26.6665 16 26.6665C10.109 26.6665 5.33332 21.8909 5.33332 15.9998C5.33332 10.1088 10.109 5.33317 16 5.33317C21.8911 5.33317 26.6667 10.1088 26.6667 15.9998Z"
            fill="#841EFF"
          />
        </svg>
      )}
    </>
  );
};

export default CheckIcon;