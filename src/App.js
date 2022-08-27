import './App.css'
import Login from './Components/Login'
import Homepage from './Components/Homepage'
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<Login />} />
  </Routes>
    </>
  )
}

export default App
