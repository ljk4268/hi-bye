const MyPageLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="31" fill="none">
      <g filter="url(#a)">
        <path
          fill="#000"
          d="M18.364 10.98a4 4 0 0 1 0 5.656l-5.657 5.657a1 1 0 0 1-1.414 0l-5.657-5.657a4 4 0 1 1 5.657-5.657l.707.707.707-.707a4 4 0 0 1 5.657 0ZM12 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
        />
      </g>
      <defs>
        <filter
          id="a"
          width="32"
          height="32"
          x="-4"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_142_3265"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_142_3265"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default MyPageLogo;
