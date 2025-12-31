import { createRoot } from 'react-dom/client'
import App  from "./App.jsx" // default export
import { App2 } from "./App.jsx" // normal export
import { App3 } from './App.jsx'


createRoot(document.getElementById('root')).render(
    <div>
      {/* arguements */}
      {App("coding", "saf is a perfect coder")} 

      {/* props */}
      <App2 name="swimming" description="saf is a swimmer"/>
      <App3 name="dancing" description="saf is a dancer"/>
      </div>
)
