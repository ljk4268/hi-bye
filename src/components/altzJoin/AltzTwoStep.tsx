// components
import SelectionButton from "../SelectionButton";
import InputField from "../InputField";
import Mic from "../Mic";
// types
import { IAltzStepProps } from "../../interface/commonInterface";
import { useEffect, useState } from "react";

const AltzTwoStep: React.FC<IAltzStepProps> = ({ userData, setUserData }) => {
  const titleArr = ["000님", "000 할머니", "기타"];
  const [userTitle, setUserTitle] = useState<string>(userData.title || "");
  const handleTitleChange = (text: string) => {
    setUserData((prevData) => ({ ...prevData, title: text }));
  };
  const handleUserTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserTitle(e.target.value);
  };
  useEffect(() => {
    setUserData((prevData) => ({ ...prevData, title: userTitle }));
  }, [userTitle, setUserData]);
  return (
    <div className="absolute left-[24px] right-[24px] top-[214px] flex flex-col items-start justify-start gap-[42px]">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch text-[18px] leading-[28px] font-['Pretendard'] font-medium text-[#000]">
          호칭은 어떻게 불러드리는게 <br />
          좋을까요?
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        {titleArr.map((title) => {
          return (
            <SelectionButton
              key={title}
              text={title}
              onClick={() => {
                handleTitleChange(title);
              }}
              isActive={userData.title === title}
            />
          );
        })}
        {/* 직접 말씀해주실래요 */}
        <InputField
          type="text"
          value={userTitle}
          onChange={handleUserTitleChange}
          placeholder="직접 말씀해주실래요?"
        >
          <Mic />
        </InputField>
      </div>
    </div>
  );
};

export default AltzTwoStep;
