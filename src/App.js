import './App.css'
// import Header from './Homepage/Header'
import Offcanvas from './Homepage/Offcanvas'
import Headerss from './Components/Header'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Homepage from './Components/Homepage'
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Header /> */}
    {/* <Offcanvas /> */}
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
    </>
  )
}

export default App
