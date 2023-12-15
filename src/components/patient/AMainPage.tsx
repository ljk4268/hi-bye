import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// components
import TodoList from '../todo/TodoList'
import SelectionButton from '../SelectionButton'
import MyPageLogo from '../Icon/MyPageLogo'
import HelpMic from '../Icon/HelpMic'
import Mic from '../Icon/Mic'
import AlzLogo30 from '../Icon/AlzLogo30'


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
  )
}

const AMainPage = () => {
  const [textArr, setTextArr] = useState(['오늘의 질문', '쪽지 남기기'])
  const [action, setAction] = useState('')
  const [help, setHelp] = useState(false)
  const navigate = useNavigate()

  const handleClickAction = useCallback((text?: string) => {
    if(!text) return
    setAction(text)
  }, [])
  const handleToggleHelp = useCallback(() => {
    setHelp((prevHelp) => !prevHelp)
  }, [])

  const handleGoPage = () => {
    navigate(`/alz/chatting`)
  }

  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-[24px] right-[24px] top-[128px] flex flex-col items-start justify-start gap-[42px]">
        {/* 멘트 */}
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
              )
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
  )
}
export default AMainPage
