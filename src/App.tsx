import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import ExistingLogin from './components/login/ExistingLogin'
import AltzJoinPage from './components/altzJoin/AltzJoinPage'
import AMypage from './components/patient/AMypage'

function App() {
  return (
    <div className="App h-screen flex justify-center items-center bg-slate-50">
      <div className='h-screen flex justify-center items-center bg-white'>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/login" element={} /> */}
          <Route path="/existingLogin" element={<ExistingLogin />} />
          <Route path="/altzJoin" element={<AltzJoinPage />} />
          <Route path="/patientPage" element={<AMypage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
