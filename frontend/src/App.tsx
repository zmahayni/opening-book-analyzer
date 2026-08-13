import { useEffect, useState } from 'react'
import './App.css'

type Health = {
  status: string
  service: string
}

function App() {
  const [health, setHealth] = useState<Health | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(setHealth)
      .catch((err: Error) => setError(err.message))
  }, [])

  return (
    <>
      <h1>Opening Book Analyzer</h1>
      {error && <p>Backend unreachable: {error}</p>}
      {health && (
        <p>
          Backend: {health.service} ({health.status})
        </p>
      )}
      {!health && !error && <p>Checking backend...</p>}
    </>
  )
}

export default App
