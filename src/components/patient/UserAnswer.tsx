import { memo } from 'react'
import AlzLogo from '../Icon/AlzLogo'

const UserAnswer = ({ text }: { text: string }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-end gap-[9px]">
      <div className="flex flex-col items-end justify-start py-[14px] px-[24px] bg-[#FFE15F] bg-opacity-20 border-[1px] border-solid border-[#924af6] rounded-[12px] overflow-hidden">
        <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] text-[#631db1]">
          {text}
        </div>
      </div>
      <div className="relative w-[32px] h-[32px] shrink-0 bg-[#faff85] border-[1px] border-solid border-[#924af6] rounded-[8px]">
        <div className="absolute left-[18.75%] right-[18.75%] top-[15.62%] bottom-[15.62%]">
          <AlzLogo />
        </div>
      </div>
    </div>
  )
}

export default memo(UserAnswer)
