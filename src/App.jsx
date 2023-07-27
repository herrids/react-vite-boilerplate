import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("World")

  return (
    <>
      <div>
        <p>Hello {name}</p>
      </div>
    </>
  )
}

export default App
