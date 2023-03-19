import { Route01, Route02, Route03, Route04, Route05 } from "./router/router";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Route01 />} exact />
        <Route path="/nosotros" element={<Route02 />}  />
        <Route path="/contacto" element={<Route03 />}  />
        <Route path="/job" element={<Route04 />}  />
        <Route path="/news" element={<Route05 />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;