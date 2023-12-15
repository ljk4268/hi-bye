import { useEffect, useState, memo } from 'react'
import CardItem from './CardItem'

const CardContent = () => {
  const [contentWidth, setContentWidth] = useState<number>(700)
  const [count, setCount] = useState(3)
  useEffect(() => {
    const width = 216 * count
    
    setContentWidth(width)
  }, [count])
  return (
    <div
      style={{ width: `${contentWidth}px` }}
      className={`flex items-start gap-[16px] mt-[12px] mb-[12px]`}
    >
      <CardItem />
      <CardItem />
    </div>
  )
}
export default memo(CardContent)
