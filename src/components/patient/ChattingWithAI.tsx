// css
import './ChattingWithAI.css'

// components
import AlzLogo from '../Icon/AlzLogo'
import Button from '../Button'
import Arrow from '../Icon/Arrow'
import MicRecognizing from '../MicRecognizing'
import UserAnswer from './UserAnswer'
import AiQuestion from './AiQuestion'

// hook
import useFormattedDate from '../../hooks/useFormattedDate'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ChattingWithAI = () => {
  const navigate = useNavigate()
  const todayFormatted: string = useFormattedDate()
  const [isSpeaking, setIsSpeacking] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleSpeakButtonClick = () => {
    setIsSpeacking((prevIs) => !isSpeaking)
  }

  const handleGoBack = () => {
    navigate(-1)
  }
  useEffect(() => {
    if (scrollRef.current) {
      // isSpeaking이 변경될 때만 스크롤을 맨 아래로 이동
      const location =
        scrollRef.current.scrollHeight - scrollRef.current.clientHeight
      if (isSpeaking) {
        scrollRef.current.scrollTo({
          top: location,
          left: 0,
          behavior: 'smooth',
        })
      }
    }
  }, [isSpeaking])

  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-0 right-0 top-[52px]">
        <div className="flex flex-row items-center justify-center gap-[8px] pt-[14px] pr-[56px] pb-[14px] pl-[24px] bg-[#fff] overflow-hidden">
          <div onClick={handleGoBack}>
            <Arrow />
          </div>
          <div className="flex-1 text-[18px] leading-[28px] font-['Pretendard'] font-semibold text-[#212121] text-center">
            오늘의 기록
          </div>
        </div>
        {/* chat */}
        <div
          ref={scrollRef}
          className="scroll w-[312px] ml-[24px] flex flex-col items-center gap-[24px] overflow-y-auto max-h-[500px]"
        >
          {/* 날짜 */}
          <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#646464] text-center">
            {todayFormatted}
          </div>
          {/* 질문 */}
          <AiQuestion />
          {/* 사용자 대답 */}
          <UserAnswer />
          <div>{isSpeaking && <MicRecognizing />}</div>
        </div>
      </div>

      <Button
        text={isSpeaking ? '완료' : '말하기'}
        isDone={true}
        onClick={handleSpeakButtonClick}
      />
    </div>
  )
}

export default ChattingWithAI
