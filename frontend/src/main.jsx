import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  { LCMCalculator } from './components/LCMCalculator'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LCMCalculator />
  </StrictMode>,
)
