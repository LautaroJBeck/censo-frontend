const TemplateNumero = ({texto,nombre,estado,handleValue}) => {
    return (
        <>
                <span className="cuestionario-pregunta">{texto}</span>
                <input 
                className="input-formulario" 
                name={nombre}
                value={estado[nombre]}
                onChange={(e)=>handleValue(e)}
                type="number" />
        </>
    )
}

export default TemplateNumero
