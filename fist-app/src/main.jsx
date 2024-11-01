import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Books from './books.jsx'
import Items from './items.jsx'
import ItemsColour from './ItemsColour.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App></App> */}
    {/* <Books></Books> */}
    {/* <ItemsColour></ItemsColour> */}
    <Items></Items>
  </StrictMode>,
)
