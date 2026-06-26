import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Que Gusto</h1>
          <p>
            Comidas caseras, pizzas, empanadas,
            hamburguesas y mucho más.
          </p>
          <button>Ver Menú</button>
        </div>
      </section>

      <section className="categories">
        <div id="empanadas" className="category-card">
          🥟 Empanadas
        </div>
        <div id="guarniciones" className="category-card">
          🍟 Guarniciones
        </div>
        <div id="pizzas" className="category-card">
          🍕 Pizzas
        </div>
        <div id="hamburguesas" className="category-card">
          🍔 Hamburguesas
        </div>
      </section>
    </>
  );
};

export default Home;