import { useState } from 'react'
import TouchSpin from '@touchspin/react/vanilla'
import '@touchspin/renderer-vanilla/css'
import './App.css'

function App() {
  const [value1, setValue1] = useState(10)
  const [value2, setValue2] = useState(25.5)

  return (
    <div className="App">
      <h1>TouchSpin React Test</h1>

      <div className="demo-section">
        <h2>Basic Integer Spinner</h2>
        <TouchSpin
          value={value1}
          onChange={setValue1}
          min={0}
          max={100}
          step={1}
        />
        <p>Current value: {value1}</p>
      </div>

      <div className="demo-section">
        <h2>Decimal Spinner with Prefix/Suffix</h2>
        <TouchSpin
          value={value2}
          onChange={setValue2}
          min={0}
          max={100}
          step={0.5}
          decimals={2}
          prefix="$"
          suffix=" USD"
        />
        <p>Current value: ${value2.toFixed(2)} USD</p>
      </div>

      <div className="demo-section">
        <h2>Uncontrolled Spinner</h2>
        <TouchSpin defaultValue={50} min={0} max={200} step={10} />
        <p>This spinner manages its own state</p>
      </div>
    </div>
  )
}

export default App
