import { useState } from 'react'
import FetchProducts from './components/FetchProducts'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
const [ token, setToken ] = useState('')

const handleSetState=(newToken)=>{
    setToken(newToken)
}
  return (
    <>
    <FetchProducts />
    </>
  )
}

export default App
