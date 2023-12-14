import { memo, useState } from 'react'
import CheckIcon from '../Icon/CheckIcon'

const TodoList = memo(() => {
  const [check, setCheck] = useState(false)
  const test = () => {
    setCheck(!check)
  }
  return (
    <div className="self-stretch h-[56px] shrink-0 flex flex-row items-center justify-start gap-[10px] py-[12px] px-[24px] bg-[#f1f2f8] rounded-[10px]">
      <div className="hover:cursor-pointer" onClick={test}>
        <CheckIcon check={check} />
      </div>
      <div
        className={`text-[16px] leading-[26px] font-['Pretendard'] text-[#909090] whitespace-nowrap ${
          check ? 'line-through' : ''
        }`}
      >
        기능 추가 될 예정입니다.
      </div>
    </div>
  )
})

export default TodoList
