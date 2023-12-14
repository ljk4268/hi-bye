import { useState, useEffect } from 'react'

function useFormattedDate(): string {
  const [formattedDate, setFormattedDate] = useState<string>('')

  useEffect(() => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.toLocaleString('default', { month: 'long' })
    const day = today.getDate()

    const formattedDate = `${year}년 ${month} ${day}일`
    setFormattedDate(formattedDate)
  }, [])

  return formattedDate
}

export default useFormattedDate
