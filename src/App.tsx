import { useState, useCallback } from 'react'
import TouchSpin from '@touchspin/react/vanilla'
import '@touchspin/renderer-vanilla/css'
import './App.css'

function App() {
  const [value, setValue] = useState(25.5)
  const [firedEvents, setFiredEvents] = useState<Set<string>>(new Set())

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
    </div>
  )
}

export default App
