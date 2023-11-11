import { Navigate, Route, Routes } from "react-router-dom";
import  Home  from "./components/Home";
import Card4 from "./components/Card4";
import ContactoAseguradoras from "./components/ContactoAseguradoras";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/nbpro' element={<Card4></Card4>}></Route>
      <Route path='/contactoAseguradoras' element={<ContactoAseguradoras></ContactoAseguradoras>} ></Route>
      <Route path='/*' element={<Navigate to='/'/>}></Route>
    </Routes>

    
    
    </>
  )
}

export default App
