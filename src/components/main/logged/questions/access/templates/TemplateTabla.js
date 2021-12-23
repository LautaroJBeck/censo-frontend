const TemplateTabla = ({estado,handleValue}) => {
    return (
        <>
        <table className="table-cuestionario"> 
            <tr className="tr-table">
                <th className="thead-table">Sexo</th>
                <th className="thead-table">Hombre</th>
                <th className="thead-table">Mujer</th>
            </tr>
            <tr className="tr-table">
                <td className="td-title">Personas remuneradas</td>
                <td><input placeholder="Pregunta 46" value={estado["HOMBRE_PERSONAS_REMUNERADAS"]} onChange={handleValue} name="HOMBRE_PERSONAS_REMUNERADAS" type="number"/></td>
                <td><input placeholder="Pregunta 52" value={estado["MUJER_PERSONAS_REMUNERADAS"]} onChange={handleValue} name="MUJER_PERSONAS_REMUNERADAS" type="number"/></td>
            </tr>
            <tr className="tr-table">
                <td className="td-title">Personas no remuneradas</td>
                <td><input placeholder="Pregunta 47" value={estado["HOMBRE_PERSONAS_NO_REMUNERADAS"]} onChange={handleValue} name="HOMBRE_PERSONAS_NO_REMUNERADAS" type="number" /></td>
                <td><input placeholder="Pregunta 53" value={estado["MUJER_PERSONAS_NO_REMUNERADAS"]} onChange={handleValue} name="MUJER_PERSONAS_NO_REMUNERADAS" type="number" /></td>
                
            </tr>
            <tr className="tr-table">
                <td className="td-title">Comisionistas y personal tercerizado</td>
                <td><input placeholder="Pregunta 48" value={estado["HOMBRE_PERSONAL_TERCERIZADO"]} onChange={handleValue} name="HOMBRE_PERSONAL_TERCERIZADO" type="number" /></td>
                <td><input placeholder="Pregunta 54" value={estado["MUJER_PERSONAL_TERCERIZADO"]} onChange={handleValue} name="MUJER_PERSONAL_TERCERIZADO" type="number" /></td>
                
            </tr>            
            <tr className="tr-table">
                <td className="td-title">Sueldos y salarios</td>
                <td><input placeholder="Pregunta 49" value={estado["HOMBRE_SUELDOS"]} onChange={handleValue} name="HOMBRE_SUELDOS" type="number" /></td>
                <td><input placeholder="Pregunta 55" value={estado["MUJER_SUELDOS"]} onChange={handleValue} name="MUJER_SUELDOS" type="number" /></td>
                
            </tr>
            <tr className="tr-table">
                <td className="td-title">Otras remuneraciones</td>
                <td><input placeholder="Pregunta 50" value={estado["HOMBRE_OTRAS_REMUNERACIONES"]} onChange={handleValue} name="HOMBRE_OTRAS_REMUNERACIONES" type="number" /></td>
                <td><input placeholder="Pregunta 56" value={estado["MUJER_OTRAS_REMUNERACIONES"]} onChange={handleValue} name="MUJER_OTRAS_REMUNERACIONES" type="number" /></td>
                
            </tr>
            <tr className="tr-table">
                <td className="td-title">Pago por indemnizacion o liquidacion al personal</td>
                <td><input placeholder="Pregunta 51" value={estado["HOMBRE_INDEMNIZACION"]} onChange={handleValue} name="HOMBRE_INDEMNIZACION" type="number" /></td>
                <td><input placeholder="Pregunta 57" value={estado["MUJER_INDEMNIZACION"]} onChange={handleValue} name="MUJER_INDEMNIZACION" type="number" /></td>
            </tr>
        </table>
        </>
    )
}

export default TemplateTabla
