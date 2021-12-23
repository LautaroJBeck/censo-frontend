const TemplateMostrarOtros = ({texto,nameTitulo,nameMonto,contenido}) => {
    let valorTitulo=contenido[nameTitulo];
    let valorMonto=contenido[nameMonto]
    return (
        <>
            <span className="show_input-title">{texto}</span>
            {valorTitulo?(
                <span className="show_input-text"><b>Razón del gasto:</b> {valorTitulo}</span>
            ):(
                <span style={{color:"#DD2B1C"}} className="show_input-text">(No especificado)</span>
            )}
            {valorMonto?(
                <span className="show_input-text"><b>Monto:</b> {valorMonto} Gs.</span>
            ):(
                <span style={{color:"#DD2B1C"}} className="show_input-text">(No especificado)</span>
            )}

        </>
    )
}

export default TemplateMostrarOtros
