import { memo } from 'react'

interface ITitleButtonProps {
  text: string
  onClick: (text?: string) => void
  isActive?: boolean
}

const SelectionButton: React.FC<ITitleButtonProps> = ({
  text,
  onClick,
  isActive,
}) => {
  return (
    <div
      className={`self-stretch h-[56px] shrink-0 flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid border-[#841EFF] rounded-[10px] text-[#631DB1] hover:cursor-pointer ${
        isActive ? 'bg-[#841EFF] text-[#fff]' : ''
      }`}
      onClick={() => onClick(text)}
    >
      <div
        className={`text-[16px] leading-[26px] font-['Pretendard'] font-semibold  text-center whitespace-nowrap ${
          isActive ? 'text-[#fff]' : ''
        }`}
      >
        {text}
      </div>
    </div>
  )
}

export default memo(SelectionButton)
