import { memo } from 'react'

const Complete = () => {
  return (
    <div className="absolute left-[146px] top-[114px] w-[68px] h-[68px] flex flex-row items-center justify-center bg-[#841eff] border-[2px] border-solid border-[#841eff] rounded-[40px]">
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
          stroke-width="2"
        />
        <path
          d="M28.3333 46.4667L17 35.1334L20.9667 31.1667L28.3333 38.5334L47.0333 19.8334L51 23.8L28.3333 46.4667Z"
          fill="white"
        />
      </svg>
    </div>
  )
}

export default memo(Complete)
