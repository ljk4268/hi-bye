// components
import MyPageLogo from '../Icon/MyPageLogo'
import CardContent from './CardContent'
import SelectionButton from '../SelectionButton'
import AlzLogo30 from '../Icon/AlzLogo30'
import BottomLogo from '../ActionLogo'

// hook
import useFormattedDate from '../../hooks/useFormattedDate'
import { useNavigate } from 'react-router-dom'

const PMainPage = () => {
  const navigate = useNavigate()
  const todayFormatted: string = useFormattedDate()
  
  const goPage = (page: string) => {
    console.log('dfdf')
    navigate(`/alz/${page}`)
  }

  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      {/* 상단로고들 */}
      <div className="mt-[52px] flex flex-row items-center justify-start gap-[8px] py-[14px] px-[24px] bg-[#fff]">
        <div className="flex-1 text-[18px] leading-[28px] font-['Pretendard'] font-semibold text-[#212121]">
          <AlzLogo30 />
        </div>
        <div className="flex flex-row items-start justify-start">
          <MyPageLogo />
        </div>
      </div>

      {/* content */}
      <div className="pl-[24px] pr-[24px] mt-[24px] flex flex-col items-start justify-start">
        {/* 인사 */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch text-[20px] leading-[30px] font-['Pretendard'] font-bold text-[#212121]">
            안녕하세요.
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
            <div className="flex-1 text-[24px] leading-[36px] font-['Pretendard'] font-bold text-[#212121]">
              김보호 님!
            </div>
            <div className="flex flex-col items-center justify-center py-0 px-[12px] bg-[#ff91b9] rounded-[40px]">
              <div className="text-[16px] leading-[26px] font-['Pretendard'] text-[#fff] whitespace-nowrap">
                김알츠 할머니의 남편
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch text-[18px] leading-[28px] font-['Pretendard'] font-medium text-[#000] mt-[40px]">
          {todayFormatted}
          <br />
          김알츠 할머니의 소식입니다.
        </div>
        {/* CardContent */}
        <div className="scroll w-[320px] overflow-x-scroll">
          <CardContent />
        </div>

        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] hover:cursor-pointer">
          {/* 환자기록 모아보기 */}
          <SelectionButton
            text="환자 기록 모아보기"
            onClick={() => {
              goPage('collection')
            }}
          />
        </div>
        <div className="mt-[40px] self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
            우리 가족은 어떻게 지내고 있을까요?
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
            <SelectionButton text="질문과 답변" onClick={() => {}} />
            <SelectionButton text="일기장" onClick={() => {}} />
          </div>
        </div>
      </div>

      {/* 알츠로고 */}
      <BottomLogo />
    </div>
  )
}
export default PMainPage
