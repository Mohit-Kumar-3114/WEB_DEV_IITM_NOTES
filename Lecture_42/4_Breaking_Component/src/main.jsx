import { createRoot } from 'react-dom/client'
import LoadTodos from './App.jsx'

let todos = [
    {name: "Coding", description: "Saf is a perfect coder"},
    {name: "Swimming", description: "Saf is a great swimmer"},
    {name: "Singer", description: "Saf bhut mast gata hai bas koi sunnna ni usse"},
    {name: "Dancer", description: "Saf is a rockstar"}
]

createRoot(document.getElementById('root')).render(
    <LoadTodos todos={todos} />
)
