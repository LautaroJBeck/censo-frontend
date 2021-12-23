import { useEffect, useState } from "react";

const TemplateLista = ({texto,handleValue,estado,nombre}) => {
    const [preguntas, setPreguntas] = useState([]);
    useEffect(() => {
        
        const handleFetch=async()=>{
            try{
                let res=await fetch(`http://localhost:9000/api/tables/${nombre}`)
                let json=await res.json()
                setPreguntas(json)

            }catch(err){

            }
        }
        handleFetch()
    }, [])
    return (
        <>
        <span className="cuestionario-pregunta">{texto}</span>
        <select className="select-cuestionario" value={estado[nombre]} onChange={(e)=>handleValue(e)} name={nombre}>
                <option selected value="null">---</option>
            {preguntas&&preguntas.map((el,key)=>(
                <option value={el.ID}>{el.ID} - {el.NOMBRE}</option>
            ))}
        </select>
        </>
    )
}

export default TemplateLista
