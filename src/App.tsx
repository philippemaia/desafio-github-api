import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";

function App() {  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Navigate to="/home" /> } />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
       </BrowserRouter>    
  );
}

export default App
