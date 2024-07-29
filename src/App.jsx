import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import Product from './pages/Product'
import Counter from './pages/Counter'
import Tasks from './pages/Tasks/Task'
import Quiz from './pages/Quiz/Quiz'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/contact' element={<Contact />} ></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/product/:id' element={<Product />}></Route>
      <Route path='/counter' element={<Counter />}></Route>
      <Route path='/tasks' element={<Tasks />}></Route>
      <Route path='/quiz' element={<Quiz />}></Route>
      <Route path='*' element={<NotFound />} ></Route>
    </Routes>
    </>
  )
}

export default App
