import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/store";

//components
import InputField from "../InputField";
import Button from "../Button";
import Arrow from "../Icon/Arrow";
import AlertModal from "../modal/AlertModal";

// api
import { signIn } from "../../api/hialzAPI";

const ExistingLogin = () => {
  const [phone, setPhone] = useState<string | "">("");
  const [password, setPassword] = useState<string | "">("");
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const navigate = useNavigate();

  const handlePhoneChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const regex = /^[0-9\b -]{0,12}$/;
      if (regex.test(event.target.value)) {
        setPhone(event.target.value);
      }
    },
    []
  );
  const handlePasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    []
  );

  const resetPassword = () => {
    setIsModal(!isModal);
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleButtonClick = async () => {
    const params = {
      phone,
      password,
    };
    try {
      const res = await signIn(params);
      const user = res.data;
      if (user.name) {
        if (res.data.relationCode === "환자") {
          useStore.getState().setUserData(user);
          navigate("/alz/patientPage");
        } else {
          useStore.getState().setProtectorData(user);
          navigate("/alz/protectorPage");
        }
      } else {
        setErrorMsg("회원가입 혹은 계정을 확인해주세요");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (phone && password) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  }, [phone, password]);
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
              value={phone}
              onChange={handlePhoneChange}
              placeholder="연락처를 입력해주세요"
              errorMessage={errorMsg}
            />
          </div>
          <div className="self-stretch h-[78px] shrink-0 flex flex-col items-center justify-start">
            <InputField
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="비밀번호를 입력해주세요"
              errorMessage={errorMsg}
            />
          </div>
          <div
            className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#212121] text-center whitespace-nowrap hover:cursor-pointer"
            onClick={resetPassword}
          >
            비밀번호가 기억나지 않나요?
          </div>
        </div>
      </div>
      <Button isDone={isDone} onClick={handleButtonClick} />
      <div
        className="absolute left-0 right-0 top-[52px] h-[56px] flex flex-row items-center justify-start py-[14px] px-[24px] bg-[#fff] overflow-hidden hover:cursor-pointer"
        onClick={handleGoBack}
      >
        <Arrow />
      </div>
      {isModal && (
        <AlertModal
          text1="아직 준비중인 기능이에요!"
          text2="빨리 만나보실 수 있게 노력할게요."
          onClick={() => {
            setIsModal(!isModal);
          }}
        />
      )}
    </div>
  );
};

export default ExistingLogin;
