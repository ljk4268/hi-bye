import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// components
import Button from '../../Button'
import ProgressBar from '../../ProgressBar'
import Arrow from '../../Icon/Arrow'
import AltOneStep from './AlzOneStep'
import AltTwoStep from './AlzTwoStep'
import AltThreeStep from './AlzThreeStep'
import AltFourStep from './AlzFourStep'
import AltLastStep from './AlzLastStep'

//type
import { IUserInfo } from '../../../interface/commonInterface'

const AlzJoinPage = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(false)
  const [prevPages, setPrevPages] = useState<number[]>([])
  const [progressValue, setProgressValue] = useState(25)
  const [userData, setUserData] = useState<IUserInfo>({
    name: '',
    gender: '',
    birth: '',
    title: '',
    tel: '',
    password: '',
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
    if (userData.birth.length < 8) {
      birthRef.current?.focus()
    }
    setPrevPages((prev) => [...prev, currentPage])
    setCurrentPage((prevPage) => prevPage + 1)
    setProgressValue((prevValue) => prevValue + 25)

    if (lastPage) {
      navigate('/alz/patientPage')
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <AltOneStep
            userData={userData}
            setUserData={setUserData}
            birthRef={birthRef}
          />
        )
      case 2:
        return <AltTwoStep userData={userData} setUserData={setUserData} />
      case 3:
        return <AltThreeStep userData={userData} setUserData={setUserData} />
      case 4:
        return <AltFourStep userData={userData} setUserData={setUserData} />
      case 5:
        return <AltLastStep userData={userData} setUserData={setUserData} />
      default:
        return null
    }
  }

  useEffect(() => {
    switch (currentPage) {
      case 1:
        setIsDone(
          !!(userData.name && userData.birth.length === 8 && userData.gender)
        )
        break
      case 2:
        setIsDone(!!(userData.title !== ''))
        break
      case 3:
        setIsDone(!!(userData.tel !== ''))
        break
      case 4:
        setIsDone(!!(userData.password !== ''))
        break
      case 5:
        setLastPage(true)
        break
      default:
        setIsDone(false)
    }
  }, [userData, currentPage])

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

export default AlzJoinPage
