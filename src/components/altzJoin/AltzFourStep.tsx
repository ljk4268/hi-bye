// components
import InputField from '../InputField'

//type
import { IAltzStepProps } from '../../interface/commonInterface'

const AltzFourStep: React.FC<IAltzStepProps> = ({ userData, setUserData }) => {
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevData) => ({ ...prevData, password: e.target.value }))
  }

  return (
    <div className="absolute left-[24px] right-[24px] top-[214px] flex flex-col items-start justify-start gap-[42px]">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch text-[18px] leading-[28px] font-['Pretendard'] font-medium text-[#000]">
          마지막으로,
          <br />
          안전을 위해 <br />
          비밀번호를 등록해주세요!
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <InputField
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={userData.password}
          onChange={handlePasswordChange}
        />
        <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#212121] text-center whitespace-nowrap hover:cursor-pointer">
          도움이 필요한가요?
        </div>
      </div>
    </div>
  )
}

export default AltzFourStep
