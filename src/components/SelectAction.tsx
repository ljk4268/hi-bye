import { memo } from "react";

const SelectAction = () => {
  return (
    <>
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#00000099]"></div>
      <div className="absolute right-[24px] bottom-[124px] w-[148px] flex flex-col items-end justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-center py-[12px] px-[24px] bg-[#fff] border-[2px] border-solid border-[#ffe15f] rounded-[10px] hover:cursor-not-allowed">
          <div className="text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121] text-center whitespace-nowrap">
            질문 등록하기
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-[12px] px-[24px] bg-[#fff] border-[2px] border-solid border-[#ffe15f] rounded-[10px] hover:cursor-not-allowed">
          <div className="text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121] text-center whitespace-nowrap">
            일기 쓰기
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-[12px] px-[24px] bg-[#fff] border-[2px] border-solid border-[#ffe15f] rounded-[10px] hover:cursor-not-allowed">
          <div className="text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121] text-center whitespace-nowrap">
            쪽지 쓰기
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(SelectAction);
