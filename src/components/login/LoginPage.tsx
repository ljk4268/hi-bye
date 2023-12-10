import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const handleGoPage = (page: string) => {
    navigate(`/${page}`)
  }
  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-[24px] right-[24px] top-[150px] flex flex-col items-start justify-start gap-[28px]">
        <div className="self-stretch text-[24px] leading-[36px] font-['Pretendard'] font-bold text-[#000]">
          안녕, 알츠
        </div>
        <div className="self-stretch text-[18px] leading-[28px] font-['Pretendard'] font-semibold text-[#000]">
          시작하실 준비가 되셨나요?
          <br />
          당신이 누구인지 알려주세요.
        </div>
      </div>
      <div
        className="absolute left-[24px] top-[350px] w-[312px] h-[56px] flex flex-row items-center justify-center py-[12px] px-[24px] border-[2px] border-solid border-[#00acff] rounded-[20px] hover:cursor-pointer"
        onClick={() => {
          handleGoPage('existingLogin')
        }}
      >
        <div className="text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121] text-center whitespace-nowrap">
          기존 계정으로 로그인하기
        </div>
      </div>
      <img
        className="absolute -translate-x-1/2 left-1/2 bottom-[46px]"
        width="80"
        height="80"
        src={process.env.PUBLIC_URL + '/assets/mic-line84_1235.png'}
        alt="mic"
      />
      <div className="absolute left-[24px] right-[24px] bottom-[206px] flex flex-col items-start justify-start gap-[6px]">
        <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
          회원가입하기
        </div>
        <div className="self-stretch h-[130px] shrink-0 flex flex-row items-start justify-start gap-[16px]">
          <div
            className="w-[148px] h-[130px] shrink-0 flex flex-row items-center justify-center py-[12px] px-[24px] border-[2px] border-solid border-[#00acff] rounded-[20px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#00acff] text-center whitespace-nowrap hover:text-[18px] cursor-pointer hover:leading-[28px] hover:text-[#fff] hover:bg-[#00acff]"
            onClick={() => {
              handleGoPage('altzJoin')
            }}
          >
            알츠하이머 환자
          </div>
          <div className="w-[148px] h-[130px] shrink-0 flex flex-row items-center justify-center py-[12px] px-[24px] border-[2px] border-solid border-[#00acff] rounded-[20px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#00acff] text-center whitespace-nowrap hover:text-[18px] cursor-pointer hover:leading-[28px] hover:text-[#fff] hover:bg-[#00acff]">
            보호자
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginPage
