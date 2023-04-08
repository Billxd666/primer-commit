import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Ejercicios from "./pages/Ejercicios";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";



function App() {
  return (
    <Routes>

      <Route path='/' element={<Homepage/>}/>
      <Route path='/ejercicios' element={<Ejercicios/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contacto' element={<Contacto/>}/>

      
      
    </Routes>
  );
}

export default App;
