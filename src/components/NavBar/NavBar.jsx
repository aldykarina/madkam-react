import CartWidget from "../CartWidget/CartWidget"
import logoMadkam from '../../assets/logomadkam.png'


export default function NavBar(){
    
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
            <a className="navbar-brand" href="./index.html">
                <img src={logoMadkam} alt="Logo Madkam, pulpo de colores" />
            </a>
            <div className="navBarButton">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fs-7"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                <ul className="navbar-nav fw-bold align-items-center">
                    <li className="nav-item">
                        <a className="nav-link" href="">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Contacto</a>
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



/* <h3>MADKAM</h3>
        <ul>
            <li><a href=""></a>Remeras</li>
            <li><a href=""></a>Tazas</li>
        </ul> */