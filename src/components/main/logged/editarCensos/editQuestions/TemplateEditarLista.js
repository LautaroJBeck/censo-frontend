import { useEffect, useState } from "react";

const TemplateEditarLista = ({texto,name,contenido,handleValue,hidden}) => {
    const [preguntas, setPreguntas] = useState([]);
    useEffect(() => {
        
        const handleFetch=async()=>{
            let res=await fetch(`http://localhost:9000/api/tables/${name}`)
            let json=await res.json()
            setPreguntas(json)

        }
        handleFetch()
    }, [])
    
    return (
        <>
        <span className="edit_input-title">{texto}</span>
        {hidden[name]?(
            <select className="edit_lista"  onChange={(e)=>handleValue(e)} name={name} id="">
            <option selected value="null">-----</option>
            {preguntas&&preguntas.map((el,key)=>(
                <>
                {contenido[name]==(key+1)?(
                    <option selected value={key+1} >{el.ID} - {el.NOMBRE}</option>
                ):(<option value={key+1}>{el.ID} - {el.NOMBRE}</option>)}
                </>
            ))}
        </select>
        ):(
        <select disabled className="edit_lista" onChange={(e)=>handleValue(e)} name={name} id="">
                <option selected value="null"></option>
        </select> 
        )}
        </>
    )
}

export default TemplateEditarLista
