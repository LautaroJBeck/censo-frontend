import "./MainLogin.css"
import TemplateCenso from "./TemplateCenso"
import { useState } from "react"
import MostrarCenso from "./mostrarCenso/MostrarCenso"


const MainLogin = ({negociosCensados,rol}) => {
    const [mostrarTemplate, setMostrarTemplate] = useState(false)
    const [templateContenido, setTemplateContenido] = useState({})
    
    const handleValue=(e)=>{
        setTemplateContenido({
            ...templateContenido,
            [e.target.name]:e.target.value
        })
    }

    const agregarCenso=()=>{
        window.location.href="/censar"
    }
    const showCenso=(id)=>{
        let censo=negociosCensados.find(el=>el.ID===id);
        
        setTemplateContenido(censo)
        setMostrarTemplate(true);
    }
    const hideCenso=(modo)=>{
        setTemplateContenido({})
        if(modo=="mostrar"){
            setMostrarTemplate(false)
        }
    }
    const editCenso=(id)=>{
        let censo=negociosCensados.find(el=>el.ID===id)
        localStorage.setItem("object",JSON.stringify(censo));
        window.location.href="/editar"
    }
    return (
        <main className="main-login">
            <article className="article-login">
                <div>
                <button className="login-boton-azul" onClick={()=>agregarCenso()}>Agregar nuevos censos</button>
                {rol==="Administrador"?(
                    <button onClick={()=>window.location.href="agregar"} className="button_color_rojo">Agregar nuevos usuarios</button>
                ):(<></>)}
                </div>

                <h4>Negocios que censaste:</h4>
                <nav>
                    {negociosCensados?(negociosCensados.map(el=>(
                        <TemplateCenso editCenso={editCenso} showCenso={showCenso} rol={rol} el={el}/>
                    ))):(<></>)}
                </nav>
            </article>
            {mostrarTemplate&&<MostrarCenso hideCenso={hideCenso} templateContenido={templateContenido}/>}
            
        </main>
    )
}

export default MainLogin
