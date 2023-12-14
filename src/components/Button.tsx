import { memo } from 'react'
import { IButtonProps } from '../interface/commonInterface'

const Button: React.FC<IButtonProps> = ({ isDone, onClick, text = '다음' }) => {
  const backgroundColor = isDone ? 'bg-[#841EFF]' : 'bg-[#d3d3d3]'
  return (
    <button
      className={`absolute left-[24px] right-[24px] bottom-[72px] h-[56px] flex flex-row items-center justify-center py-[12px] px-[24px] rounded-[20px] ${backgroundColor}`}
      disabled={!isDone}
      onClick={onClick}
    >
      <div className="flex-1 text-[18px] leading-[28px] font-['Pretendard'] font-semibold text-[#fff] text-center">
        {text}
      </div>
    </button>
  )
}

export default memo(Button)
