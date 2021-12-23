import TemplateInput from "../templates/TemplateInput"
import TemplateOptions from "../templates/TemplateOptions"

const PaginaDos = ({hiddenInputs,handlePage,estado,handleValue}) => {
    return (
        <>
        <TemplateInput texto="9. Actividad principal" nombre="ACTIVIDAD_PRINCIPAL" estado={estado} handleValue={handleValue}/>
        <TemplateInput texto="10. Productos comercializados" nombre="PRODUCTO_COMERCIALIZADO" estado={estado} handleValue={handleValue}/>
        <TemplateInput texto="11. Año de inicio de la empresa" nombre="ANIO_INICIO" estado={estado} handleValue={handleValue}/>
        <TemplateOptions hiddenInputs={hiddenInputs} estado={estado} texto="12. Tipo de empresa" handleValue={handleValue} nombre="TIPO_EMPRESA"/>
        <TemplateOptions hiddenInputs={hiddenInputs} estado={estado} texto="13. Condición jurídica de este establecimiento" handleValue={handleValue} nombre="CONDICION_JURIDICA"/>
        <TemplateOptions hiddenInputs={hiddenInputs} estado={estado} texto="14. ¿Obtuvo créditos, préstamos o financiamiento para la operación del negocio?" handleValue={handleValue} nombre="PRESTAMO_FINANCIAMIENTO"/>
        <TemplateOptions hiddenInputs={hiddenInputs} estado={estado} texto="15. Lugar de donde proviene el crédito" handleValue={handleValue} nombre="LUGAR_CREDITO"/>
        <TemplateOptions hiddenInputs={hiddenInputs} estado={estado} texto="16. ¿Cuales son las causas por las que no pudo acceder a crédito bancario? " handleValue={handleValue} nombre="CAUSA_NO_CREDITO"/>
        <section className="sectionButton">
                <button onClick={(e)=>handlePage(e,2,"resta")}>Volver atrás</button>
                <button onClick={(e)=>handlePage(e,2,"suma")}>Siguiente - 2/5</button>
        </section>
        </>
    )
}

export default PaginaDos
