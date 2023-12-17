// components
import MyPageLogo from "../Icon/MyPageLogo";
import CardContent from "./CardContent";
import SelectionButton from "../SelectionButton";
import AlzMainLogo from "../Icon/AlzMainLogo";
import BottomLogo from "../ActionLogo";

// hook
import useFormattedDate from "../../hooks/useFormattedDate";
import useAlertModal from "../../hooks/useAlertModal";

import useStore from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const PMainPage = () => {
  const [action, setAction] = useState("");
  const [textArr, setTextArr] = useState(["질문과 답변", "일기장"]);
  const [protectData, setProtectData] = useState({
    name: "",
    titleCode: "",
    patientName: "",
  });
  const navigate = useNavigate();
  const todayFormatted: string = useFormattedDate();
  const { showAlertModal, AlertModalComponent } = useAlertModal();

  const goPage = (page: string) => {
    navigate(`/alz/${page}`);
  };

  const handleClickAction = useCallback(
    (text?: string) => {
      if (!text) return;
      setAction(text);
      showAlertModal();
    },
    [showAlertModal]
  );

  useEffect(() => {
    const getProtectorData = useStore.getState().protectorData;
    setProtectData((prev) => ({ ...prev, ...getProtectorData }));
  }, []);

  return (
    <div className="relative w-[360px] h-screen flex justify-center items-center bg-white">
      <div className="scroll relative w-[360px] h-[800px] bg-[#fff] overflow-y-auto">
        {/* header logo */}
        <div className="mt-[52px] flex flex-row items-center justify-start gap-[8px] py-[14px] px-[24px] bg-[#fff]">
          <div className="flex-1 text-[18px] leading-[28px] font-['Pretendard'] font-semibold text-[#212121]">
            <AlzMainLogo />
          </div>
          <div className="flex flex-row items-start justify-start">
            <MyPageLogo />
          </div>
        </div>

        {/* content */}
        <div className="pl-[24px] pr-[24px] mt-[24px] flex flex-col items-start justify-start">
          {/* comment */}
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch text-[20px] leading-[30px] font-['Pretendard'] font-bold text-[#212121]">
              안녕하세요.
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
              <div className="flex-1 text-[24px] leading-[36px] font-['Pretendard'] font-bold text-[#212121]">
                {protectData.name} 님!
              </div>
              <div className="flex flex-col items-center justify-center py-0 px-[12px] bg-[#ff91b9] rounded-[40px]">
                <div className="text-[16px] leading-[26px] font-['Pretendard'] text-[#fff] whitespace-nowrap">
                  {protectData.patientName} 님의 {protectData.titleCode}
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch text-[18px] leading-[28px] font-['Pretendard'] font-medium text-[#000] mt-[40px]">
            {todayFormatted}
            <br />
            {protectData.patientName} 님의 소식입니다.
          </div>
          {/* CardContent */}
          <div className="scroll w-[320px] overflow-x-scroll">
            <CardContent />
          </div>
          {/* 환자기록 모아보기 */}
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] hover:cursor-pointer">
            <SelectionButton
              text="환자 기록 모아보기"
              onClick={() => {
                goPage("collection");
              }}
            />
          </div>
          <div className="mt-[40px] self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
              우리 가족은 어떻게 지내고 있을까요?
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              {textArr.map((text) => {
                return (
                  <SelectionButton
                    key={text}
                    text={text}
                    onClick={handleClickAction}
                    isActive={action === text}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute left-[24px] right-[24px] top-[810px] flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] text-[#000]">
            클로바? 알츠 AI?를 통해 <br />
            기억력 개선에 도움이 되는
            <br />
            질문을 만들어 보세요!
          </div>
          <div className="self-stretch h-[56px] shrink-0 flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid border-[#841eff] rounded-[10px]">
            <div className="text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#631db1] text-center whitespace-nowrap">
              질문 추천받기
            </div>
          </div>
        </div>
        
      </div>
      {/* 알츠로고 */}
      <BottomLogo />
      {/* 팝업 */}
      {AlertModalComponent}
    </div>
  );
};
export default PMainPage;
