import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/store";

// components
import TodoList from "../todo/TodoList";
import SelectionButton from "../SelectionButton";
import MyPageLogo from "../Icon/MyPageLogo";
import HelpMic from "../Icon/HelpMic";
import Mic from "../Icon/Mic";
import AlzLogo30 from "../Icon/AlzLogo30";
import axios from "axios";

const GoHelp = () => {
  return (
    <div className="absolute right-[76px] bottom-[58px] flex flex-row items-center justify-start">
      <div className="flex flex-row items-center justify-center py-[10px] px-[18px] bg-[#631db1] rounded-[8px] overflow-hidden">
        <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#faff85] text-center whitespace-nowrap">
          도움이 필요하신가요?
        </div>
      </div>
      {/* 화살표 */}
      <svg
        width="10"
        height="34"
        viewBox="0 0 10 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.58579 14.5858C7.36684 15.3668 7.36684 16.6332 6.58579 17.4142L0 24L1.34596e-07 8L6.58579 14.5858Z"
          fill="#631DB1"
        />
      </svg>
    </div>
  );
};

const AMainPage = () => {
  const [userData, setUserData] = useState({
    name: "",
    titleCode: "",
  });
  const [textArr, setTextArr] = useState(["오늘의 질문", "쪽지 남기기"]);
  const [action, setAction] = useState("");
  const [help, setHelp] = useState(false);
  const navigate = useNavigate();

  const handleClickAction = useCallback((text?: string) => {
    if (!text) return;
    setAction(text);
  }, []);
  const handleToggleHelp = useCallback(() => {
    setHelp((prevHelp) => !prevHelp);
  }, []);

  const handleGoPage = () => {
    const apiUrl = "/testapp/v1/chat-completions/HCX-002";
    const headers = {
      "X-NCP-CLOVASTUDIO-API-KEY":
        "NTA0MjU2MWZlZTcxNDJiY5F6g/7fG0g7MPpK3u5Ycr59lZWYym2d+NK8pLFAyfR8rfPgSeBn/VsiU6SqLagLZousuJaY4k98E/qTZcIRMNwYHSJK7wagi9e9G/uCfLHAWv4am+PNwS7L75fE4J0lB+owXSkQDZYGO1tl1PmAt0d9PgGLDssg50EOfRPMx5PVW/AvY3RYU3jFAv7mpOP5z5kWGZKcx6seraTxMNpOEts=",
      "X-NCP-APIGW-API-KEY": "seg2juIlIt4vaGm1YijmUbke9alfAlUKEYndVehP",
      "X-NCP-CLOVASTUDIO-REQUEST-ID": "40d203f109fc40538b3d020570e83027",
      "Content-Type": "application/json",
    };
    const data = {
      messages: [
        {
          role: "system",
          content:
            "치매 환자를 대상으로 환자가 대답을 하면 이어서 추가 질문 생성. 단, 대화 중 치매에 대한 내용은 나오지 않아야 하고 추가 질문은 구체적인 대답을 요구하는 질문이어야 함.\n처음에는 어시스턴트 쪽에서 '''오늘은 어떤 일이 있었나요?''' 라고 질문\n\n\n그리고 대화를 끝내겠다고 하면 지금까지 있었던 대화에 대한 감정을 평가.\n\n\n[예시] \n대화 - \n사용자 : 오늘 가족과 함께 저녁을 먹었어.\n어시스턴트 : 좋은 시간을 보내셨네요! 어떤 음식을 드셨나요? \n사용자 : 메뉴는 불고기였어.\n아이들이 너무 이쁘더라. 다들 건강해 보여서 좋았어.\n어시스턴트 : 안심하신 것 같아서 다행이에요. 가족들 소식은 궁금하지 않으세요?\n사용자 : 대화 끝내기\n어시스턴트 : 오늘은 만족, 안심하고 계시네요. 가족들과의 저녁식사로 좋은 시간을 보내신 것 같아요.",
        },
      ],
      topP: 0.8,
      topK: 0,
      maxTokens: 256,
      temperature: 0.5,
      repeatPenalty: 5.0,
      stopBefore: [],
      includeAiFilters: true,
    };
    axios
      .post(apiUrl, data, { headers })
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.error(error);
      });

    navigate(`/alz/chatting`);
  };

  useEffect(() => {
    const getUserData = useStore.getState().userData;
    setUserData((prev) => ({ ...prev, ...getUserData }));
  }, []);

  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-[24px] right-[24px] top-[128px] flex flex-col items-start justify-start gap-[42px]">
        {/* 멘트 */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch text-[20px] leading-[30px] font-['Pretendard'] font-bold text-[#212121]">
            안녕하세요.
          </div>
          <div className="self-stretch text-[24px] leading-[36px] font-['Pretendard'] font-bold text-[#212121]">
            {userData.name} {userData.titleCode}!
            <br />
            오늘도 좋은 하루 보내세요!
          </div>
        </div>
        {/* 알츠랑 이야기하기 */}
        <div className="self-stretch flex flex-col items-center justify-start hover:cursor-pointer">
          <div
            className="self-stretch h-[130px] shrink-0 flex flex-col items-center justify-center gap-[10px] py-[12px] px-[24px] bg-[#841eff] rounded-[20px]"
            onClick={handleGoPage}
          >
            <Mic width="54" height="54" />
            <div className="text-[18px] leading-[28px] font-['Pretendard'] font-semibold text-[#fff] text-center whitespace-nowrap">
              알츠랑 이야기하기
            </div>
          </div>
        </div>
        {/* 가족들과 함꼐하기 */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
            가족들과 함께하기
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
        {/* 오늘의 할 일 */}
        <div className="self-stretch h-[282px] shrink-0 flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
            <div className="flex-1 text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
              오늘의 할 일
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.7143 10.7143V3H13.2857V10.7143H21V13.2857H13.2857V21H10.7143V13.2857H3V10.7143H10.7143Z"
                fill="#212121"
              />
            </svg>
          </div>
          <TodoList />
        </div>
      </div>
      {/* 로고 */}
      <div className="absolute left-0 right-0 top-[52px] flex flex-row items-center justify-start gap-[8px] py-[14px] px-[24px] bg-[#fff] overflow-hidden">
        <div className="flex-1 text-[18px] leading-[28px] font-['Pretendard'] font-semibold text-[#212121]">
          <AlzLogo30 />
        </div>
        <MyPageLogo />
      </div>
      {/* 마이크 아이콘 */}
      <div
        className="absolute right-[16px] bottom-[48px] hover:cursor-pointer"
        onClick={handleToggleHelp}
      >
        <HelpMic />
      </div>
      {help && <GoHelp />}
    </div>
  );
};
export default AMainPage;
