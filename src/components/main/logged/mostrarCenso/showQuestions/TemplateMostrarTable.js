const TemplateMostrarTable = ({contenido}) => {
    return (
        <>
        <span className="show_input-title">Pagos y remuneraciones</span>
        <table className="show_table">
            <tr>
                <th>Sexo</th>
                <th>Hombre</th>
                <th>Mujer</th>
                <th>Total</th>
            </tr>
            <tr>
                <td><b>Personas remuneradas</b></td>
                <td>{contenido["HOMBRE_PERSONAS_REMUNERADAS"]}</td>
                <td>{contenido["MUJER_PERSONAS_REMUNERADAS"]}</td>
                <td>{contenido["TOTAL_PERSONAS_REMUNERADAS"]}</td>
            </tr>
            <tr>
                <td><b>Personas no remuneradas</b></td>
                <td>{contenido["HOMBRE_PERSONAS_NO_REMUNERADAS"]}</td>
                <td>{contenido["MUJER_PERSONAS_NO_REMUNERADAS"]}</td>
                <td>{contenido["TOTAL_PERSONAS_NO_REMUNERADAS"]}</td>
            </tr>
            <tr>
                <td><b>Personas no remuneradas</b></td>
                <td>{contenido["HOMBRE_PERSONAS_NO_REMUNERADAS"]}</td>
                <td>{contenido["MUJER_PERSONAS_NO_REMUNERADAS"]}</td>
                <td>{contenido["TOTAL_PERSONAS_NO_REMUNERADAS"]}</td>
            </tr>
            <tr>
                <td><b>Comisionistas y personal tercerizado</b></td>
                <td>{contenido["HOMBRE_PERSONAL_TERCERIZADO"]}</td>
                <td>{contenido["MUJER_PERSONAL_TERCERIZADO"]}</td>
                <td>{contenido["TOTAL_PERSONAL_TERCERIZADO"]}</td>
            </tr>
            <tr>
                <td><b>Sueldos y salarios</b></td>
                <td>{contenido["HOMBRE_SUELDOS"]}</td>
                <td>{contenido["MUJER_SUELDOS"]}</td>
                <td>{contenido["TOTAL_SUELDOS"]}</td>
            </tr>
            <tr>
                <td><b>Otras remuneraciones</b></td>
                <td>{contenido["HOMBRE_OTRAS_REMUNERACIONES"]}</td>
                <td>{contenido["MUJER_OTRAS_REMUNERACIONES"]}</td>
                <td>{contenido["TOTAL_OTRAS_REMUNERACIONES"]}</td>
            </tr>
            <tr>
                <td><b>Pago por indemnizacion o liquidacion al personal</b></td>
                <td>{contenido["HOMBRE_INDEMNIZACION"]}</td>
                <td>{contenido["MUJER_INDEMNIZACION"]}</td>
                <td>{contenido["TOTAL_INDEMNIZACION"]}</td>
            </tr>
        </table>
        </>
    )
}

export default TemplateMostrarTable
