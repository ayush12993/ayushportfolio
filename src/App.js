import './App.css';
import Home from "./pages/home";
import Work from "./pages/work/index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home  />} />
            <Route path="work" element={<Work />} />
            <Route path="contact" element={<Contact />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
