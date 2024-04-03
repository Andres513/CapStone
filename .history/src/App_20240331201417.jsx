import { useState } from 'react'
import FetchProducts from './components/FetchProducts'
import './App.css'

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
