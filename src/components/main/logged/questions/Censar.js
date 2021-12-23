import {useState,useEffect} from "react"
import HeaderCenso from "./access/HeaderCenso"
import MainCenso from "./access/MainCenso"

const Censar = () => {
    const [valueToken,setValueToken] =useState({})
    const handleSalir=()=>{
        window.location.href="/"
    }
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
    return (
        <>  
            {localStorage.getItem("token")?(
                <>
                <HeaderCenso handleSalir={handleSalir} valueToken={valueToken}/>
                <MainCenso id={valueToken.id}/>
                </>
            ):(
                <>
                <div>
                    <h1>Error 404</h1>
                    <p>No tienes autorizacion para entrar a esta página, intenta hablar con el administrador o iniciar sesión para poder acceder</p>
                </div>
                </>
            )}
        </>
    )
}

export default Censar
