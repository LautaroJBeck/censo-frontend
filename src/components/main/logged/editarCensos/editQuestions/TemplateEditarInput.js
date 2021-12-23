const TemplateEditarInput = ({texto,contenido,name,handleValue}) => {
    return (
        <>
        <span className="edit_input-title">{texto}</span>
        <input 
        className="edit_input" 
        name={name}
        value={contenido[name]}
        onChange={(e)=>handleValue(e)}
        type="text" />
        </>
    )
}

export default TemplateEditarInput
