import TemplateBotonUbicacion from "../templates/TemplateBotonUbicacion"
import TemplateInput from "../templates/TemplateInput"
import TemplateLista from "../templates/TemplateLista"


const PaginaUno = ({handlePage,handleValue,estado,handleLocation,messageLocation}) => {
    
    return (
        <>
                <TemplateInput texto="1. Nombre del negocio" nombre="NOMBRE_COMERCIAL" estado={estado} handleValue={handleValue}/>
                <TemplateInput texto="2. RUC del negocio" nombre="RUC" estado={estado} handleValue={handleValue}/>
                <TemplateInput texto="3. Dirección del negocio" nombre="DIRECCION" estado={estado} handleValue={handleValue}/>
                <TemplateBotonUbicacion messageLocation={messageLocation} handleLocation={handleLocation}/>
                <TemplateLista texto="4. Barrio" handleValue={handleValue} estado={estado} nombre="BARRIO"/>
                <TemplateInput texto="5. Manzana" nombre="MANZANA" estado={estado} handleValue={handleValue}/>
                <TemplateInput texto="6. Teléfono" nombre="TELEFONO" estado={estado} handleValue={handleValue}/>
                <TemplateInput texto="7. Celular" nombre="CELULAR" estado={estado} handleValue={handleValue}/>
                <TemplateInput texto="8. Correo" nombre="CORREO" estado={estado} handleValue={handleValue}/>
                <section className="sectionButton">
                    <button onClick={(e)=>handlePage(e,1,"suma")}>Siguiente - 1/5</button>
                </section>
                </>
    )
}

export default PaginaUno
