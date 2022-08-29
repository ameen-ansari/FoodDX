import './App.css'
import Login from './Homepage/Login'
import Signup from './Homepage/Signup'
import Homepage from './Homepage/Homepage'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
