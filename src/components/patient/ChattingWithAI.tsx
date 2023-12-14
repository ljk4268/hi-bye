// css
import './ChattingWithAI.css'

// components
import Button from '../Button'
import Arrow from '../Icon/Arrow'
import MicRecognizing from '../MicRecognizing'
import UserAnswer from './UserAnswer'
import AiQuestion from './AiQuestion'

// hook
import useFormattedDate from '../../hooks/useFormattedDate'
import useSpeechToText from '../../hooks/useSpeechToText'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//type
import { IMessage } from '../../interface/commonInterface'
interface ISmallButtonProps {
  text?: string
  isActive?: boolean
  onClick?: () => void
}

const SmallButton: React.FC<ISmallButtonProps> = ({
  text,
  isActive,
  onClick,
}) => {
  const backgroundColor = isActive ? 'bg-[#841EFF]' : 'bg-[#fff]'
  const textColor = isActive ? 'text-[#fff]' : 'text-[#631db1]'
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
  )
}

const ChattingWithAI = () => {
  const navigate = useNavigate()
  const todayFormatted: string = useFormattedDate()
  const { transcript, listening, toggleListening } = useSpeechToText()
  const [message, setMessage] = useState<IMessage[]>([
    {
      id: 0,
      userYn: false,
      message: '오늘 어떤일이 있으셨나요?',
      created_at: Date.now(),
    },
  ])
  const scrollRef = useRef<HTMLDivElement>(null)
  let currentNumber = 1

  const handleGoBack = () => {
    navigate(-1)
  }

  const addNewMessage = () => {
    const newMessage: IMessage = {
      id: currentNumber++,
      userYn: true,
      message: transcript,
      created_at: Date.now(),
    }
    setMessage((prev) => (prev ? [...prev, newMessage] : [newMessage]))
  }

  useEffect(() => {
    if (!scrollRef.current) return

    const location =
      scrollRef.current.scrollHeight - scrollRef.current.clientHeight

    if (listening) {
      scrollRef.current.scrollTo({
        top: location,
        left: 0,
        behavior: 'smooth',
      })
    } else if (transcript) {
      addNewMessage()
    }
  }, [transcript, listening, currentNumber])

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
        {/* content */}
        <div
          ref={scrollRef}
          className="scroll w-[312px] ml-[24px] flex flex-col items-center gap-[24px] overflow-y-auto max-h-[500px]"
        >
          {/* 날짜 */}
          <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#646464] text-center">
            {todayFormatted}
          </div>

          {/* chat */}
          {message?.map((d) =>
            d.userYn ? (
              <UserAnswer key={d.id} text={d.message} />
            ) : (
              <AiQuestion key={d.id} />
            )
          )}

          <div>{listening && <MicRecognizing />}</div>
        </div>
      </div>

      <Button
        text={listening ? '완료' : '말하기'}
        isDone={true}
        onClick={toggleListening}
      />
    </div>
  )
}

export default ChattingWithAI
