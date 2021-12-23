import { useEffect, useState } from "react";

const TemplateMostrarOptions = ({name,texto,contenido}) => {
    const [opciones, setOpciones] = useState([])
    let nombreTabla=name.toLowerCase();
    
    useEffect(()=>{
        const peticionFetch=async()=>{
            let res=await fetch(`http://localhost:9000/api/tables/${nombreTabla}`)
            let json=await res.json();
            setOpciones(json)
        }
        peticionFetch()
    },[])

    return (
        <>
        <span className="show_input-title">{texto}</span>
        {opciones?opciones.map((el,key)=>(
            <>    
                {contenido[name]===(key+1)?(<span className="show_input-text">{el.NOMBRE}</span>):(<></>)} 
                       
            </>
        )):(<></>)}
        {contenido[name]===null?(<span style={{color:"#DD2B1C"}} className="show_input-text">(No específicado)</span>):(<></>)}
        </>
    )
}

export default TemplateMostrarOptions
