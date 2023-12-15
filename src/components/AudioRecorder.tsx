import { useRef, useState } from 'react'
import axios from 'axios'

const AudioRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorderRef.current = new MediaRecorder(stream)

        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data)
          }
        }

        mediaRecorderRef.current.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, {
            type: 'audio/wav',
          })
          setAudioBlob(audioBlob)
          handleUploadRecording(audioBlob)
        }

        mediaRecorderRef.current.start()
        setIsRecording(true)
      })
      .catch((error) => {
        console.error('마이크에 접근 중 오류 발생:', error)
      })
  }
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const handleUploadRecording = async (audioBlob: Blob) => {
    if (!audioBlob) {
      console.error('No file selected')
      return
    }

    const apiUrl = '/recog/v1/stt?lang=Kor'
    const clientId = 'qp0jaf6s6y' // Replace with your actual Client ID
    const clientSecret = 'GMy0cLGKtCD4bBWMjB3tCopIOMKHQerto0EWrovh' // Replace with your actual Client Secret
    const headers = {
      'X-NCP-APIGW-API-KEY-ID': clientId,
      'X-NCP-APIGW-API-KEY': clientSecret,
      'Content-Type': 'application/octet-stream',
    }
    try {
      const response = await axios.post(apiUrl, audioBlob, { headers })
    } catch (error) {
      console.error('파일 업로드 중 오류 발생:', error)
      // 오류를 처리합니다.
    }
  }

  return (
    <div>
      <button onClick={startRecording} disabled={isRecording}>
        대답 시작
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        대답 중지
      </button>

      {audioBlob && (
        <div>
          <audio controls>
            <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
          </audio>
        </div>
      )}
    </div>
  )
}

export default AudioRecorder
