import './App.css'
import { Routes, Route } from 'react-router-dom'
// login
import LoginPage from './components/login/LoginPage'
import ExistingLogin from './components/login/ExistingLogin'
import AlzJoinPage from './components/alzJoin/AlzJoinPage'
// patient
import AMypage from './components/patient/AMypage'
import ChattingWithAI from './components/patient/ChattingWithAI'

function App() {
  return (
    <div className="App h-screen flex justify-center items-center bg-slate-50">
      <div className="h-screen flex justify-center items-center bg-white">
        <Routes>
          <Route path="/alz" element={<LoginPage />} />
          <Route path="/alz/existingLogin" element={<ExistingLogin />} />
          <Route path="/alz/alzJoin" element={<AlzJoinPage />} />
          <Route path="/alz/patientPage" element={<AMypage />} />
          <Route path="/alz/chatting" element={<ChattingWithAI />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
