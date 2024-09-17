import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="gamepad">
        <span id="up">⬆️</span>
        <span id="left">⬅️</span>
        <span id="down">⬇️</span>
        <span id="right">➡️</span>
      </div>
      <div id="board">
        <span id="player">🐞</span>
      </div>
      <script type="module" src="/main.js"></script>
    </>
  )
}

export default App
