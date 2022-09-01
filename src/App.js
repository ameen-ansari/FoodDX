import './App.css'
import Login from './Homepage/Login'
import Signup from './Homepage/Signup'
import Homepage from './Homepage/Homepage'
import ForgotP from './Homepage/ForgotP'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Homepage />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgotP />} />
      </Routes>
    </>
  )
}

export default App
