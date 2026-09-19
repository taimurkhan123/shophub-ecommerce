import React  from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductsDetail from './pages/ProductsDetail'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/about" element = {<About/>} />
      <Route path = "/products" element = {<Products/>} />
      <Route path = "/products/:id" element = {<ProductsDetail/>} />
      <Route path = "/cart" element = {<Cart/>}/>
      <Route path = "*" element = {<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
