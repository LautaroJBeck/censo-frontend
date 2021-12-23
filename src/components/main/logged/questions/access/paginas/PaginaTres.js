
import TemplateNumero from "../templates/TemplateNumero"
import TemplateOptions from "../templates/TemplateOptions"

const PaginaTres = ({hiddenInputs,estado,sendForm,handleValue,handlePage}) => {
    return (
        <>
        <TemplateOptions hiddenInputs={hiddenInputs} estado={estado} texto="17. ¿Esta entidad tuvo alguna cuenta bancaria para la operación del establecimiento?" handleValue={handleValue} nombre="CUENTA_BANCARIA"/>
        <TemplateOptions hiddenInputs={hiddenInputs} estado={estado} texto="18. ¿Cuáles son los motivos por los que esta razón social o entidad propietaria no tiene alguna cuenta bancaria?" handleValue={handleValue} nombre="MOTIVO_NO_CUENTA"/>
        <h4 className="form-title">Montos de gastos por:</h4>
        <TemplateNumero texto="19. Materias primas y auxiliares compradas" nombre="GASTOS_MATERIAS_PRIMAS" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="20. Compras de envases y etiquetas" nombre="GASTOS_COMPRA_ENVASES" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="21. Mercaderías compradas para su reventa" nombre="GASTOS_MERCADERIAS_REVENTA" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="22. Materiales comprados para la prestación de servicios" nombre="GASTOS_MATERIALES_PRESTACION" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="23. Monto pagado por la subcontratación de servicios para la realización de la producción" nombre="GASTOS_SUBCONTRATACION" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="24. Pago por el suministro de personal de otra empresa" nombre="GASTOS_PAGO_SUMINISTRO" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="25. Pago por comisiones sin sueldo base" nombre="GASTOS_PAGO_COMISIONES" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="26. Pago por consumo de agua" nombre="GASTOS_PAGO_AGUA" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="27. Compras de combustibles y lubricantes para equipo de transporte" nombre="GASTOS_COMPRA_COMBUSTIBLE" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="28. Consumo de energía eléctrica" nombre="GASTOS_CONSUMO_ELECTRICIDAD" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="29. Reparaciones y refacciones para mantenimiento corriente" nombre="GASTOS_REPARACIONES" estado={estado} handleValue={handleValue}/>
        
        <section className="sectionButton">
            <button onClick={(e)=>handlePage(e,3,"resta")}>Volver atrás</button>
            <button onClick={(e)=>handlePage(e,3,"suma")}>Siguiente - 3/5</button>
            
        </section>
        </>
    )
}

export default PaginaTres
