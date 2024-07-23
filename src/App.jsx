import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import Product from './pages/Product'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/contact' element={<Contact />} ></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/product/:id' element={<Product />}></Route>
      <Route path='*' element={<NotFound />} ></Route>
    </Routes>
    </>
  )
}

export default App
