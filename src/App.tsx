import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Search from "./routes/Home/Search";
import Body from "./components/Body";

function App() {  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Navigate to="/home" /> } />
            <Route path="home" element={<Body />} />
            <Route path="search/" element={<Search />} >
              <Route index element={<Navigate to="/search" /> } />
            </Route>
          </Route>
        </Routes>
       </BrowserRouter>    
  );
}

export default App
