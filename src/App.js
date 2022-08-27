import './App.css'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Homepage from './Components/Homepage'
import { Routes, Route} from "react-router-dom";

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
