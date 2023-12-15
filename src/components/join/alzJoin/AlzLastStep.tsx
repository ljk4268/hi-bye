import Complete from "../../Icon/Complete";

//type
import { IAlzStepProps } from "../../../interface/commonInterface";

const AltzLastStep: React.FC<IAlzStepProps> = ({ userData, setUserData }) => {
  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-[24px] right-[24px] top-[214px] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
          <div className="self-stretch text-[24px] leading-[36px] font-['Pretendard'] font-bold text-[#000]">
            {userData.name} {userData.title}!
            <br />
            이제부터
            <br />
            매일 연락드릴게요.
          </div>
          <div className="self-stretch text-[18px] leading-[28px] font-['Pretendard'] font-medium text-[#000]">
            앞으로 함께 즐거운 시간 <br />
            보내기로 약속해요
          </div>
        </div>
      </div>
      <div className="absolute left-[146px] top-[114px] w-[68px] h-[68px] flex flex-row items-center justify-center bg-[#841eff] border-[2px] border-solid border-[#841eff] rounded-[40px]">
        <Complete />
      </div>
    </div>
  );
};

export default AltzLastStep;
