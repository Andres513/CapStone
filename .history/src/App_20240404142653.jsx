import { useState } from 'react'
import FetchProducts from './components/FetchProducts'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SingleProduct from './components/SingleProduct'
import ProductsByCategories from './components/ProductsByCategory'

function App() {
const [ token, setToken ] = useState(null)
const [ products, setProducts ] = useState([])
const [ price, setPrice ] = useState('')
const [ email, setEmail ] = useState('')
const [ password, setPassword ] = useState('')


const handleSetToken=(newToken)=>{
  setToken(newToken)
}
const handleSetProducts=(newProducts)=>{
  setProducts(newProducts)
}

const handleSetPrice=(newPrice)=>{
  setPrice(newPrice)
}
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login token={token} setToken={handleSetToken} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>}/>
      <Route path="/" element={<FetchProducts token={token} products={products} setProducts={handleSetProducts} price={price} setPrice={handleSetPrice}/>}/>
      <Route path="/products/:id" element={<SingleProduct token={token}/>}/>
      <Route path="/category/:category" element={<ProductsByCategories products={products} setProduct={handleSetProducts}/>}/>
      <Route path="/"/>
    </Routes>
    </>
  )
}

export default App
