import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// css
import "./ChattingWithAI.css";

// components
import Arrow from "../Icon/Arrow";
import MicRecognizing from "../MicRecognizing";
import UserAnswer from "./UserAnswer";
import AiQuestion from "./AiQuestion";

// hook
import useFormattedDate from "../../hooks/useFormattedDate";
import useSpeechToText from "../../hooks/useSpeechToText";

// type
import {
  IMessage,
  ISmallButtonProps,
  IStopChatModalProps,
} from "../../interface/commonInterface";

// api
import axios from "axios";

const SmallButton: React.FC<ISmallButtonProps> = ({
  text,
  isActive,
  onClick,
}) => {
  const backgroundColor = isActive ? "bg-[#841EFF]" : "bg-[#fff]";
  const textColor = isActive ? "text-[#fff]" : "text-[#631db1]";
  return (
    <div
      className={`flex-1 h-[56px] flex flex-row items-center justify-center py-[12px] px-[24px] border-[2px] border-solid border-[#841eff] rounded-[20px] hover:cursor-pointer ${backgroundColor}`}
      onClick={onClick}
    >
      <div
        className={`text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-center whitespace-nowrap ${textColor}`}
      >
        {text}
      </div>
    </div>
  );
};
const StopChatModal: React.FC<IStopChatModalProps> = ({ onClick }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start shadow-[1px_3px_13px_1px_#0000001f]">
      <div className="flex-1 flex flex-col items-center justify-start gap-[10px] py-[14px] px-[24px] bg-[#fff] border-[2px] border-solid border-[#924af6] rounded-[12px] overflow-hidden">
        <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] text-[#631db1]">
          대화가 종료되었습니다.
          <br />
          오늘의 대화를 일기로 남길 수 있어요. <br />
          남기시겠어요?
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[10px]">
          <div
            className="flex-1 flex flex-row items-center justify-center py-[8px] px-[16px] bg-[#fff] border-[1px] border-solid border-[#841eff] rounded-[20px] hover:cursor-pointer"
            onClick={onClick}
          >
            <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#212121] text-center whitespace-nowrap">
              아니요
            </div>
          </div>
          <div
            className="flex-1 flex flex-row items-center justify-center py-[8px] px-[16px] bg-[#faff85] border-[1px] border-solid border-[#841eff] rounded-[20px] hover:cursor-pointer"
            onClick={onClick}
          >
            <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#212121] text-center whitespace-nowrap">
              네
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChattingWithAI = () => {
  const [message, setMessage] = useState<IMessage[]>([
    {
      id: 0,
      userYn: false,
      message: "안녕하세요! 오늘은 어떤 일이 있었나요?",
    },
  ]);
  const [stopChat, setStopChat] = useState<boolean>(false);
  const [currentNumber, setCurrentNumber] = useState(1);

  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const todayFormatted: string = useFormattedDate();
  const { transcript, listening, toggleListening } = useSpeechToText();

  const handleGoPage = useCallback(() => {
    navigate("/alz/patientPage");
  }, [navigate]);

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handelStopChat = useCallback(() => {
    setStopChat((prevStopChat) => !prevStopChat);
  }, []);

  const chatWithClova = useCallback(
    async (value?: boolean) => {
      const sentence = value === false ? "대화 그만할래" : transcript;
      setCurrentNumber((prev) => prev + 1);

      if (value === false) {
        addNewMessage(value);
      }

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER}/v1/api/talk/clova-stuido`,
          // "http://175.45.200.71/v1/api/talk/clova-stuido",
          { sentence }
        );

        const clovaResponse =
          response.data.replace("응답 받음: ", "") ||
          response.data.replace("알츠 : ", "");
        const aiMessage = {
          id: currentNumber,
          userYn: false,
          message: clovaResponse,
        };

        setMessage((prev) => [...prev, aiMessage]);

        if (value === false) {
          handelStopChat();
        }
      } catch (error) {
        console.error("에러 발생:", error);
      }
    },
    [transcript, handelStopChat]
  );

  const addNewMessage = useCallback(
    function (value?: boolean) {
      setCurrentNumber((prev) => prev + 1);
      const newMessage: IMessage = {
        id: currentNumber,
        userYn: true,
        message: value === false ? "대화 그만할래" : transcript,
      };

      setMessage((prev) => [...prev, newMessage]);

      if (value !== false) {
        chatWithClova();
      }
    },
    [transcript, chatWithClova]
  );

  const scrollToBottom = () => {
    if (!scrollRef.current) return;

    const location =
      scrollRef.current.scrollHeight - scrollRef.current.clientHeight;

    scrollRef.current.scrollTo({
      top: location,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (listening) {
      scrollToBottom();
    } else if (transcript) {
      addNewMessage();
    }
  }, [transcript, listening, addNewMessage]);

  useEffect(() => {
    scrollToBottom();
  }, [message, stopChat]);

  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-0 right-0 top-[52px]">
        <div className="flex flex-row items-center justify-center gap-[8px] pt-[14px] pr-[56px] pb-[14px] pl-[24px] bg-[#fff] overflow-hidden">
          <div onClick={handleGoBack} className="hover:cursor-pointer">
            <Arrow />
          </div>
          <div className="flex-1 text-[18px] leading-[28px] font-['Pretendard'] font-semibold text-[#212121] text-center">
            오늘의 기록
          </div>
        </div>
        {/* content */}
        <div
          ref={scrollRef}
          className="scroll w-[312px] ml-[24px] flex flex-col items-center gap-[24px] overflow-y-auto max-h-[500px]"
        >
          {/* date */}
          <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#646464] text-center">
            {todayFormatted}
          </div>

          {/* chat */}
          {message?.map((d, index) =>
            d.userYn ? (
              <UserAnswer key={index} text={d.message} />
            ) : (
              <AiQuestion key={index} text={d.message} />
            )
          )}
          {/* mic animation */}
          <div>{listening && <MicRecognizing />}</div>

          {/* stopChatModal */}
          {stopChat && <StopChatModal onClick={handleGoPage} />}
        </div>
      </div>

      {/* button */}
      <div className="absolute -translate-x-1/2 left-1/2 bottom-[72px] w-[312px] flex flex-row items-start justify-center gap-[16px]">
        {message.length >= 2 && (
          <SmallButton
            text="대화 그만하기"
            onClick={() => {
              chatWithClova(false);
            }}
          />
        )}
        <SmallButton
          text={listening ? "완료" : "말하기"}
          isActive={true}
          onClick={toggleListening}
        />
      </div>
    </div>
  );
};

export default ChattingWithAI;
