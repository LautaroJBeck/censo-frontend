
import TemplateNumero from "../templates/TemplateNumero"
import TemplateOtros from "../templates/TemplateOtros"

const PaginaCuatro = ({estado,handleValue,handlePage}) => {
    return (
        <>
        <h4 className="form-title">Montos de gastos por:</h4>
        <TemplateNumero texto="30. Pago por alquiler de máquinas y equipos" nombre="GASTOS_ALQUILER_MAQUINAS" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="31. Pago por el alquiler de edificios" nombre="GASTOS_ALQUILER_EDIFICIOS" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="32. Pago por el alquiler de terrenos" nombre="GASTOS_ALQUILER_TERRENO" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="33. Pago por los servicios de comunicación (telefonía fija, celular, internet, etc.)" nombre="GASTOS_SERVICIOS_COMUNICACION" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="34. Transporte de cargas (fletes de productos vendidos)" nombre="GASTOS_TRANSPORTE_CARGA" estado={estado} handleValue={handleValue}/>
        <TemplateOtros gasto texto="35. Otros gastos por compras de bienes y servicios (opcional): " nombreTitulo="GASTOS_OTROS_TITULO" nombreNumero="GASTOS_OTROS_NUMERO" estado={estado} handleValue={handleValue}/>
        <h4 className="form-title">Montos de ingresos por:</h4>
        <TemplateNumero texto="36. Ventas de productos elaborados" nombre="INGRESOS_PRODUCTOS_ELABORADOS" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="37. Ingresos por la prestación de servicios" nombre="INGRESOS_PRESTACION_SERVICIOS" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="38. Ingresos por la reventa de mercaderías" nombre="INGRESOS_REVENTA_MERCADERIAS" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="39. Ingresos obtenidos bajo la modalidad de subcontratación de servicios por la realización de la producción" nombre="INGRESOS_SUBCONTRATACION" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="40. Ingresos por alquiler de máquinas y equipos" nombre="INGRESOS_ALQUILER_MAQUINAS" estado={estado} handleValue={handleValue}/>
        <TemplateOtros texto="41. Otros ingresos por suministro de bienes y servicios (opcional): " nombreTitulo="INGRESOS_OTROS_TITULO" nombreNumero="INGRESOS_OTROS_NUMERO" estado={estado} handleValue={handleValue}/>
        
        <TemplateNumero texto="42. Intereses sobre depósitos" nombre="INTERESES_DEPOSITOS" estado={estado} handleValue={handleValue}/>
        <section className="sectionButton">
            <button onClick={(e)=>handlePage(e,4,"resta")}>Volver atrás</button>
            <button onClick={(e)=>handlePage(e,4,"suma")}>Siguiente - 4/5</button>
            
        </section>
        </>
    )
}

export default PaginaCuatro
