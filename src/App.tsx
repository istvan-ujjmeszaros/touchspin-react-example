import { useState, useCallback, useRef } from 'react'
import TouchSpin, { type TouchSpinHandle } from '@touchspin/react/vanilla'
import '@touchspin/renderer-vanilla/css'
import './App.css'

function App() {
  const [value, setValue] = useState(25.5)
  const [firedEvents, setFiredEvents] = useState<Set<string>>(new Set())
  const touchSpinRef = useRef<TouchSpinHandle>(null)

  const handleEvent = useCallback((eventName: string) => {
    setFiredEvents(prev => new Set(prev).add(eventName))
  }, [])

  const handleMin = useCallback(() => handleEvent('onMin'), [handleEvent])
  const handleMax = useCallback(() => handleEvent('onMax'), [handleEvent])
  const handleStartSpin = useCallback(() => handleEvent('onStartSpin'), [handleEvent])
  const handleStopSpin = useCallback(() => handleEvent('onStopSpin'), [handleEvent])
  const handleStartUpSpin = useCallback(() => handleEvent('onStartUpSpin'), [handleEvent])
  const handleStartDownSpin = useCallback(() => handleEvent('onStartDownSpin'), [handleEvent])
  const handleStopUpSpin = useCallback(() => handleEvent('onStopUpSpin'), [handleEvent])
  const handleStopDownSpin = useCallback(() => handleEvent('onStopDownSpin'), [handleEvent])
  const handleSpeedChange = useCallback(() => handleEvent('onSpeedChange'), [handleEvent])

  const handleGetValue = () => {
    const currentValue = touchSpinRef.current?.getValue()
    alert(`Current value: ${currentValue}`)
  }

  const handleSetValue = () => {
    const newValue = prompt('Enter new value:', '42')
    if (newValue !== null) {
      const numValue = parseFloat(newValue)
      if (!isNaN(numValue)) {
        touchSpinRef.current?.setValue(numValue)
      }
    }
  }

  const handleUpdateSettings = () => {
    const newStep = prompt('Enter new step size:', '1')
    if (newStep !== null) {
      const numStep = parseFloat(newStep)
      if (!isNaN(numStep)) {
        touchSpinRef.current?.updateSettings({ step: numStep })
        alert(`Step size updated to ${numStep}`)
      }
    }
  }

  const allEvents = [
    'onMin',
    'onMax',
    'onStartSpin',
    'onStopSpin',
    'onStartUpSpin',
    'onStartDownSpin',
    'onStopUpSpin',
    'onStopDownSpin',
    'onSpeedChange',
  ]

  return (
    <div className="App">
      <h1>TouchSpin React Event Demo</h1>

      <div className="demo-section">
        <h2>USD Spinner with Event Tracking</h2>
        <TouchSpin
          ref={touchSpinRef}
          value={value}
          onChange={setValue}
          min={0}
          max={100}
          step={0.5}
          decimals={2}
          prefix="$"
          suffix=" USD"
          onMin={handleMin}
          onMax={handleMax}
          onStartSpin={handleStartSpin}
          onStopSpin={handleStopSpin}
          onStartUpSpin={handleStartUpSpin}
          onStartDownSpin={handleStartDownSpin}
          onStopUpSpin={handleStopUpSpin}
          onStopDownSpin={handleStopDownSpin}
          onSpeedChange={handleSpeedChange}
        />
        <p>Current value: ${value.toFixed(2)} USD</p>
      </div>

      <div className="demo-section">
        <h2>TouchSpin Events</h2>
        <p>Events that have been fired:</p>
        <ul className="event-list">
          {allEvents.map(event => (
            <li key={event} className={firedEvents.has(event) ? 'fired' : 'not-fired'}>
              {event}: {firedEvents.has(event) ? '✅ Fired' : '❌ Not fired'}
            </li>
          ))}
        </ul>
        <button className="reset-events-btn" onClick={() => setFiredEvents(new Set())}>Reset Events</button>
      </div>

      <div className="demo-section">
        <h2>Imperative API Methods</h2>
        <p>Test all TouchSpin methods via the ref API:</p>
        <div className="method-buttons">
          <button onClick={() => touchSpinRef.current?.focus()}>Focus</button>
          <button onClick={() => touchSpinRef.current?.blur()}>Blur</button>
          <button onClick={() => touchSpinRef.current?.increment()}>Increment</button>
          <button onClick={() => touchSpinRef.current?.decrement()}>Decrement</button>
          <button onClick={handleGetValue}>Get Value</button>
          <button onClick={handleSetValue}>Set Value</button>
          <button onClick={() => touchSpinRef.current?.startUpSpin()}>Start Up Spin</button>
          <button onClick={() => touchSpinRef.current?.startDownSpin()}>Start Down Spin</button>
          <button onClick={() => touchSpinRef.current?.stopSpin()}>Stop Spin</button>
          <button onClick={handleUpdateSettings}>Update Settings</button>
        </div>
      </div>
    </div>
  )
}

export default App
