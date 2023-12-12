import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import LoginPage from './components/login/LoginPage'
import ExistingLogin from './components/login/ExistingLogin'
import AltzJoinPage from './components/altzJoin/AltzJoinPage'

function App() {
  return (
    <div className="App bg-slate-50 h-screen flex justify-center items-center">
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/login" element={} /> */}
          <Route path="/existingLogin" element={<ExistingLogin />} />
          <Route path="/altzJoin" element={<AltzJoinPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
