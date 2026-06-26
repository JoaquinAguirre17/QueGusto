import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Componentes/HOME/Home";
import Products from "./Componentes/Productos/Productos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
