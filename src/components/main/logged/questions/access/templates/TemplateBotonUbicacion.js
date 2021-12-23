const TemplateBotonUbicacion = ({handleLocation,messageLocation}) => {
    return (
        <>
        <button className="boton-ubicacion" onClick={(e)=>handleLocation(e)}>Obtener ubicación del negocio</button>
        {messageLocation.error&&<p className="ubicacion-error">{messageLocation.message}</p>}
        {messageLocation.success&&<p className="ubicacion-success">{messageLocation.message}</p>}

        </>
    )
}

export default TemplateBotonUbicacion
