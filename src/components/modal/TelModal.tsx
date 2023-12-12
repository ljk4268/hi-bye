import { useState, EventHandler, ReactNode, MouseEventHandler } from 'react'

interface Props {
  onClose?: MouseEventHandler
}

const TelModal = ({ onClose }: Props) => {
  return (
    <div className="absolute left-0 top-0 w-[360px] h-[800px]">
      <div className="w-[360px] h-[800px] bg-[#00000099]"></div>
      <div className="absolute left-[6.67%] right-[6.67%] top-[37.5%] bottom-[37.5%] flex flex-col items-center justify-center gap-[20px] py-[20px] px-[32px] bg-[#fff] rounded-[20px]">
        <div className="self-stretch text-[18px] leading-[28px] font-['Pretendard'] font-semibold text-[#212121]">
          김알츠 할머니에게 전화를 걸어
          <br />
          휴대폰 번호를 등록할게요!
          <br />
          전화 걸기를 허용하시겠어요?
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[16px]">
          <div className="flex-1 h-[56px] flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid border-[#841eff] rounded-[10px]">
            <div className="text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#631db1] text-center whitespace-nowrap">
              아니요
            </div>
          </div>
          <div className="flex-1 h-[56px] flex flex-row items-center justify-center py-[12px] px-[24px] bg-[#841eff] rounded-[10px]">
            <div className="text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#fff] text-center whitespace-nowrap">
              네
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TelModal
