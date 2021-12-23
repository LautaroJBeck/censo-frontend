import acicLogo from "../../media/acicLogo.png"
import fceaLogo from "../../media/fceaLogo.png"
import "./Header.css"
const Header = () => {
    const handleRedirect=()=>{
        window.location.href="/"
    }
    return (
        <header>
        <div className="header-container">
            <nav className="logos-container">
                <img src={acicLogo} alt="Logo de acic" />
                <img src={fceaLogo} alt="Logo de fcea" />
                <h2>Censo departamental</h2>
            </nav>

            <button onClick={()=>handleRedirect()} className="header-button">Volver al Inicio</button>
        </div>
    </header>
    )
}

export default Header
