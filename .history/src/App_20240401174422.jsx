import { useState } from 'react'
import FetchProducts from './components/FetchProducts'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'

function App() {
const [ token, setToken ] = useState(null)
const [ email, setEmail ] = useState('')
const [ password, setPassword ] = useState('')


const handleSetState=(newToken)=>{
    setToken(newToken)
}
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login token={token} setToken={handleSetState} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>}/>
      <Route path="/" element={<FetchProducts token={token}/>}/>
    </Routes>
    </>
  )
}

export default App
