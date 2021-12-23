import TemplateNumero from "../templates/TemplateNumero"
import TemplateTabla from "../templates/TemplateTabla"

const PaginaCinco = ({estado,sendForm,handleValue,handlePage,inputsFaltantes,errorLocation}) => {
    return (
        <>
        
        <h4 className="form-title">Pago por impuestos:</h4>
        <TemplateNumero texto="43. IVA Crédito fiscal" nombre="IVA_CREDITO_FISCAL" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="44. IVA Débito fiscal" nombre="IVA_DEBITO_FISCAL" estado={estado} handleValue={handleValue}/>
        <TemplateNumero texto="45. Impuesto a la Renta (IRACIS O IRPC)" nombre="IMPUESTO_RENTA" estado={estado} handleValue={handleValue}/>
        <h4 className="form-title">Pagos y remuneraciones</h4>
        <TemplateTabla estado={estado} handleValue={handleValue}/>
        <section className="sectionButton">
            <button onClick={(e)=>handlePage(e,5,"resta")}>Volver atrás</button>
            <button onClick={(e)=>sendForm(e)}>Enviar</button>    
        </section>
        {Object.keys(inputsFaltantes).length>0&&(
            <>
            <p className="error-form-title">Le falto rellenar los siguientes formularios:</p>
            {Object.keys(inputsFaltantes).map(el=>(
            <p className="error-form">{`Formulario Nº ${el}`}</p>
            ))}
            </>
            )
        }
        {errorLocation.error&&<p className="error-form">No obtuvo la ubicación del local</p>}
        </>
    )
}

export default PaginaCinco
