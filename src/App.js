import { Route01, Route02, Route03, Route04, Route05, 
  Service_estructural, Service_sanitario, Service_arquitectura, Service_tecnica, 
  Project_estructura, Project_sanitaria, Project_arquitectura, Project_otros, Publicaciones} from "./router/router";
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
        <Route path="/estructuras_services" element={<Service_estructural />}  />
        <Route path="/sanitario_services" element={<Service_sanitario />}  />
        <Route path="/arquitectura_services" element={<Service_arquitectura />}  />
        <Route path="/tecnica_services" element={<Service_tecnica />}  />
        <Route path="/estructuras_project" element={<Project_estructura />}  />
        <Route path="/sanitaria_project" element={<Project_sanitaria />}  />
        <Route path="/arquitectura_project" element={<Project_arquitectura />}  />
        <Route path="/otros_project" element={<Project_otros />}  />
        <Route path="/publicaciones" element={<Publicaciones />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;