import { useState,useEffect } from "react"
import HeaderCenso from "../questions/access/HeaderCenso";
import PaginaCinco from "../questions/access/paginas/PaginaCinco";
import PaginaCuatro from "../questions/access/paginas/PaginaCuatro";
import PaginaDos from "../questions/access/paginas/PaginaDos";
import PaginaTres from "../questions/access/paginas/PaginaTres";
import PaginaUno from "../questions/access/paginas/PaginaUno";
import "./EditarCenso.css"

let initialStateHiddenInputs={
    CENSISTA_ID:true,RUC:true,
    NOMBRE_COMERCIAL:true,DIRECCION:true,COORD_X:true,
    COORD_Y:true,BARRIO:true,MANZANA:true,
    TELEFONO:true,CELULAR:true,CORREO:true,
    ACTIVIDAD_PRINCIPAL:true,PRODUCTO_COMERCIALIZADO:true,
    ANIO_INICIO:true,TIPO_EMPRESA:true,CONDICION_JURIDICA:true,
    PRESTAMO_FINANCIAMIENTO:true,LUGAR_CREDITO:true,CAUSA_NO_CREDITO:true,
    CUENTA_BANCARIA:true,MOTIVO_NO_CUENTA:true,OBSERVACION_NO_CUENTA:true
}
const EditarCenso = () => {
    //Definir estado
    const [estado,setEstado]=useState({});
    const [numeroPagina,setNumeroPagina]=useState(1)
    const [hiddenInputs,setHiddenInputs]=useState(initialStateHiddenInputs);
    const [inputsFaltantes, setInputsFaltantes] = useState({})
    const [valueToken,setValueToken] =useState({})
    const [messageLocation,setMessageLocation]=useState({})
    const [errorLocation,setErrorLocation]=useState({})
    useEffect(() => {
        const handleFetchToken= async()=>{
            try{
                let token=localStorage.getItem("token")
                let res=await fetch("http://localhost:9000/api/login/token",{
                    method:"POST",
                    headers:{"Content-type":"application/json"},
                    body:JSON.stringify({token})
                })
                let json=await res.json();
                let palabraEntera=json.decoded.ROL;
                let rolNuevo="";
                for (let i = 0; i < palabraEntera.length; i++) {
                    if(i===0){
                        rolNuevo+=palabraEntera[i].toUpperCase()
                    }else{
                        rolNuevo+=palabraEntera[i].toLowerCase()
                    }
                }
                let tokenProcesado={
                    id:json.decoded.ID,
                    ci:json.decoded.CI,
                    nombre:json.decoded.NOMBRE,
                    rol:rolNuevo
                }
                setValueToken(tokenProcesado)
                console.log(json)
            }catch(err){
                console.log(err)
            }
        }
        handleFetchToken()
    }, [])
    //Obtener estado cada que la URL se cambia a /editar
    useEffect(() => {
        let newState=JSON.parse(localStorage.getItem("object"));
        
        setEstado(newState)
    }, [])

    //Cambiar el estado cada que se escribe dentro de un input
    const handleValue=(e)=>{
        setEstado({
            ...estado,
            [e.target.name]:e.target.value
        })
    }
    //Obtener la ubicación
    const handleLocation=(e)=>{
        e.preventDefault();

        const successCallback=(position)=>{
            console.log(position)
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
    //Handle page
    const handlePage=(e,numero,movimiento)=>{
        e.preventDefault()
        if(movimiento==="suma"){
            setNumeroPagina(numero+1)
        }else{
            setNumeroPagina(numero-1)
        }
        window.scroll(0,0)
    }
    //Manejar el evento de salida
    const handleSalir=()=>{
        window.location.href="/";
        localStorage.removeItem("object")
    }
    //Enviar el formulario
    const sendForm=async(e)=>{
        try{
            e.preventDefault();
            const objetoErrores={}
            let numPregunta=1;
            let pseudoEstado={...estado};
            delete pseudoEstado["ID"]
            delete pseudoEstado["CENSISTA_ID"]
            delete pseudoEstado["GASTOS_TOTALES"];
            delete pseudoEstado["INGRESOS_TOTALES"];
            delete pseudoEstado["TOTAL_PERSONAS_REMUNERADAS"]
            delete pseudoEstado["TOTAL_PERSONAS_NO_REMUNERADAS"]
            delete pseudoEstado["TOTAL_PERSONAL_TERCERIZADO"]
            delete pseudoEstado["TOTAL_SUELDOS"]
            delete pseudoEstado["TOTAL_OTRAS_REMUNERACIONES"]
            delete pseudoEstado["TOTAL_INDEMNIZACION"]
            
            

            console.log(pseudoEstado)
            console.log(estado)
            //Validar si alguna de las preguntas no está vacía
            for (let key in pseudoEstado){
                if(!pseudoEstado[key]){
                    console.log(key)
                    if(key=="GASTOS_OTROS_NUMERO"){
                        continue;
                    }
                    if(key=="INGRESOS_OTROS_NUMERO"){
                        continue;
                    }

                    objetoErrores[numPregunta]=true;
                    if(pseudoEstado["PRESTAMO_FINANCIAMIENTO"]==1&&pseudoEstado["CAUSA_NO_CREDITO"]==null){
                        delete objetoErrores[16]
                    }else if(pseudoEstado["PRESTAMO_FINANCIAMIENTO"]==2&&pseudoEstado["LUGAR_CREDITO"]==null){
                        delete objetoErrores[15]
                    }
                    if(pseudoEstado["CUENTA_BANCARIA"]==1&&pseudoEstado["MOTIVO_NO_CUENTA"]==null){
                        delete objetoErrores[18];
                    }
                }
                if(key!=="COORD_X"&&key!=="COORD_Y"){
                    numPregunta++;
                }

            }
            //Validar si todas las preguntas dan "true"
            console.log(objetoErrores)
            let condicionalNoError=Object.values(objetoErrores).every(item=>item==false)
            //Si no existe ningun error....
            if(condicionalNoError){

                let res=await fetch(`http://localhost:9000/api/censo/${estado.ID}`,{
                method:"PUT",
                headers:{"Content-type":"application/json"},
                
                body:JSON.stringify({...pseudoEstado,
                    GASTOS_OTROS_NUMERO:pseudoEstado.GASTOS_OTROS_NUMERO||0,
                    INGRESOS_OTROS_NUMERO:pseudoEstado.INGRESOS_OTROS_NUMERO||0,
                    ID:estado.ID,
                    CENSISTA_ID:estado.CENSISTA_ID
                }),
            })
            let json=await res.json()
            console.log(json)
            window.location.href="/"
            }else{
                setInputsFaltantes(objetoErrores);
                console.log(objetoErrores)
            }
            //setEstado({});
        }catch(err){
            console.log(err)
        }
        
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

    return (
        <>
        {localStorage.getItem("object")?(
            <>
             <HeaderCenso handleSalir={handleSalir} valueToken={valueToken}/>
             <article className="main-cuestionario">
                 <form className="cuestionario-container">
                     {numeroPagina===1 && <PaginaUno  handleLocation={handleLocation} messageLocation={messageLocation} hiddenInputs={hiddenInputs} estado={estado} handleValue={handleValue} handlePage={handlePage}/>}
                     {numeroPagina===2 && <PaginaDos  hiddenInputs={hiddenInputs} estado={estado} handleValue={handleValue} handlePage={handlePage}/>}
                     {numeroPagina===3 && <PaginaTres hiddenInputs={hiddenInputs} estado={estado} handleValue={handleValue} handlePage={handlePage} />}
                     {numeroPagina===4 && <PaginaCuatro estado={estado} handleValue={handleValue} handlePage={handlePage} />}
                     {numeroPagina===5 && <PaginaCinco  estado={estado} handleValue={handleValue} handlePage={handlePage} errorLocation={errorLocation} inputsFaltantes={inputsFaltantes} sendForm={sendForm}/>}
                 
                 </form> 
             </article>
             </>
        ):(
            <div>
                <h1>Error 404</h1>
                <p>No tienes autorizacion para entrar a esta página, intenta hablar con el administrador o iniciar sesión para poder acceder</p>
            </div>
        )}
        </>
    )
}

export default EditarCenso
