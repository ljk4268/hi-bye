// components
import InputField from '../InputField'

//type
import { IAlzStepProps } from '../../interface/commonInterface'

const AlzThreeStep: React.FC<IAlzStepProps> = ({ userData, setUserData }) => {
  const handleTelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b -]{0,12}$/
    if (regex.test(e.target.value)) {
      setUserData((prevData) => ({ ...prevData, tel: e.target.value }))
    }
  }
  return (
    <div className="absolute left-[24px] right-[24px] top-[214px] flex flex-col items-start justify-start gap-[42px]">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch text-[18px] leading-[28px] font-['Pretendard'] font-medium text-[#000]">
          본인 인증을 위해
          <br />
          김알츠 할머니의 휴대폰 번호를 <br />
          등록해주세요!
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start">
        <InputField
          type="text"
          placeholder="연락처를 입력해주세요"
          value={userData.tel}
          onChange={handleTelChange}
        />
      </div>
    </div>
  )
}

export default AlzThreeStep
