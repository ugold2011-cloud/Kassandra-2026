import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'
import PwaStatusBanner from './components/PwaStatusBanner'

import './index.css'
import App from './App.jsx'

function AppWrapper() {
  const [offlineReady, setOfflineReady] = useState(false)
  const [needRefresh, setNeedRefresh] = useState(false)

  const updateSW = registerSW({
    onOfflineReady() {
      setOfflineReady(true)
    },
    onNeedRefresh() {
      setNeedRefresh(true)
    },
  })

  return (
    <>
      <BrowserRouter basename="/Kassandra-2026">
        <App />
      </BrowserRouter>
      {offlineReady && (
        <PwaStatusBanner
          message="האפליקציה מוכנה לעבודה ללא אינטרנט"
          onClose={() => setOfflineReady(false)}
        />
      )}
      {needRefresh && (
        <PwaStatusBanner
          message="קיים עדכון חדש לאפליקציה"
          actionLabel="עדכן עכשיו"
          onAction={() => updateSW(true)}
          onClose={() => setNeedRefresh(false)}
        />
      )}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)