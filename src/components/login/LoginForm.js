import "./LoginForm.css"
import {useState} from "react"
const LoginForm = () => {

    const [values,setValues]=useState({})
    const [error,setError]=useState({})
    const handleValue=(e)=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }  

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{

            let res=await fetch("http://localhost:9000/api/login",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(values)
            })
            let json=await res.json();
            if(json.error){
                setError(json)
            }else if(json.token){
                localStorage.setItem("token",json.token);
                window.location.href="/"
            }
            

        }catch(err){
            console.log(err)
        }
    }

    return (
        <article className="login_form-container">
            <div>
                <h4>Iniciar sesión</h4>
                <form className="login-form">
                    <span>Número de CI</span>
                    <input type="text" 
                    name="ci"
                    onChange={(e)=>handleValue(e)}
                    value={values.ci}
                    />
                    <span>Contraseña</span>
                    <input 
                    type="password" 
                    name="password" 
                    value={values.password}
                    onChange={(e)=>handleValue(e)} 
                    />
                    <section>
                        <button onClick={(e)=>handleSubmit(e)}>Continuar</button>
                    </section>
                    <nav>
                        <span>{error.msg}</span>
                    </nav>
                </form>
            </div>
        </article>
    )
}

export default LoginForm
