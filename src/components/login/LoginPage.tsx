import { useNavigate } from "react-router-dom";

// components
import Button from "../Button";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleGoPage = (page: string) => {
    navigate(`/${page}`);
  };
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
        className="absolute left-[24px] top-[350px] w-[312px] h-[56px] flex flex-row items-center justify-center py-[12px] px-[24px] border-[2px] border-solid border-[#841EFF] rounded-[20px] hover:cursor-pointer"
        onClick={() => {
          handleGoPage("existingLogin");
        }}
      >
        <div className="text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#841EFF] text-center whitespace-nowrap">
          기존 계정으로 로그인하기
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        className="absolute -translate-x-1/2 left-1/2 bottom-[46px]"
      >
        <rect width="80" height="80" rx="40" fill="#924AF6" />
        <path
          d="M40.0001 20.7273C36.2955 20.7273 33.2924 23.902 33.2924 27.8182V37.2727C33.2924 41.189 36.2955 44.3636 40.0001 44.3636C43.7045 44.3636 46.7077 41.189 46.7077 37.2727V27.8182C46.7077 23.902 43.7045 20.7273 40.0001 20.7273ZM40.0001 16C46.1743 16 51.1795 21.2912 51.1795 27.8182V37.2727C51.1795 43.7997 46.1743 49.0909 40.0001 49.0909C33.8258 49.0909 28.8207 43.7997 28.8207 37.2727V27.8182C28.8207 21.2912 33.8258 16 40.0001 16ZM20 39.6364H24.5074C25.5923 47.6545 32.1153 53.8182 40.0001 53.8182C47.8847 53.8182 54.4076 47.6545 55.4927 39.6364H60C58.969 49.4965 51.5632 57.3256 42.236 58.4157V68H37.7643V58.4157C28.437 57.3256 21.0311 49.4965 20 39.6364Z"
          fill="white"
        />
      </svg>
      <div className="absolute left-[24px] right-[24px] bottom-[206px] flex flex-col items-start justify-start gap-[6px]">
        <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#212121]">
          회원가입하기
        </div>
        <div className="self-stretch h-[130px] shrink-0 flex flex-row items-start justify-start gap-[16px]">
          <div
            className="w-[148px] h-[130px] shrink-0 flex flex-row items-center justify-center py-[12px] px-[24px] border-[2px] border-solid border-[#841EFF] rounded-[20px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#841EFF] text-center whitespace-nowrap hover:text-[18px] cursor-pointer hover:leading-[28px] hover:text-[#fff] hover:bg-[#841EFF]"
            onClick={() => {
              handleGoPage("altzJoin");
            }}
          >
            알츠하이머 환자
          </div>
          <div className="w-[148px] h-[130px] shrink-0 flex flex-row items-center justify-center py-[12px] px-[24px] border-[2px] border-solid border-[#841EFF] rounded-[20px] text-[16px] leading-[26px] font-['Pretendard'] font-semibold text-[#841EFF] text-center whitespace-nowrap hover:text-[18px] cursor-pointer hover:leading-[28px] hover:text-[#fff] hover:bg-[#841EFF]">
            보호자
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
