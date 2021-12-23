import HeaderLogin from "./HeaderLogin"
import {useState,useEffect} from "react"
import MainLogin from "./MainLogin"
const HomeLogged = () => {

    const [valueToken,setValueToken]=useState({})
    const [negociosCensados,setNegociosCensados]=useState([])
    
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
                
            }
        }
        handleFetchToken()
    }, [])
    //Recibir los datos de los censados
    useEffect(()=>{
        const handleFetchCenso=async()=>{
            try{
                if(valueToken.id){
                    let res=await fetch(`http://localhost:9000/api/censo/${valueToken.id}`)
                    let json=await res.json()
                    setNegociosCensados(json)
                }
            }catch(err){
                
            }  
        }
        handleFetchCenso()
    },[valueToken])

    //Funciones 
    const handleLogout=()=>{
        localStorage.removeItem("token");
        window.location.reload()
    }
    return (
        <>
        <HeaderLogin valueToken={valueToken} handleLogout={handleLogout}/>
        <MainLogin negociosCensados={negociosCensados} rol={valueToken.rol}/>
        </>
    )
}

export default HomeLogged
