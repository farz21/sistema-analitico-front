import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Landing from "./pages/Home";
import Login from "./pages/Login";

// Importá estos componentes una vez que los crees
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
// import Duelo from './pages/Duelo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="registro" element={<Register />} />

        <Route element={<Layout />}>
          {/* Descomentá estas rutas cuando tengas los archivos creados */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/duelo" element={<Duelo />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
