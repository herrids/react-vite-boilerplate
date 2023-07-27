import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("World")

  return (
    <>
      <div>
        <p>Hello {name}</p>
      </div>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
