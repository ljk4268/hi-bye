import { memo, useState } from 'react'
import SelectAction from './SelectAction'
import AlzLogo30 from './Icon/AlzLogo30'

const BottomLogo = () => {
  const [isShow, setIsShow] = useState(false)
  const showModal = () => {
    setIsShow(!isShow)
  }
  return (
    <>
      {isShow && <SelectAction />}
      <div
        className="absolute right-[16px] bottom-[48px] w-[60px] h-[60px] bg-[#faff85] border-[2px] border-solid border-[#ffe15f] rounded-[40px] hover:cursor-pointer"
        onClick={showModal}
      >
        <div className="absolute left-[21.67%] right-[18.33%] top-[15%] bottom-[18.33%]">
          <AlzLogo30 />
        </div>
      </div>
    </>
  )
}
export default memo(BottomLogo)
