import { useState } from "react";
// components
import TodoList from "../todo/TodoList";
import SelectionButton from "../SelectionButton";
import MyPageLogo from "../MyPageLogo";
import Mic from "../Mic";

const AMypage = () => {
  const textArr = ["오늘의 질문", "쪽지 남기기"];
  const [action, setAction] = useState("");
  const [todoList, setTodoList] = useState(['방 청소하며 물건 이름 부르기', ])

  const handleClickAction = (text: string) => {
    setAction(text);
  };
  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-[24px] right-[24px] top-[128px] flex flex-col items-start justify-start gap-[42px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch text-[20px] leading-[30px] font-['Pretendard'] font-bold text-[#212121]">
            안녕하세요.
          </div>
          <div className="self-stretch text-[24px] leading-[36px] font-['Pretendard'] font-bold text-[#212121]">
            김알츠 할머니!
            <br />
            오늘도 좋은 하루 보내세요!
          </div>
        </div>
        {/* 알츠랑 이야기하기 */}
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch h-[130px] shrink-0 flex flex-col items-center justify-center gap-[10px] py-[12px] px-[24px] bg-[#841eff] rounded-[20px]">
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
                  onClick={() => {
                    handleClickAction(text);
                  }}
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
          로고~
        </div>
        <MyPageLogo />
      </div>
      {/* 마이크 아이콘 */}
      {/* <img
        className="absolute right-[16px] bottom-[48px]"
        width="60"
        height="60"
        src="Icon/mic-line84_2108.png"
      ></img> */}
    </div>
  );
};
export default AMypage;
