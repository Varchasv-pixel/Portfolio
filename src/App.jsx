import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path = "*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
