import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// component
import Arrow from "../../Icon/Arrow";
import ProgressBar from "../../ProgressBar";
import Button from "../../Button";
import ProOneStep from "./ProOneStep";
import ProTwoStep from "./ProTwoStep";
import ProThreeStep from "./ProThreeStep";
import ProLastStep from "./ProLastStep";
import AlertModal from "../../modal/AlertModal";

// type
import {
  IProtectorInfo,
  ICheckPatient,
  ISignData,
} from "../../../interface/commonInterface";

//api
import { checkIsPatient, signUp } from "../../../api/hialzAPI";

const ProtectorJoin = () => {
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [lastPage, setLastPage] = useState(false);
  const [prevPages, setPrevPages] = useState<number[]>([]);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [progressValue, setProgressValue] = useState(25);
  const [protectorData, setProtectorData] = useState<IProtectorInfo>({
    protectorName: "",
    patientName: "",
    protectorTel: "",
    patientTel: "",
    patientPassword: "",
    protectorPassword: "",
    relationship: "",
    patientId: 0,
  });

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
  const handleGoNext = async () => {
    if (lastPage) {
      navigate("/alz/protectorPage");
    } else if (currentPage === 1) {
      const params: ICheckPatient = {
        phone: protectorData.patientTel,
        password: protectorData.patientPassword,
      };
      const res = await checkPatient(params);
      if (res === "fail") return;
    } else if (currentPage === 3) {
      const params: ISignData = {
        name: protectorData.protectorName,
        phone: protectorData.protectorTel,
        password: protectorData.protectorPassword,
        birthDate: "",
        titleCode: protectorData.relationship,
        relationCode: "보호자",
        patientId: protectorData.patientId,
      };
      const res = await fn_signUp(params);
      if (res === "fail") return;
    }
    setPrevPages((prev) => [...prev, currentPage]);
    setCurrentPage((prevPage) => prevPage + 1);
    setProgressValue((prevValue) => prevValue + 25);
  };

  const fn_signUp = async (params: ISignData) => {
    try {
      const res = await signUp(params);
      if (res.data === "ok") {
        navigate("/alz/existingLogin");
      } else {
        setIsRegister(true);
        setIsModal(!isModal);
        return "fail";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkPatient = async (params: ICheckPatient) => {
    try {
      const res = await checkIsPatient(params);
      if (res.data === "fail") {
        setIsModal(!isModal);
        return "fail";
      } else {
        setProtectorData((prev) => ({ ...prev, patientId: res.data }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const goPatientJoinPage = (page: string) => {
    setIsModal(!isModal);
    navigate(`/alz/${page}`);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <ProOneStep
            protectorData={protectorData}
            setProtectorData={setProtectorData}
          />
        );
      case 2:
        return (
          <ProTwoStep
            protectorData={protectorData}
            setProtectorData={setProtectorData}
          />
        );
      case 3:
        return (
          <ProThreeStep
            protectorData={protectorData}
            setProtectorData={setProtectorData}
          />
        );
      case 4:
        return (
          <ProLastStep
            protectorData={protectorData}
            setProtectorData={setProtectorData}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    switch (currentPage) {
      case 1:
        setIsDone(
          !!(
            protectorData.patientName &&
            protectorData.patientTel &&
            protectorData.patientPassword
          )
        );
        break;
      case 2:
        setIsDone(
          !!(protectorData.protectorName && protectorData.relationship)
        );
        break;
      case 3:
        setIsDone(
          !!(protectorData.protectorTel && protectorData.protectorPassword)
        );
        break;
      case 4:
        setLastPage(true);
        break;
      default:
        setIsDone(false);
    }
  }, [protectorData, currentPage]);

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
          text1={
            isRegister ? "이미 등록된 계정입니다. " : "등록된 환자가 없습니다."
          }
          text2={
            isRegister ? "로그인하러 가시겠어요?" : "환자를 등록하시겠어요?"
          }
          buttonText={isRegister ? "로그인 하러 가기" : "환자 등록하러가기"}
          onClick={() => {
            isRegister
              ? goPatientJoinPage("existingLogin")
              : goPatientJoinPage("alzJoin");
          }}
        />
      )}
    </div>
  );
};

export default ProtectorJoin;
