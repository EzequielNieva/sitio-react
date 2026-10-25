import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <span className="logo">MiSitio<span className="logo-punto">.</span></span>
      <nav>
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/galeria">Galería</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
