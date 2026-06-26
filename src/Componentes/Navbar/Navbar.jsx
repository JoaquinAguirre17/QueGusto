import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <h2>🍽️ Que Gusto</h2>
      </div>

      <nav className="navbar-links">
        <a href="#empanadas">Empanadas</a>
        <a href="#guarniciones">Guarniciones</a>
        <a href="#pizzas">Pizzas</a>
        <a href="#hamburguesas">
          Hamburguesas y Sandwichs
        </a>
        <a href="#bebidas">Bebidas</a>
      </nav>
    </header>
  );
};

export default Navbar;