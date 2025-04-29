import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import AppRoutes from './routes/AppRoutes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
