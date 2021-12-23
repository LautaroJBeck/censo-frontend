const TemplateOtros = ({gasto,texto,nombreTitulo,nombreNumero,estado,handleValue}) => {
    return (
        <>
        <span className="cuestionario-pregunta">{texto}</span>
             <input 
                placeholder={gasto?"Especificar el gasto":"Especificar el ingreso"}
                className="input-formulario" 
                name={nombreTitulo}
                value={estado[nombreTitulo]}
                onChange={(e)=>handleValue(e)}
                type="text" />
                <input 
                placeholder="Monto"
                className="input-formulario" 
                name={nombreNumero}
                value={estado[nombreNumero]}
                onChange={(e)=>handleValue(e)}
                type="number" />
        </>
    )
}

export default TemplateOtros
