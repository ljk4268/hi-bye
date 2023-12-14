import CheckIcon from "../Icon/CheckIcon";

const TodoList = () => {
  return (
    <div className="self-stretch h-[56px] shrink-0 flex flex-row items-center justify-start gap-[10px] py-[12px] px-[24px] bg-[#f1f2f8] rounded-[10px]">
      <CheckIcon />
      <div className="text-[16px] leading-[26px] font-['Pretendard'] text-[#212121] whitespace-nowrap">
        방 청소하며 물건 이름 부르기
      </div>
    </div>
  );
};

export default TodoList
