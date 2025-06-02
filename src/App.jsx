import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";  
import { Notfound } from "./pages/Notfound";
import { Toaster } from "@/components/ui/toaster";
import { Showcase } from "./components/Showcase";

function App() {
  return(
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<Notfound/>}/>
          <Route path="/showcase" element={<Showcase />} />
        </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App
