import "./MainCenso.css"
import PaginaUno from "./paginas/PaginaUno"
import { useEffect, useState } from "react"
import PaginaDos from "./paginas/PaginaDos"
import PaginaTres from "./paginas/PaginaTres"
import PaginaCuatro from "./paginas/PaginaCuatro"
import PaginaCinco from "./paginas/PaginaCinco"
const initialStateEstado={
    CENSISTA_ID:null,NOMBRE_COMERCIAL:null,
    RUC:null,DIRECCION:null,
    COORD_X:null,COORD_Y:null,
    BARRIO:null,MANZANA:null,
    TELEFONO:null,CELULAR:null,CORREO:null,
    ACTIVIDAD_PRINCIPAL:null,PRODUCTO_COMERCIALIZADO:null,
    ANIO_INICIO:null,TIPO_EMPRESA:null,CONDICION_JURIDICA:null,
    PRESTAMO_FINANCIAMIENTO:null,LUGAR_CREDITO:null,CAUSA_NO_CREDITO:null,
    CUENTA_BANCARIA:null,MOTIVO_NO_CUENTA:null,
    //Sección de gastos
    GASTOS_MATERIAS_PRIMAS:null,GASTOS_COMPRA_ENVASES:null,GASTOS_MERCADERIAS_REVENTA:null,
    GASTOS_MATERIALES_PRESTACION:null,GASTOS_SUBCONTRATACION:null,GASTOS_PAGO_SUMINISTRO:null,
    GASTOS_PAGO_COMISIONES:null,GASTOS_PAGO_AGUA:null,GASTOS_COMPRA_COMBUSTIBLE:null,GASTOS_CONSUMO_ELECTRICIDAD:null,
    GASTOS_REPARACIONES:null,GASTOS_ALQUILER_MAQUINAS:null,GASTOS_ALQUILER_EDIFICIOS:null,GASTOS_ALQUILER_TERRENO:null,
    GASTOS_SERVICIOS_COMUNICACION:null,GASTOS_TRANSPORTE_CARGA:null,GASTOS_OTROS_TITULO:null,GASTOS_OTROS_NUMERO:null,
    //Sección de ingresos
    INGRESOS_PRODUCTOS_ELABORADOS:null,INGRESOS_PRESTACION_SERVICIOS:null,INGRESOS_REVENTA_MERCADERIAS:null,
    INGRESOS_SUBCONTRATACION:null,INGRESOS_ALQUILER_MAQUINAS:null,INGRESOS_OTROS_TITULO:null,
    INGRESOS_OTROS_NUMERO:null,INTERESES_DEPOSITOS:null,
    //Sección IVA
    IVA_CREDITO_FISCAL:null,IVA_DEBITO_FISCAL:null,IMPUESTO_RENTA:null,
    //Sección pagos y remuneraciones
    //Hombres
    HOMBRE_PERSONAS_REMUNERADAS:null,HOMBRE_PERSONAS_NO_REMUNERADAS:null,HOMBRE_PERSONAL_TERCERIZADO:null,
    HOMBRE_SUELDOS:null,HOMBRE_OTRAS_REMUNERACIONES:null,HOMBRE_INDEMNIZACION:null,
    //Mujeres
    MUJER_PERSONAS_REMUNERADAS:null,MUJER_PERSONAS_NO_REMUNERADAS:null,MUJER_PERSONAL_TERCERIZADO:null,
    MUJER_SUELDOS:null,MUJER_OTRAS_REMUNERACIONES:null,MUJER_INDEMNIZACION:null
}
const initialStateHiddenInputs={
    CENSISTA_ID:true,RUC:true,
    NOMBRE_COMERCIAL:true,DIRECCION:true,COORD_X:true,
    COORD_Y:true,BARRIO:true,MANZANA:true,
    TELEFONO:true,CELULAR:true,CORREO:true,
    ACTIVIDAD_PRINCIPAL:true,PRODUCTO_COMERCIALIZADO:true,
    ANIO_INICIO:true,TIPO_EMPRESA:true,CONDICION_JURIDICA:true,
    PRESTAMO_FINANCIAMIENTO:true,LUGAR_CREDITO:true,CAUSA_NO_CREDITO:true,
    CUENTA_BANCARIA:true,MOTIVO_NO_CUENTA:true,OBSERVACION_NO_CUENTA:true
}
const MainCenso = ({id}) => {
    const [numeroPagina, setNumeroPagina] = useState(1);
    const [estado, setEstado] = useState(initialStateEstado)
    const [hiddenInputs, setHiddenInputs] = useState(initialStateHiddenInputs)
    const [inputsFaltantes, setInputsFaltantes] = useState({})
    const [messageLocation,setMessageLocation]=useState({})
    const [errorLocation,setErrorLocation]=useState({})

    const handlePage=(e,numero,movimiento)=>{
        e.preventDefault()
        if(movimiento==="suma"){
            setNumeroPagina(numero+1)
        }else{
            setNumeroPagina(numero-1)
        }
        window.scroll(0,0)
    }

    const handleValue=(e)=>{
        setEstado({
            ...estado,
            [e.target.name]:e.target.value
        })
    }
    const handleLocation=(e)=>{
        e.preventDefault();

        const successCallback=(position)=>{
            
            setEstado({
                ...estado,
                COORD_Y:position.coords.latitude,
                COORD_X:position.coords.longitude
            })
            setMessageLocation({
                success:true,
                message:"Ubicación obtenida exitosamente"
            })
        }
        const errorCallback=(error)=>{
            setMessageLocation({
                error:true,
                message:"Ocurrió un error obteniendo la ubicación"
            })
        }

        navigator.geolocation.getCurrentPosition(successCallback,errorCallback)
    }
    useEffect(() => {
        let pseudoHidden=hiddenInputs;
        //True es cada que el elemento se tiene que mostrar
        if(estado.PRESTAMO_FINANCIAMIENTO==1){
            pseudoHidden={
                ...pseudoHidden,
                LUGAR_CREDITO:true,
                CAUSA_NO_CREDITO:false
            }
            setEstado({
                ...estado,
                CAUSA_NO_CREDITO:null
            })
        }else if(estado.PRESTAMO_FINANCIAMIENTO==2){
            pseudoHidden={
                ...pseudoHidden,
                LUGAR_CREDITO:false,
                CAUSA_NO_CREDITO:true
            }
            setEstado({
                ...estado,
                LUGAR_CREDITO:null
            })
        }

        if(estado.CUENTA_BANCARIA==1){
            pseudoHidden={
                ...pseudoHidden,
                MOTIVO_NO_CUENTA:false
            }
            setEstado({
                ...estado,
                MOTIVO_NO_CUENTA:null
            })
        }else if(estado.CUENTA_BANCARIA==2){
            pseudoHidden={
                ...pseudoHidden,
                MOTIVO_NO_CUENTA:true
            }
        }
        setHiddenInputs(pseudoHidden)

    }, [estado.PRESTAMO_FINANCIAMIENTO,estado.CUENTA_BANCARIA])

    const sendForm=async(e)=>{
        try{
            e.preventDefault();
            const objetoErrores={}
            let numPregunta=1;
            
            //Validar si alguna de las preguntas no está vacía
            for (let key in estado){
                if(!estado[key]){
                    
                    if(key=="GASTOS_OTROS_NUMERO"){
                        continue;
                    }
                    if(key="COORD_X"){
                        continue;
                    }
                    if(key="COORD_Y"){
                        continue;
                    }
                    if(key=="INGRESOS_OTROS_NUMERO"){
                        continue;
                    }
                    if(key=="CENSISTA_ID"){
                        continue;
                    }
                    objetoErrores[numPregunta]=true;
                    if(estado["PRESTAMO_FINANCIAMIENTO"]==1&&estado["CAUSA_NO_CREDITO"]==null){
                        delete objetoErrores[16]
                    }else if(estado["PRESTAMO_FINANCIAMIENTO"]==2&&estado["LUGAR_CREDITO"]==null){
                        delete objetoErrores[15]
                    }
                    if(estado["CUENTA_BANCARIA"]==1&&estado["MOTIVO_NO_CUENTA"]==null){
                        delete objetoErrores[18];
                    }
                    if(!estado["GASTOS_OTROS_TITULO"]){
                        delete objetoErrores[35];
                    }
                    if(!estado["INGRESOS_OTROS_TITULO"]){
                        delete objetoErrores[41];
                    }
                }
                numPregunta++;
            }
            //Validar si todas las preguntas dan "true"
            
            let condicionalNoError=Object.values(objetoErrores).every(item=>item==false)
            //Si no existe ningun error....
            if(estado.COORD_X&&estado.COORD_Y){
                setErrorLocation({error:false})

            }else{
                setErrorLocation({error:true})
                condicionalNoError=false;
            }
            if(condicionalNoError){
                
                let res=await fetch("http://localhost:9000/api/censo",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                
                body:JSON.stringify({...estado,
                    CENSISTA_ID:id
                }),
            })
            let json=await res.json()
            
            setEstado(initialStateEstado);
            window.location.href="/"
            }else{
                setInputsFaltantes(objetoErrores);
                
            }
            
        }catch(err){
            console.log(err)
        }
        
    }
    return (
        <article className="main-cuestionario">
            <form className="cuestionario-container">
                {numeroPagina===1 && <PaginaUno  handleLocation={handleLocation} messageLocation={messageLocation} hiddenInputs={hiddenInputs} estado={estado} handleValue={handleValue} handlePage={handlePage}/>}
                {numeroPagina===2 && <PaginaDos  hiddenInputs={hiddenInputs} estado={estado} handleValue={handleValue} handlePage={handlePage}/>}
                {numeroPagina===3 && <PaginaTres hiddenInputs={hiddenInputs} estado={estado} handleValue={handleValue} handlePage={handlePage} />}
                {numeroPagina===4 && <PaginaCuatro estado={estado} handleValue={handleValue} handlePage={handlePage} />}
                {numeroPagina===5 && <PaginaCinco  estado={estado} handleValue={handleValue} handlePage={handlePage} errorLocation={errorLocation} inputsFaltantes={inputsFaltantes} sendForm={sendForm}/>}
            
            </form> 
        </article>
    )
}

export default MainCenso
