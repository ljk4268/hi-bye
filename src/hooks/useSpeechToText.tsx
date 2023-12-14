import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const useSpeechToText = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      resetTranscript()
    } else {
      SpeechRecognition.startListening({ language: 'ko-KR', continuous: true });
    }
  }
  

  return { transcript, listening, toggleListening };
};

export default useSpeechToText;