import "./MostrarCenso.css"
import TemplateMostrarInput from "./showQuestions/TemplateMostrarInput"
import TemplateMostrarOptions from "./showQuestions/TemplateMostrarOptions"
import TemplateMostrarOtros from "./showQuestions/TemplateMostrarOtros"
import TemplateMostrarTable from "./showQuestions/TemplateMostrarTable"
const MostrarCenso = ({templateContenido,hideCenso}) => {

    return (
        <div className="mostrar_censo-container">
            <div className="censo_info-container">
                <button className="boton-salir" onClick={()=>hideCenso("mostrar")}><i className="fa-solid fa-xmark"></i></button>
                <TemplateMostrarInput name="NOMBRE_COMERCIAL" texto="1. Nombre del negocio" contenido={templateContenido}/>
                <TemplateMostrarInput name="RUC" texto="2. RUC del negocio" contenido={templateContenido}/>
                <TemplateMostrarInput name="DIRECCION" texto="3. Dirección del negocio" contenido={templateContenido}/>
                <TemplateMostrarInput name="COORD_X" texto="Longitud de la ubicación" contenido={templateContenido}/>
                <TemplateMostrarInput name="COORD_Y" texto="Latitud de la ubicación" contenido={templateContenido}/>
                
                
                <TemplateMostrarOptions name="BARRIO" texto="4. Barrio" contenido={templateContenido}/>
                <TemplateMostrarInput name="MANZANA" texto="5. Manzana" contenido={templateContenido}/>
                <TemplateMostrarInput name="TELEFONO" texto="6. Teléfono" contenido={templateContenido}/>
                <TemplateMostrarInput name="CELULAR" texto="7. Celular" contenido={templateContenido}/>
                <TemplateMostrarInput name="CORREO" texto="8. Correo" contenido={templateContenido}/>
                <TemplateMostrarInput name="ACTIVIDAD_PRINCIPAL" texto="9. Actividad principal" contenido={templateContenido}/>
                <TemplateMostrarInput name="PRODUCTO_COMERCIALIZADO" texto="10. Productos comercializados" contenido={templateContenido}/>
                <TemplateMostrarInput name="ANIO_INICIO" texto="11. Año de inicio de la empresa" contenido={templateContenido}/>
                <TemplateMostrarOptions name="TIPO_EMPRESA" texto="12. Tipo de empresa" contenido={templateContenido}/>
                <TemplateMostrarOptions name="CONDICION_JURIDICA" texto="13. Condición jurídica de este establecimiento" contenido={templateContenido}/>
                <TemplateMostrarOptions name="PRESTAMO_FINANCIAMIENTO" texto="14. ¿Obtuvo créditos, préstamos o financiamiento para la operación del negocio?" contenido={templateContenido}/>
                <TemplateMostrarOptions name="LUGAR_CREDITO" texto="15. Lugar de donde proviene el crédito" contenido={templateContenido}/>
                <TemplateMostrarOptions name="CAUSA_NO_CREDITO" texto="16. ¿Cuales son las causas por las que no pudo acceder a crédito bancario?" contenido={templateContenido}/>
                <TemplateMostrarOptions name="CUENTA_BANCARIA" texto="17. ¿Esta entidad tuvo alguna cuenta bancaria para la operación del establecimiento?" contenido={templateContenido}/>
                <TemplateMostrarOptions name="MOTIVO_NO_CUENTA" texto="18. ¿Cuáles son los motivos por los que esta razón social o entidad propietaria no tiene alguna cuenta bancaria?"  contenido={templateContenido}/>
                
                <TemplateMostrarInput numero name="GASTOS_MATERIAS_PRIMAS" texto="19. Materias primas y auxiliares compradas"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="GASTOS_COMPRA_ENVASES" texto="20. Compras de envases y etiquetas"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="GASTOS_MERCADERIAS_REVENTA" texto="21. Mercaderías compradas para su reventa"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="GASTOS_MATERIALES_PRESTACION" texto="22. Materiales comprados para la prestación de servicios"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="GASTOS_SUBCONTRATACION" texto="23. Monto pagado por la subcontratación de servicios para la realización de la producción"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="GASTOS_PAGO_SUMINISTRO" texto="24. Pago por el suministro de personal de otra empresa"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="GASTOS_PAGO_COMISIONES" texto="25. Pago por comisiones sin sueldo base"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="GASTOS_PAGO_AGUA" texto="26. Pago por consumo de agua"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="GASTOS_COMPRA_COMBUSTIBLE" texto="27. Compras de combustibles y lubricantes para equipo de transporte"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="GASTOS_CONSUMO_ELECTRICIDAD" texto="28. Consumo de energía eléctrica"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="GASTOS_REPARACIONES" texto="29. Reparaciones y refacciones para mantenimiento corriente"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="GASTOS_ALQUILER_MAQUINAS" texto="30. Pago por alquiler de máquinas y equipos"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="GASTOS_ALQUILER_EDIFICIOS" texto="31. Pago por el alquiler de edificios"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="GASTOS_ALQUILER_TERRENO" texto="32. Pago por el alquiler de terrenos"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="GASTOS_SERVICIOS_COMUNICACION" texto="33. Pago por los servicios de comunicación (telefonía fija, celular, internet, etc.)"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="GASTOS_TRANSPORTE_CARGA" texto="34. Transporte de cargas (fletes de productos vendidos)"  contenido={templateContenido}/>
                
                <TemplateMostrarOtros nameTitulo="GASTOS_OTROS_TITULO" nameMonto="GASTOS_OTROS_NUMERO" texto="35. Otros gastos por compras de bienes y servicios:" contenido={templateContenido}/>
                
                <TemplateMostrarInput warning numero name="GASTOS_TOTALES" texto="----Gastos totales de la empresa-----" contenido={templateContenido}/>

                <TemplateMostrarInput numero name="INGRESOS_PRODUCTOS_ELABORADOS" texto="36. Ventas de productos elaborados"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="INGRESOS_PRESTACION_SERVICIOS" texto="37. Ingresos por la prestación de servicios"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="INGRESOS_REVENTA_MERCADERIAS" texto="38. Ingresos por la reventa de mercaderías"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="INGRESOS_SUBCONTRATACION" texto="39. Ingresos obtenidos bajo la modalidad de subcontratación de servicios por la realización de la producción"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="INGRESOS_ALQUILER_MAQUINAS" texto="40. Ingresos por alquiler de máquinas y equipos"  contenido={templateContenido}/>
                
                <TemplateMostrarOtros nameTitulo="INGRESOS_OTROS_TITULO" nameMonto="INGRESOS_OTROS_NUMERO" texto="41. Otros gastos por compras de bienes y servicios:" contenido={templateContenido}/>
                <TemplateMostrarInput warning numero name="INGRESOS_TOTALES" texto="----Ingresos totales de la empresa-----" contenido={templateContenido}/>
                <TemplateMostrarInput numero name="INTERESES_DEPOSITOS" texto="42. Intereses sobre depósitos"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="IVA_CREDITO_FISCAL" texto="43. IVA Crédito fiscal"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="IVA_DEBITO_FISCAL" texto="44. IVA Débito fiscal"  contenido={templateContenido}/>
                <TemplateMostrarInput numero name="IMPUESTO_RENTA" texto="45. Impuesto a la Renta (IRACIS O IRPC)"  contenido={templateContenido}/>
                <TemplateMostrarTable contenido={templateContenido}/>
            </div>
        </div>
    )
}

export default MostrarCenso
