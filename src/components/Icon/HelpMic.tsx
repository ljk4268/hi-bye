import { memo } from 'react'

const HelpMic = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="58"
        height="58"
        rx="29"
        stroke="#D2A2FF"
        strokeWidth="2"
      />
      <g opacity="0.7" filter="url(#filter0_b_84_2108)">
        <circle cx="30" cy="30" r="25" fill="#841EFF" />
      </g>
      <path
        d="M30.0001 15.2727C27.4069 15.2727 25.3047 17.4706 25.3047 20.1818V26.7273C25.3047 29.4386 27.4069 31.6364 30.0001 31.6364C32.5932 31.6364 34.6954 29.4386 34.6954 26.7273V20.1818C34.6954 17.4706 32.5932 15.2727 30.0001 15.2727ZM30.0001 12C34.322 12 37.8256 15.6631 37.8256 20.1818V26.7273C37.8256 31.2459 34.322 34.9091 30.0001 34.9091C25.6781 34.9091 22.1745 31.2459 22.1745 26.7273V20.1818C22.1745 15.6631 25.6781 12 30.0001 12ZM16 28.3636H19.1552C19.9146 33.9147 24.4807 38.1818 30.0001 38.1818C35.5193 38.1818 40.0853 33.9147 40.8449 28.3636H44C43.2783 35.1899 38.0942 40.61 31.5652 41.3647V48H28.435V41.3647C21.9059 40.61 16.7218 35.1899 16 28.3636Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b_84_2108"
          x="-15"
          y="-15"
          width="90"
          height="90"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_84_2108"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_84_2108"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
export default memo(HelpMic)
