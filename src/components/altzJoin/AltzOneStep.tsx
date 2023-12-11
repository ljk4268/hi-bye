// components
import InputField from '../InputField'

// type
import { IAltzStepProps } from '../../interface/commonInterface'

const AltzOneStep: React.FC<IAltzStepProps> = ({
  userData,
  setUserData,
  birthRef
}) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({ ...prev, name: e.target.value }))
  }
  const handleBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b -]{0,8}$/
    if (regex.test(e.target.value)) {
      setUserData((prev) => ({ ...prev, birth: e.target.value }))
    }
  }
  const handleGenderChange = (selectedGender: string) => {
    setUserData((prev) => ({ ...prev, gender: selectedGender }))
  }

  
  return (
    <div className="absolute left-[24px] right-[24px] top-[150px] flex flex-col items-start justify-start gap-[42px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
        <div className="self-stretch text-[24px] leading-[36px] font-['Pretendard'] font-bold text-[#000]">
          반가워요!
        </div>
        <div className="self-stretch text-[18px] leading-[28px] font-['Pretendard'] font-medium text-[#000]">
          환자분에 대해 더 알고 싶어요.
          <br />
          정확한 정보를 제공해드리기 위해 개인정보를 받고있어요....고민
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        {/* 성함 */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="w-[312px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
            성함이 어떻게 되세요?
          </div>
          <InputField
            type="text"
            value={userData.name}
            onChange={handleNameChange}
            placeholder="성함을 입력해주세요"
          >
            <img
              width="26"
              height="26"
              src={process.env.PUBLIC_URL + '/mic.png'}
              alt="mic"
            />
          </InputField>
        </div>
        {/* 성별 */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="w-[312px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
            성별을 알려주세요!
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[16px]">
            <div
              className={`flex-1 h-[56px] flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid rounded-[10px] text-[#212121] border-[#00acff] hover:cursor-pointer ${
                userData.gender === 'man'
                  ? 'bg-[#00acff] text-[#fff]'
                  : ''
              }`}
              onClick={() => handleGenderChange('man')}
            >
              <div className="text-[16px] leading-[26px] font-['Pretendard'] font-semibold  text-center whitespace-nowrap">
                남자
              </div>
            </div>
            <div
              className={`flex-1 h-[56px] flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid rounded-[10px] text-[#212121] border-[#00acff] hover:cursor-pointer ${
                userData.gender === 'woman'
                  ? 'bg-[#00acff] text-[#fff]'
                  : ''
              }`}
              onClick={() => handleGenderChange('woman')}
            >
              <div className="text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-center whitespace-nowrap">
                여자
              </div>
            </div>
          </div>
        </div>
        {/* 생년월일 */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="w-[312px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
            생년월일을 알려주세요!
          </div>
          <InputField
            inputRef={birthRef}
            type="text"
            value={userData.birth}
            onChange={handleBirthChange}
            placeholder="19000101"
          />
        </div>
      </div>
    </div>
  )
}

export default AltzOneStep
