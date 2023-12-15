// component
import Complete from "../../Icon/Complete";

//type
import { IProtectorStepProps } from "../../../interface/commonInterface";

const ProLastStep: React.FC<IProtectorStepProps> = ({ protectorData }) => {
  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-[24px] right-[24px] top-[214px] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
          <div className="self-stretch text-[24px] leading-[36px] font-['Pretendard'] text-[#000]">
            안녕하세요
            <br />
            {protectorData.patientName}님의 보호자
            <br />
            <div className="font-bold">{protectorData.protectorName} 님!</div>
          </div>
          <div className="self-stretch text-[18px] leading-[28px] font-['Pretendard'] font-medium text-[#000]">
            매일매일 <br />
            {protectorData.patientName}님 소식을 알려드릴게요.
          </div>
        </div>
      </div>
      <div className="absolute left-[146px] top-[114px] w-[68px] h-[68px] flex flex-row items-center justify-center bg-[#841eff] border-[2px] border-solid border-[#841eff] rounded-[40px]">
        <Complete />
      </div>
    </div>
  );
};

export default ProLastStep;
