import MicAnimation from './Icon/MicAnimation'

const MicRecognizing = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[180px] h-[180px]">
      <div className="round w-full h-full">
        <MicAnimation />
      </div>
      <div className="mt-3 text-[20px] leading-[30px] font-['Pretendard'] font-bold text-[#a6a6a6] text-center">
        음성을 인식중이에요.
      </div>
    </div>
  )
}

export default MicRecognizing
