const TemplateMostrarInput = ({texto,contenido,name,numero,warning}) => {
    let valor=contenido[name]
    return (
        <>
        <span style={warning?{color:"#DD2B1C"}:{}} className="show_input-title">{texto}</span>
        {numero?<span style={warning?{color:"#DD2B1C"}:{}} className="show_input-text">{valor} Gs.</span>:<span className="show_input-text">{valor}</span>}
        </>
    )
}

export default TemplateMostrarInput
