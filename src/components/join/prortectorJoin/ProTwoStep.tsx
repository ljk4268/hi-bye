//components
import InputField from "../../InputField";

// type
import {
  IProtectorStepProps,
  IRelationShipModalProps,
} from "../../../interface/commonInterface";
import { useEffect, useRef, useState, useCallback } from "react";

const RelationShipModal: React.FC<IRelationShipModalProps> = ({
  setProtectorData,
  setIsShow,
}) => {
  const relationShipTitle = ["남편", "아내", "아들", "딸", "지인", "직접 입력"];
  const handleSelectRelationShip = (relationship: string) => {
    if (relationship === "직접 입력") {
      relationship = "";
    }
    setProtectorData((prev) => ({ ...prev, relationship: relationship }));
    setIsShow(false);
  };
  return (
    <div className="absolute left-[39px] top-[387px] w-[297px] flex flex-wrap items-start justify-start gap-[8px] py-[16px] px-[20px] bg-[#fff] border-[1px] border-solid border-[#d3d3d3] rounded-[10px]">
      {relationShipTitle.map((relationship) => (
        <div
          key={relationship}
          onClick={() => {
            handleSelectRelationShip(relationship);
          }}
          className="flex flex-row items-center justify-center py-[6px] px-[14px] bg-[#e9e9e9] rounded-[10px] hover:cursor-pointer hover:bg-[#faff85] hover:border-[#ffe15f]"
        >
          <div className="text-[12px] leading-[20px] font-['Pretendard'] font-medium text-[#212121] whitespace-nowrap">
            {relationship}
          </div>
        </div>
      ))}
    </div>
  );
};

const ProTwoStep: React.FC<IProtectorStepProps> = ({
  protectorData,
  setProtectorData,
}) => {
  const relationshipRef = useRef<HTMLInputElement>(null);
  const [isShow, setIsShow] = useState(false);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setProtectorData((prev) => ({ ...prev, protectorName: e.target.value }));
    },
    [setProtectorData]
  );
  const handleRelationShipChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value !== "") {
        if (!isShow) {
          setIsShow(false);
        }
      }
      setProtectorData((prev) => ({ ...prev, relationship: e.target.value }));
    },
    [setProtectorData]
  );
  const showModal = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  useEffect(() => {
    if (relationshipRef.current?.value === "") {
      relationshipRef.current?.focus();
    }
  }, [isShow]);

  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-[24px] right-[24px] top-[214px] flex flex-col items-start justify-start gap-[42px]">
        {/* content */}
        <div className="self-stretch flex flex-col items-start justify-end">
          <div className="self-stretch text-[18px] leading-[28px] text-[#000]">
            <span className="font-['Pretendard'] font-medium">
              환자분과 관계와 <br />
              보호자님의 성함을 알려주세요!
            </span>
          </div>
        </div>
        {/* inputField */}
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="w-[312px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
              환자와의 관계
            </div>
            <InputField
              inputRef={relationshipRef}
              type="text"
              value={protectorData.relationship}
              onChange={handleRelationShipChange}
              onClick={showModal}
              placeholder="환자분과 어떤 관계이신가요?"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="w-[312px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
              성함이 어떻게 되시나요?
            </div>
            <InputField
              type="text"
              value={protectorData.protectorName}
              onChange={handleNameChange}
              placeholder="보호자님의 성함을 입력해주세요"
            />
          </div>
        </div>
      </div>
      {isShow && (
        <RelationShipModal
          setProtectorData={setProtectorData}
          setIsShow={setIsShow}
        />
      )}
    </div>
  );
};

export default ProTwoStep;
