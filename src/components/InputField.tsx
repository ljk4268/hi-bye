import React, { ReactNode } from 'react'

interface InputFieldProps {
  type: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  errorMessage?: string
  children?: ReactNode
  inputRef?: React.RefObject<HTMLInputElement> // inputRef 추가
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  value,
  onChange,
  placeholder,
  errorMessage,
  children,
  inputRef,
}) => {
  const hasValue = value.trim() !== ''
  const fieldBorder = 'border-[#841EFF]'

  return (
    <>
      <div
        className={`self-stretch h-[56px] shrink-0 flex flex-row items-center justify-center py-[12px] px-[24px] border-[1px] border-solid rounded-[10px] ${
          hasValue ? 'border-[#0A7FEB]' : fieldBorder
        }`}
      >
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChange}
          className="flex-1 text-[16px] leading-[26px] font-['Pretendard'] text-[#646464] outline-none"
          placeholder={placeholder}
        />
        {children}
      </div>
      {errorMessage && (
        <div className="relative self-stretch h-[20px] shrink-0">
          <div className="absolute left-[10px] right-[10px] top-0 text-[12px] leading-[20px] font-['Pretendard'] font-medium text-[#f53d3d]">
            {errorMessage}
          </div>
        </div>
      )}
    </>
  )
}

export default InputField
