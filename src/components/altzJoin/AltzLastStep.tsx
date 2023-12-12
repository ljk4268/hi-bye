//type
import { IAltzStepProps } from '../../interface/commonInterface'

const AltzLastStep: React.FC<IAltzStepProps> = ({ userData, setUserData }) => {
  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-[24px] right-[24px] top-[214px] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
          <div className="self-stretch text-[24px] leading-[36px] font-['Pretendard'] font-bold text-[#000]">
            {userData.name} {userData.title}!
            <br />
            이제부터
            <br />
            매일 연락드릴게요.
          </div>
          <div className="self-stretch text-[18px] leading-[28px] font-['Pretendard'] font-medium text-[#000]">
            앞으로 함께 즐거운 시간 <br />
            보내기로 약속해요
          </div>
        </div>
      </div>
      <div className="absolute left-[146px] top-[114px] w-[68px] h-[68px] flex flex-row items-center justify-center bg-[#841eff] border-[2px] border-solid border-[#841eff] rounded-[40px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
        >
          <rect x="1" y="1" width="66" height="66" rx="33" fill="#841EFF" />
          <rect
            x="1"
            y="1"
            width="66"
            height="66"
            rx="33"
            stroke="#841EFF"
            stroke-width="2"
          />
          <path
            d="M28.3333 46.4667L17 35.1334L20.9667 31.1667L28.3333 38.5334L47.0333 19.8334L51 23.8L28.3333 46.4667Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}

export default AltzLastStep
