import CartWidget from "../CartWidget/CartWidget"
import logoMadkam from '../../assets/logomadkam.png'
import { NavLink, Link } from "react-router-dom"

export default function NavBar(){
    
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={logoMadkam} alt="Logo Madkam, pulpo de colores" />
            </Link>
            <div className="navBarButton">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fs-7"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                <ul className="navbar-nav fw-bold align-items-center">
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </NavLink>
                        <ul className="dropdown-menu">
                            <NavLink  to="/category/Remeras%20Personalizadas" >Remeras Personalizadas</NavLink>
                            <NavLink  to="/category/Tazas"  >Tazas</NavLink>
                            <NavLink  to="/" className="todosProductos"  >Todos los productos</NavLink>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">Contacto</NavLink>
                    </li>
                        <li className="nav-item">
                            <button className="nav-link"> Ingresar</button>
                        </li>                        
                    </ul>
            </div>
            <CartWidget/>
        </div>
    </nav>
    )
}