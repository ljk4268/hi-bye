interface ButtonProps {
  isDone?: boolean
  onClick?: () => void
  text?: string
}

const Button: React.FC<ButtonProps> = ({ isDone, onClick, text="다음" }) => {
  return (
    <button
      className={`absolute left-[24px] right-[24px] bottom-[72px] h-[56px] flex flex-row items-center justify-center py-[12px] px-[24px] rounded-[20px] ${
        isDone ? 'bg-blue-500' : 'bg-[#d3d3d3]'
      }`}
      disabled={!isDone}
      onClick={onClick}
    >
      <div className="flex-1 text-[18px] leading-[28px] font-['Pretendard'] font-semibold text-[#fff] text-center">
        {text}
      </div>
    </button>
  )
}

export default Button
