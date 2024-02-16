
import './App.css'
import Navbar from './components/Navbar'

import { Outlet } from "react-router-dom"
function App() {

  return (
    <div className='App'>
      <Navbar/>
      <h2>Movies lib</h2>
      <Outlet/>
    </div>
  )
}

export default App
