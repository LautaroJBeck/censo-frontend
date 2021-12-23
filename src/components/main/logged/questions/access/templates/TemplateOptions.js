import {useState,useEffect} from "react"
const TemplateOptions = ({hiddenInputs,estado,texto,nombre,handleValue}) => {
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
    console.log(estado[nombre])
    return (
        <>

        {hiddenInputs[nombre]?(
            <>
            <span className="cuestionario-pregunta">{texto}</span>
            <nav className="check-container">
            {preguntas?(preguntas.map((el,key)=>(
                <div>
                    {estado[nombre]==(key+1)?(
                    <input type="radio" checked value={key+1} onChange={(e)=>handleValue(e)} id={nombre} name={nombre}></input>
                    ):(
                    <input type="radio" value={key+1} onChange={(e)=>handleValue(e)} id={nombre} name={nombre}></input>
                    )}
                    <label >{el.ID} - {el.NOMBRE}</label>
                </div>
            ))):(
                <></>
            )}
            </nav>
            </>
            ):(
                <>
                <span style={{color:"#c4c4c4"}} className="cuestionario-pregunta">{texto}</span>
                <nav className="check-container">
                {preguntas?(preguntas.map((el,key)=>(
                    <div>
                        <input disabled type="radio"/>
                        <label style={{color:"#c4c4c4"}}>{el.ID} - {el.NOMBRE}</label>
                    </div>
                ))):(<></>)}
                </nav>
                </>
            )}

        </>
    )
}

export default TemplateOptions
