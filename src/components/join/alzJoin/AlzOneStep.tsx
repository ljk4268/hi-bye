// components
import InputField from "../../InputField";
import Mic from "../../Icon/Mic";

// type
import { IAlzStepProps } from "../../../interface/commonInterface";
import { memo, useCallback } from "react";

const AlzOneStep: React.FC<IAlzStepProps> = ({
  userData,
  setUserData,
  birthRef,
}) => {
  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserData((prev) => ({ ...prev, name: e.target.value }));
    },
    [setUserData]
  );
  const handleBirthChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const regex = /^[0-9\b -]{0,8}$/;
      if (regex.test(e.target.value)) {
        setUserData((prev) => ({ ...prev, birth: e.target.value }));
      }
    },
    [setUserData]
  );
  const handleGenderChange = useCallback(
    (selectedGender: string) => {
      setUserData((prev) => ({ ...prev, gender: selectedGender }));
    },
    [setUserData]
  );

  return (
    <div className="absolute left-[24px] right-[24px] top-[150px] flex flex-col items-start justify-start gap-[42px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
        <div className="self-stretch text-[24px] leading-[36px] font-['Pretendard'] font-bold text-[#000]">
          반가워요!
        </div>
        <div className="self-stretch text-[18px] leading-[28px] font-['Pretendard'] font-medium text-[#000]">
          환자분에 대해 더 알고 싶어요.
          <br />
          정확한 정보를 제공해드리기 위해 개인정보를 받고있어요.
        </div>
      </div>

      {/* field */}
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        {/* name */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="w-[312px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
            성함이 어떻게 되세요?
          </div>
          <InputField
            type="text"
            value={userData.name}
            onChange={handleNameChange}
            placeholder="성함을 입력해주세요"
          >
            <div className="hover:cursor-not-allowed">
              <Mic />
            </div>
          </InputField>
        </div>
        {/* gender */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="w-[312px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
            성별을 알려주세요!
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[16px]">
            <div
              className={`flex-1 h-[56px] flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid rounded-[10px] text-[#631DB1] border-[#841EFF] hover:cursor-pointer ${
                userData.gender === "man" ? "bg-[#841EFF]" : ""
              }`}
              onClick={() => handleGenderChange("man")}
            >
              <div
                className={`text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-center whitespace-nowrap ${
                  userData.gender === "man" ? "text-[#fff]" : ""
                }`}
              >
                남자
              </div>
            </div>
            <div
              className={`flex-1 h-[56px] flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid rounded-[10px] text-[#631DB1] border-[#841EFF] hover:cursor-pointer ${
                userData.gender === "woman" ? "bg-[#841EFF] text-[#fff]" : ""
              }`}
              onClick={() => handleGenderChange("woman")}
            >
              <div
                className={`text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-center whitespace-nowrap ${
                  userData.gender === "woman" ? "text-[#fff]" : ""
                }`}
              >
                여자
              </div>
            </div>
          </div>
        </div>
        {/* birth */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="w-[312px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
            생년월일을 알려주세요!
          </div>
          <InputField
            inputRef={birthRef}
            type="text"
            value={userData.birth}
            onChange={handleBirthChange}
            placeholder="ex) 19000101"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(AlzOneStep);
