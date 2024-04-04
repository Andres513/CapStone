import { useState } from 'react'
import FetchProducts from './components/FetchProducts'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SingleProduct from './components/SingleProduct'
import Categories from './components/Categories'
import ProductsByCategories from './components/ProductsByCategory'

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
      <Route path="/products/:id" element={<SingleProduct token={token}/>}/>
      <Route path="/categories" element={<Categories />}/>
      <Route path="/category/:category" element={<ProductsByCategories/>}/>
    </Routes>
    </>
  )
}

export default App
