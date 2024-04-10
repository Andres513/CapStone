import { useState } from 'react'
import FetchProducts from './components/FetchProducts'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SingleProduct from './components/SingleProduct'
import ProductsByCategories from './components/ProductsByCategory'
import Cart from './components/Cart'
import { CartProvider } from './components/CartContext'

function App() {
const [ token, setToken ] = useState(null)
const [ products, setProducts ] = useState([])
const [ price, setPrice ] = useState('')
const [ email, setEmail ] = useState('')
const [ password, setPassword ] = useState('')
const [ isLoggedIn, setIsLoggedIn ] = useState(false)
const [ loggedOut, setLoggedOut ] = useState(false)

const handleSetToken=(newToken)=>{
  setToken(newToken)
  setIsLoggedIn(true)
}
const handleSetProducts=(newProducts)=>{
  setProducts(newProducts)
}
const handleSetPrice=(newPrice)=>{
  setPrice(newPrice)
}
 const handleLogout = () =>{
  setToken(null)
  setIsLoggedIn(false)
  setLoggedOut(true)
 }
  return (
    
    <CartProvider isLoggedIn={isLoggedIn}>
      <>
    <Routes>
      <Route path="/login" element={<Login token={token} setToken={handleSetToken} email={email} setEmail={setEmail} password={password} setPassword={setPassword} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} handleLogout={handleLogout}/>}/>
      <Route path="/" element={<FetchProducts token={token} setToken={handleSetToken} products={products} setProducts={handleSetProducts} price={price} setPrice={handleSetPrice} isLoggedIn={isLoggedIn} handleLogout={handleLogout} loggedOut={loggedOut} setLoggedOut={setLoggedOut}/>}/>
      <Route path="/products/:id" element={<SingleProduct token={token} isLoggedIn={isLoggedIn}/>}/>
      <Route path="/category/:category" element={<ProductsByCategories products={products} setProduct={handleSetProducts}/>}/>
      <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn}/>}/>
    </Routes>
    </>
    </CartProvider>
  )
}

export default App
