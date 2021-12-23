import "./MainAgregar.css"
import {useState} from "react"
let initialState={
    ci:"",
    nombre:"",
    password:"",
    rol:""
}
const MainAgregar = () => {

    const [data,setData] = useState(initialState)
    const [messages, setMessages] = useState({})
    const sendData=async(e)=>{
        e.preventDefault()
        let res=await fetch("http://localhost:9000/api/admin",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data)
        })
        let json=await res.json();
        console.log(json)
        if(json.errors){
            setMessages({msg:json.errors[0].msg,success:false});
        }
        if(json.success){
            setMessages({msg:"El usuario ha sido agregado exitosamente",success:true})
            setData(initialState)
        }
        let $inputs=document.getElementsByClassName("agregarRol");
        for(let i=0;i<$inputs.length;i++){
            $inputs[i].checked=false;
        }
    }
    const handleValue=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })

    }
    return (
        <main>
            <article className="agregar_form-container">
            <div>
                <h4>Agregar usuario</h4>
                <form className="agregar-form">
                    <span>Número de CI</span>
                    <input 
                    type="text"
                    name="ci"
                    value={data.ci} 
                    onChange={(e)=>handleValue(e)}
                    />
                    <span>Nombre</span>
                    <input 
                    type="text" 
                    name="nombre" 
                    value={data.nombre} 
                    onChange={(e)=>handleValue(e)}
                    />
                    <span>Contraseña</span>
                    <input 
                    type="text" 
                    name="password" 
                    value={data.password} 
                    onChange={(e)=>handleValue(e)}
                    />
                    <span>Rol</span>
                    <nav>
                        <input className="agregarRol" id="rol" name="rol" value="CENSISTA" onChange={(e)=>handleValue(e)} type="radio" />
                        <span>Censista</span>
                    </nav>
                    <nav>
                        <input className="agregarRol" id="rol" name="rol" value="SUPERVISOR" onChange={(e)=>handleValue(e)} type="radio" />
                        <span>Supervisor</span>
                    </nav>
                    <section className="agregar_button-container">
                        <button onClick={(e)=>sendData(e)}>Continuar</button>
                    </section>
                    <section className="agregar_message-container">
                        <span style={messages.success?{color:"#56BB54"}:{ color:"#DD2B1C"}}>{messages.msg}</span>
                    </section>

                </form>
            </div>
        </article>
        </main>
    )
}

export default MainAgregar
