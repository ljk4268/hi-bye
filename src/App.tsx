import './App.css'
import { Routes, Route } from 'react-router-dom'
// login
import LoginPage from './components/login/LoginPage'
import ExistingLogin from './components/login/ExistingLogin'
import AlzJoinPage from './components/join/alzJoin/AlzJoinPage'
import ProtectorJoin from './components/join/prortectorJoin/ProtectorJoin'

// patient
import ChattingWithAI from './components/patient/ChattingWithAI'
import AMainPage from './components/patient/AMainPage'
// protector
import PMainPage from './components/protector/PMainPage'
import ViewCollection from './components/protector/ViewCollection'

function App() {
  return (
    <div className="App h-screen flex justify-center items-center bg-slate-50">
      <div className="h-screen flex justify-center items-center bg-white">
        <Routes>
          <Route path="/alz" element={<LoginPage />} />
          <Route path="/alz/existingLogin" element={<ExistingLogin />} />
          <Route path="/alz/alzJoin" element={<AlzJoinPage />} />
          <Route path="/alz/proJoin" element={<ProtectorJoin />} />
          <Route path="/alz/patientPage" element={<AMainPage />} />
          <Route path="/alz/protectorPage" element={<PMainPage />} />
          <Route path="/alz/chatting" element={<ChattingWithAI />} />
          <Route path="/alz/collection" element={<ViewCollection />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
