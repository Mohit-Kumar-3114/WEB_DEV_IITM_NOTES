import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CompanyProvider from './context/CompanyContext.jsx'

createRoot(document.getElementById('root')).render(
  <CompanyProvider>
    <App />
  </CompanyProvider>
)
