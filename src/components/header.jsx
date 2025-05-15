import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="logo">Blog de Aprendizaje</Link>
        <div className="nav-links">
          <Link to="/">Inicio</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header