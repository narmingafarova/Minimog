import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { ProductProvider } from './context/ProductContext'
import Products from './pages/Products'
import ProductDetails from './components/ProductDetails'
import Cart from './pages/Cart'
import { CartProvider } from 'react-use-cart'


const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ProductProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/:url' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </ProductProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App