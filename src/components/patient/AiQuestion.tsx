import { memo, useEffect, useState } from "react";
// components
import AlzLogo from "../Icon/AlzLogo";
import Smile from "../Icon/Smile";

const AiQuestion = ({ text }: { text: string }) => {
  const [mode, setMode] = useState<number>(0);
  const renderImage = (value: number) => {
    if (value >= 7 && value <= 9) {
      return <Smile />;
    }
  };
  useEffect(() => {
    const match = text.match(/(\d+)\s*점/);
    const extractedNumber = match ? parseInt(match[1], 10) : 0;
    setMode(extractedNumber);
  }, [text]);
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[9px]">
      <div className="relative w-[32px] h-[32px] shrink-0 bg-[#fff] border-[1px] border-solid border-[#924af6] rounded-[8px]">
        <div className="absolute left-[18.75%] right-[18.75%] top-[15.62%] bottom-[15.62%]">
          <AlzLogo />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-[14px] px-[24px] bg-[#f4f4f4] border-[1px] border-solid border-[#924af6] rounded-[12px] overflow-hidden">
        <div className="text-[16px] leading-[26px] font-['Pretendard'] text-[#631db1]">
          {text}
          <div className="flex justify-center items-center">
            {renderImage(mode)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(AiQuestion);
