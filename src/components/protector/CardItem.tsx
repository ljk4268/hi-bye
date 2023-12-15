import { memo } from 'react'
const CardItem = () => {
  return (
    <div className="cardItem w-[200px] h-[160px] flex flex-col items-start justify-start bg-[#fff] border-[1px] border-solid border-[#bcbcbc] rounded-[16px] overflow-hidden">
      <div className="self-stretch flex flex-row items-center justify-center pt-[10px] px-[24px] pb-[8px] bg-[#841eff]">
        <div className="text-[16px] leading-[26px] font-['Pretendard'] text-[#fff] whitespace-nowrap">
          2023년 12월 9일 15:00
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-center justify-center py-[8px] px-[24px]">
        <div className="flex-1 self-stretch text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
          부산에서 있었던 추억
        </div>
      </div>
    </div>
  )
}

export default memo(CardItem)
