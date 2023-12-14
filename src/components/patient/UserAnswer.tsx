import AlzLogo from '../Icon/AlzLogo'
import Reply from '../Icon/Reply'

const UserAnswer = () => {
  const handleReply = () => {
    console.log('기능개발중')
  }
  return (
    <div className="self-stretch flex flex-row items-start justify-end gap-[9px]">
      <div className="flex flex-col items-end justify-start py-[14px] px-[24px] bg-[#FFE15F] bg-opacity-20 border-[1px] border-solid border-[#924af6] rounded-[12px] overflow-hidden">
        <div className="self-stretch text-[16px] leading-[26px] font-['Pretendard'] text-[#631db1]">
          오늘 우리 애들이 놀러왔는데 손주 둘 다 데리고 와서 너무 좋앗지. 오전
          에는 아파트 노인정가서 다른 할망구들이랑 화투치고 놀았지! 내가 젊을
          때는 화투로 생활비 벌었어 아주
        </div>
        <div className="flex flex-row items-center justify-center gap-[10px] py-[8px] px-[16px] bg-[#ffe15f] rounded-[20px] hover:cursor-pointer" onClick={handleReply}>
          <Reply />
          <div className="text-[14px] leading-[20px] font-['Pretendard'] font-medium text-[#212121] text-center whitespace-nowrap">
            다시 대답하기
          </div>
        </div>
      </div>
      <div className="relative w-[32px] h-[32px] shrink-0 bg-[#faff85] border-[1px] border-solid border-[#924af6] rounded-[8px]">
        <div className="absolute left-[18.75%] right-[18.75%] top-[15.62%] bottom-[15.62%]">
          <AlzLogo />
        </div>
      </div>
    </div>
  )
}

export default UserAnswer
