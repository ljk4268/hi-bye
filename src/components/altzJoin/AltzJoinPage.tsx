import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// components
import Button from '../Button'
import ProgressBar from '../ProgressBar'
import Arrow from '../Arrow'
import AltzOneStep from './AltzOneStep'
import AltzTwoStep from './AltzTwoStep'
import AltzThreeStep from './AltzThreeStep'


//type
import { IUserInfo } from '../../interface/commonInterface'

const AltzJoinPage = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
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
      navigate('/')
    }
  }

  const handleGoNext = () => {
    if (userData.birth.length < 8) {
      birthRef.current?.focus()
    }
    setPrevPages((prev) => [...prev, currentPage])
    setCurrentPage((prevPage) => prevPage + 1)
    setProgressValue((prevValue) => prevValue + 25)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <AltzOneStep
            userData={userData}
            setUserData={setUserData}
            birthRef={birthRef}
          />
        )
      case 2:
        return <AltzTwoStep userData={userData} setUserData={setUserData} />
      case 3:
        return <AltzThreeStep userData={userData} setUserData={setUserData} />
      case 4:
        return <div>4</div>
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
      <div className="absolute -translate-x-1/2 left-1/2 top-[114px] w-[216px] h-[24px]">
        <ProgressBar value={progressValue} />
      </div>
      <Button isDone={isDone} onClick={handleGoNext} />
    </div>
  )
}

export default AltzJoinPage
