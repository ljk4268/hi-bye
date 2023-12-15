//components
import InputField from '../../InputField'

// type
import { IProtectorStepProps } from '../../../interface/commonInterface'

const ProOneStep: React.FC<IProtectorStepProps> = ({
  protectorData,
  setProtectorData,
}) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProtectorData((prev) => ({ ...prev, patientName: e.target.value }))
  }
  const handleTelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProtectorData((prev) => ({ ...prev, patientTel: e.target.value }))
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProtectorData((prev) => ({ ...prev, patientPassword: e.target.value }))
  }
  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-[24px] right-[24px] top-[214px] flex flex-col items-start justify-start gap-[42px]">
        {/* content */}
        <div className="self-stretch flex flex-col items-start justify-end">
          <div className="self-stretch text-[18px] leading-[28px] text-[#000]">
            <span className="font-['Pretendard'] font-medium">
              환자분의 성함
            </span>
            <span className="font-['Pretendard'] font-semibold">
              , 휴대폰 번호, 비밀 번호
            </span>
            <span className="font-['Pretendard'] font-medium">
              를 <br />
              입력해주세요.
            </span>
          </div>
        </div>
        {/* inputField */}
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="w-[312px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
              성함이 어떻게 되시나요?
            </div>
            <InputField
              type="text"
              value={protectorData.patientName}
              onChange={handleNameChange}
              placeholder="환자분의 성함을 입력해주세요"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="w-[312px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
              휴대폰 번호
            </div>
            <InputField
              type="text"
              value={protectorData.patientTel}
              onChange={handleTelChange}
              placeholder="가입 시 등록한 환자분의 연락처를 입력해주세요"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="w-[312px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
              비밀번호
            </div>
            <InputField
              type="text"
              value={protectorData.patientPassword}
              onChange={handlePasswordChange}
              placeholder="가입 시 등록한 환자분의 비밀번호를 입력해주세요"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProOneStep
