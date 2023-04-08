import {Route, Routes} from "react-router-dom"
import Homepage from "./pages/Homepage";
import Portafolio from "./pages/Portafolio";
import Blog from "./pages/Blog";
import About from "./pages/About";
function App() {
  return (
    <Routes>

        <Route path="/" element={<Homepage/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/portafolio" element={<Portafolio/>}/>
        <Route path="/about" element={<About/>}/>


    </Routes>
  )
}

export default App;
