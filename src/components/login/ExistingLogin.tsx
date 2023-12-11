import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../InputField'
import Button from '../Button'

const ExistingLogin = () => {
  const [contact, setContact] = useState<string | ''>('')
  const [password, setPassword] = useState<string | ''>('')
  const [isDone, setIsDone] = useState<boolean>(false)
  const navigate = useNavigate()
  const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b -]{0,13}$/
    if (regex.test(event.target.value)) {
      setContact(event.target.value)
    }
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  const handleGoBack = () => {
    navigate(-1)
  }

  const handleButtonClick = () => {
    console.log('구현중')
  }

  useEffect(() => {
    if (contact && password) {
      setIsDone(true)
    } else {
      setIsDone(false)
    }
  }, [contact, password])
  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-[24px] right-[24px] top-[150px] flex flex-col items-start justify-start gap-[42px]">
        <div className="text-[24px] leading-[36px] font-['Pretendard'] font-bold text-[#000] whitespace-nowrap">
          로그인하기
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
          <div className="self-stretch h-[78px] shrink-0 flex flex-col items-center justify-start">
            <InputField
              type="text"
              value={contact}
              onChange={handleContactChange}
              placeholder="연락처를 입력해주세요"
              errorMessage="전화번호 형식을 확인해주세요.(확인하기)"
            />
          </div>
          <div className="self-stretch h-[78px] shrink-0 flex flex-col items-center justify-start">
            <InputField
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="비밀번호를 입력해주세요"
              errorMessage="비밀번호 형식을 확인해주세요.(확인하기)"
            />
          </div>
          <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#212121] text-center whitespace-nowrap">
            비밀번호가 기억나지 않나요?
          </div>
        </div>
      </div>
      <Button isDone={isDone} onClick={handleButtonClick} />
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
          src={process.env.PUBLIC_URL+'/assets/Arrow_Left.png'}
          alt="arrow-left"
        />
      </div>
    </div>
  )
}

export default ExistingLogin
