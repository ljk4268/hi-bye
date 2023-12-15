//components
import InputField from "../../InputField";

// type
import { IProtectorStepProps } from "../../../interface/commonInterface";
import { useCallback } from "react";

const ProThreeStep: React.FC<IProtectorStepProps> = ({
  protectorData,
  setProtectorData,
}) => {
  const handleProtectorPasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setProtectorData((prev) => ({
        ...prev,
        protectorPassword: e.target.value,
      }));
    },
    [setProtectorData]
  );
  const handleProtectorTelChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const regex = /^[0-9\b -]{0,12}$/;
      if (regex.test(e.target.value)) {
        setProtectorData((prev) => ({ ...prev, protectorTel: e.target.value }));
      }
    },
    [setProtectorData]
  );
  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-[24px] right-[24px] top-[214px] flex flex-col items-start justify-start gap-[42px]">
        {/* content */}
        <div className="self-stretch flex flex-col items-start justify-end">
          <div className="self-stretch text-[18px] leading-[28px] text-[#000]">
            <span className="font-['Pretendard'] font-medium">
              가입 시 필요한 <br />
              보호자 정보를 입력해주세요.
            </span>
          </div>
        </div>
        {/* inputField */}
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="w-[312px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
              휴대폰 번호
            </div>
            <InputField
              type="text"
              value={protectorData.protectorTel}
              onChange={handleProtectorTelChange}
              placeholder="번호를 입력해주세요"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="w-[312px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
              비밀번호
            </div>
            <InputField
              type="text"
              value={protectorData.protectorPassword}
              onChange={handleProtectorPasswordChange}
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProThreeStep;
