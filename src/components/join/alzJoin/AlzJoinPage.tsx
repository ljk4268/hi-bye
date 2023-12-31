import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../../store/store";
import useAlertModal from "../../../hooks/useAlertModal";

// components
import Button from "../../Button";
import ProgressBar from "../../ProgressBar";
import Arrow from "../../Icon/Arrow";
import AltOneStep from "./AlzOneStep";
import AltTwoStep from "./AlzTwoStep";
import AltThreeStep from "./AlzThreeStep";
import AltFourStep from "./AlzFourStep";
import AltLastStep from "./AlzLastStep";
import AlertModal from "../../modal/AlertModal";

//type
import { IUserInfo, ISignData } from "../../../interface/commonInterface";

//api
import { signUp } from "../../../api/hialzAPI";

const AlzJoinPage = () => {
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [lastPage, setLastPage] = useState(false);
  const [userData, setUserData] = useState<IUserInfo>({
    name: "",
    gender: "",
    birth: "",
    title: "",
    tel: "",
    password: "",
  });
  const [prevPages, setPrevPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [progressValue, setProgressValue] = useState(25);

  const navigate = useNavigate();

  const handleGoBack = () => {
    if (prevPages.length > 0) {
      const prevPage = prevPages.pop();
      if (prevPage !== undefined) {
        setCurrentPage(prevPage);
        setProgressValue((prevValue) => prevValue - 25);
      }
    } else {
      navigate("/alz");
    }
    if (lastPage) {
      setLastPage(false);
    }
  };

  const handleGoNext = () => {
    if (lastPage) {
      navigate("/alz/patientPage");
    } else if (currentPage === 4) {
      const data: ISignData = {
        name: userData.name,
        phone: userData.tel,
        password: userData.password,
        birthDate: userData.birth,
        titleCode: userData.title,
        relationCode: "환자",
      };
      fn_signUp(data);
    } else {
      setPrevPages((prev) => [...prev, currentPage]);
      setCurrentPage((prevPage) => prevPage + 1);
      setProgressValue((prevValue) => prevValue + 25);
    }
  };

  const handleGoPage = () => {
    navigate("/alz/existingLogin")
  }

  const fn_signUp = async (data: ISignData) => {
    try {
      const res = await signUp(data);
      if (res.data === "ok") {
        useStore.getState().setUserData(data);
        setPrevPages((prev) => [...prev, currentPage]);
        setCurrentPage((prevPage) => prevPage + 1);
        setProgressValue((prevValue) => prevValue + 25);
      } else {
        setIsModal(!isModal)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <AltOneStep userData={userData} setUserData={setUserData} />;
      case 2:
        return <AltTwoStep userData={userData} setUserData={setUserData} />;
      case 3:
        return <AltThreeStep userData={userData} setUserData={setUserData} />;
      case 4:
        return (
          <AltFourStep
            userData={userData}
            setUserData={setUserData}
          />
        );
      case 5:
        return <AltLastStep userData={userData} setUserData={setUserData} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    switch (currentPage) {
      case 1:
        setIsDone(
          !!(userData.name && userData.birth.length === 8 && userData.gender)
        );
        break;
      case 2:
        setIsDone(!!(userData.title !== ""));
        break;
      case 3:
        setIsDone(!!(userData.tel !== ""));
        break;
      case 4:
        setIsDone(!!(userData.password !== ""));
        break;
      case 5:
        setLastPage(true);
        break;
      default:
        setIsDone(false);
    }
  }, [userData, currentPage]);

  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      {renderPage()}

      {/* header - arrow & progressBar */}
      <div
        className="absolute left-0 right-0 top-[52px] h-[56px] flex flex-row items-center justify-start py-[14px] px-[24px] bg-[#fff] overflow-hidden hover:cursor-pointer"
        onClick={handleGoBack}
      >
        <Arrow />
      </div>

      {!lastPage && (
        <div className="absolute -translate-x-1/2 left-1/2 top-[114px] w-[216px] h-[24px]">
          <ProgressBar value={progressValue} />
        </div>
      )}

      {/* button */}
      <Button
        isDone={isDone}
        onClick={handleGoNext}
        text={lastPage ? "시작하기" : "다음"}
      />
      {/* alertModal */}
      {isModal && (
        <AlertModal
          text1="이미 등록된 계정입니다."
          text2="로그인하러 가시겠어요?"
          buttonText="로그인하러 가기"
          onClick={handleGoPage}
        />
      )}
    </div>
  );
};

export default AlzJoinPage;
