import "./HeaderCenso.css"
const HeaderCenso = ({handleSalir,valueToken}) => {
    return (
        <header className="header-login">
            <nav className="nav-login">
            <h4 className="header-h4">
                    <i className="fa-regular fa-user"></i>
                    {
                        valueToken.nombre&&valueToken.rol?(
                            <><span  className="span-rol">{valueToken.nombre},</span><span> {valueToken.rol}</span></>
                        ):(
                            <></>
                        )
                    }
                        
                </h4>
                <button className="button-header-login" onClick={()=>handleSalir()}>Volver a inicio</button>
            </nav>
        </header>
    )
}

export default HeaderCenso
