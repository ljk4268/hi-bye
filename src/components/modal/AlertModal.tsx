import React, { memo } from "react";

// type
import { IAlertModalProps } from "../../interface/commonInterface";

const AlertModal: React.FC<IAlertModalProps> = ({text1, text2, onClick, buttonText='확인했어요. 응원합니다!'}) => {
  return (
    <>
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#00000099]"></div>
      <div className="absolute -translate-y-1/2 left-[24px] top-1/2 w-[312px] flex flex-col items-end justify-start gap-[16px] p-[24px] bg-[#FCFADC] border-[1px] border-solid border-[#924af6] rounded-[12px] overflow-hidden">
        <div className="self-stretch h-[52px] text-[16px] leading-[26px] font-['Pretendard'] text-[#631db1] text-center flex flex-col justify-center">
          {text1}
          <br />
          {text2}
        </div>
        <div className="self-stretch flex flex-row items-start justify-center">
          <div className="flex-1 flex flex-row items-center justify-center py-[8px] px-[16px] bg-[#ffe15f] rounded-[20px] hover:cursor-pointer" onClick={onClick}>
            <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#212121] text-center whitespace-nowrap">
              {buttonText}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(AlertModal);
