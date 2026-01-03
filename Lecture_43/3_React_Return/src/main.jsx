import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { App2 } from './App.jsx';

createRoot(document.getElementById('root')).render(
  <>
      <App />
      <App2 />
  </>
)
