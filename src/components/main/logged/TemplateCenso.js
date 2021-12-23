const TemplateCenso = ({editCenso,el,rol,showCenso}) => {
    return (
        <>
        
        
        <section className="template_censo-container">
            <i className="fa-regular fa-square-check"></i>
            <span>{el.NOMBRE_COMERCIAL}</span>
            <button onClick={()=>showCenso(el.ID)}>Ver</button>
            {(rol==="Administrador"||rol==="Supervisor")?(
                <button onClick={()=>editCenso(el.ID)} className="button_color_rojo">Editar</button>
            ):(<></>)}
        </section>
       
        </>
    )
}

export default TemplateCenso
