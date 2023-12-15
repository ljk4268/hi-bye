import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// component
import Arrow from '../../Icon/Arrow'
import ProgressBar from '../../ProgressBar'
import Button from '../../Button'
import ProOneStep from './ProOneStep'
import ProTwoStep from './ProTwoStep'
import ProThreeStep from './ProThreeStep'
import ProLastStep from './ProLastStep'

// type
import { IProtectorInfo } from '../../../interface/commonInterface'

const ProtectorJoin = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(false)
  const [prevPages, setPrevPages] = useState<number[]>([])
  const [progressValue, setProgressValue] = useState(25)
  const [protectorData, setProtectorData] = useState<IProtectorInfo>({
    protectorName: '',
    patientName: '',
    protectorTel: '',
    patientTel: '',
    patientPassword: '',
    protectorPassword: '',
    relationship: '',
  })
  const [isDone, setIsDone] = useState<boolean>(false)
  const birthRef = useRef<HTMLInputElement>(null)

  const handleGoBack = () => {
    if (prevPages.length > 0) {
      const prevPage = prevPages.pop()
      if (prevPage !== undefined) {
        setCurrentPage(prevPage)
        setProgressValue((prevValue) => prevValue - 25)
      }
    } else {
      navigate('/alz')
    }
    if (lastPage) {
      setLastPage(false)
    }
  }

  const handleGoNext = () => {
    setPrevPages((prev) => [...prev, currentPage])
    setCurrentPage((prevPage) => prevPage + 1)
    setProgressValue((prevValue) => prevValue + 25)
    if (lastPage) {
      navigate('/alz/protectorPage')
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <ProOneStep
            protectorData={protectorData}
            setProtectorData={setProtectorData}
          />
        )
      case 2:
        return (
          <ProTwoStep
            protectorData={protectorData}
            setProtectorData={setProtectorData}
          />
        )
      case 3:
        return (
          <ProThreeStep
            protectorData={protectorData}
            setProtectorData={setProtectorData}
          />
        )
      case 4:
        return (
          <ProLastStep
            protectorData={protectorData}
            setProtectorData={setProtectorData}
          />
        )
      default:
        return null
    }
  }

  useEffect(() => {
    switch (currentPage) {
      case 1:
        setIsDone(
          !!(
            protectorData.patientName &&
            protectorData.patientTel &&
            protectorData.patientPassword
          )
        )
        break
      case 2:
        setIsDone(!!(protectorData.protectorName && protectorData.relationship))
        break
      case 3:
        setIsDone(
          !!(protectorData.protectorTel && protectorData.protectorPassword)
        )
        break
      case 4:
        setLastPage(true)
        break
      default:
        setIsDone(false)
    }
  }, [protectorData, currentPage])

  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      {renderPage()}
      {/* 버튼 및 프로그래스바 */}
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

      <Button
        isDone={isDone}
        onClick={handleGoNext}
        text={lastPage ? '시작하기' : '다음'}
      />
    </div>
  )
}

export default ProtectorJoin
