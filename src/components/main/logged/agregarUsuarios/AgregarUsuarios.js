import { useEffect,useState } from "react"
import HeaderLogin from "../HeaderLogin"
import MainAgregar from "./MainAgregar"
const AgregarUsuarios = () => {
    const [valueToken,setValueToken]=useState({})
    const [rol, setRol] = useState("")
    
    //Enviar el token y procesarlo
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
                setRol(json.decoded.ROL)
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
            }catch(err){
                console.log(err)
            }
        }
        handleFetchToken()
    }, [])

    return (
    <>
    {(localStorage.getItem("token")&&rol==="ADMINISTRADOR")?(
    <>
    <HeaderLogin valueToken={valueToken} texto="Volver al inicio" handleLogout={()=>window.location.href="/"}/>
    <MainAgregar/>
    </>
    ):(<>
        <h1>Error 404</h1>
        <p>No tienes autorizacion para entrar a esta página, intenta hablar con el administrador o iniciar sesión para poder acceder</p>
    </>)}
    </>
    )
}

export default AgregarUsuarios
