// components
import Arrow from '../Icon/Arrow'
import CalendarView from '../Calendar'
import ActionLogo from '../ActionLogo'
import { useNavigate } from 'react-router-dom'

const ViewCollection = () => {
  const navigate = useNavigate()
  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-0 right-0 top-[52px]">
        {/* 기록모아보기 */}
        <div className="flex flex-row items-center justify-center gap-[8px] pt-[14px] pr-[56px] pb-[14px] pl-[24px] bg-[#fff] overflow-hidden hover:cursor-pointer">
          <div
            onClick={() => {
              navigate(-1)
            }}
          >
            <Arrow />
          </div>
          <div className="flex-1 text-[18px] leading-[28px] font-['Pretendard'] font-semibold text-[#212121] text-center">
            기록 모아보기
          </div>
        </div>
        {/* content */}
        <div className="scroll flex flex-col items-center gap-[24px] overflow-y-auto max-h-[638px]">
          <CalendarView />
          <div className="bg-[#F2F2F2] pt-[40px] pb-[40px]">
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-[24px]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                <div className="self-stretch flex flex-col items-start justify-start bg-[#fff] border-[1px] border-solid border-[#bcbcbc] rounded-[16px] overflow-hidden">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px] pt-[10px] px-[24px] pb-[8px] bg-[#924af6]">
                    <div className="text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#fff] whitespace-nowrap">
                      답변
                    </div>
                    <div className="flex-1 text-[16px] leading-[26px] font-['Pretendard'] text-[#fff] text-right">
                      2023년 12월 9일 15:00
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-center gap-[10px] py-[20px] px-[24px]">
                    <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
                      Q. 할아버지는 언제 처음 만나셨어요?
                    </div>
                    <div className="self-stretch text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#212121]">
                      A. 할아버지는 건실한 청년이었지..
                      <br />
                      옛날사진 볼래? 잘생겼지~ 그치만 지금은 쭈굴쭈굴
                      쭈그렁방탱이가 되어부렀어.. 그렇지만 내눈엔 아직도 멋져
                    </div>
                    <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
                      Q. 결혼했을 때는 어떤 기분이었나요?
                    </div>
                    <div className="self-stretch text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#212121]">
                      A. 할아버지는 건실한 청년이었지..
                      <br />
                      옛날사진 볼래? 잘생겼지~ 그치만 지금은 쭈굴쭈굴
                      쭈그렁방탱이가 되어부렀어.. 그렇지만 내눈엔 아직도 멋져
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start bg-[#fff] border-[1px] border-solid border-[#bcbcbc] rounded-[16px] overflow-hidden">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px] pt-[10px] px-[24px] pb-[8px] bg-[#4265ff]">
                    <div className="text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#fff] whitespace-nowrap">
                      일기
                    </div>
                    <div className="flex-1 text-[16px] leading-[26px] font-['Pretendard'] text-[#fff] text-right">
                      2023년 12월 9일 15:00
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-center gap-[10px] py-[20px] px-[24px]">
                    <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
                      오늘은 행복한 기분이 드시는군요!
                    </div>
                    <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
                      오늘은 친구들과 만나 이야기를 나누셔서 기분이
                      좋으셨나봐요. <br />잘 하고 계세요!
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start bg-[#fff] border-[1px] border-solid border-[#bcbcbc] rounded-[16px] overflow-hidden">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px] pt-[10px] px-[24px] pb-[8px] bg-[#4265ff]">
                    <div className="text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#fff] whitespace-nowrap">
                      일기
                    </div>
                    <div className="flex-1 text-[16px] leading-[26px] font-['Pretendard'] text-[#fff] text-right">
                      2023년 12월 9일 15:00
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-center gap-[10px] py-[20px] px-[24px]">
                    <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
                      오늘은 행복한 기분이 드시는군요!
                    </div>
                    <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
                      오늘은 친구들과 만나 이야기를 나누셔서 기분이
                      좋으셨나봐요. <br />잘 하고 계세요!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ActionLogo />
    </div>
  )
}
export default ViewCollection
