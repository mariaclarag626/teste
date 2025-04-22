import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main/>
    </>
  )
}

export default App
