import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// components
import Button from '../Button'
import InputField from '../InputField'
import ProgressBar from '../ProgressBar'

const AltzJoinPage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState<string>('')
  const [birth, setBirth] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [isDone, setIsDone] = useState<boolean>(false)
  const birthRef = useRef<HTMLInputElement>(null)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b -]{0,8}$/
    if (regex.test(e.target.value)) {
      setBirth(e.target.value)
    }
  }
  const handleGenderChange = (selectedGender: string) => {
    setGender(selectedGender)
  }
  const handleGoBack = () => {
    navigate(-1)
  }

  const handleGoNext = () => {
    if (birth.length < 8) {
      birthRef.current?.focus()
    }
  }

  useEffect(() => {
    if (name && birth && gender) {
      setIsDone(true)
    } else {
      setIsDone(false)
    }
  }, [name, birth, gender])

  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
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
              value={name}
              onChange={handleNameChange}
              placeholder="성함을 입력해주세요"
            >
              <img
                width="26"
                height="26"
                src={process.env.PUBLIC_URL + '/assets/mic.png'}
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
                className={`flex-1 h-[56px] flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid rounded-[10px] text-[#212121] hover:cursor-pointer ${
                  gender === 'man'
                    ? 'border-[#3B82F6] bg-blue-500 text-[#fff]'
                    : 'border-[#00acff]'
                }`}
                onClick={() => handleGenderChange('man')}
              >
                <div className="text-[16px] leading-[26px] font-['Pretendard'] font-semibold  text-center whitespace-nowrap">
                  남자
                </div>
              </div>
              <div
                className={`flex-1 h-[56px] flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid rounded-[10px] text-[#212121] hover:cursor-pointer ${
                  gender === 'woman'
                    ? 'border-[#3B82F6] bg-blue-500 text-[#fff]'
                    : 'border-[#00acff]'
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
              value={birth}
              onChange={handleBirthChange}
              placeholder="19000101"
            />
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-[24px]">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[108px] h-[4px] bg-[#202124] rounded-[12px]"></div>
      </div>
      <div
        className="absolute left-0 right-0 top-[52px] h-[56px] flex flex-row items-center justify-start py-[14px] px-[24px] bg-[#fff] overflow-hidden hover:cursor-pointer"
        onClick={handleGoBack}
      >
        <img
          width="24"
          height="24"
          src={process.env.PUBLIC_URL + '/assets/Arrow_Left.png'}
          alt="arrow-left"
        />
      </div>
      <div className="absolute -translate-x-1/2 left-1/2 top-[114px] w-[216px] h-[24px]">
        <ProgressBar value={25} />
      </div>
      <Button isDone={isDone} onClick={handleGoNext} />
    </div>
  )
}

export default AltzJoinPage
