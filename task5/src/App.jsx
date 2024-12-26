import { useState } from 'react'

import './App.css'
import ResponsivePage from './components/ResponsivePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResponsivePage/>
    </>
  )
}

export default App
