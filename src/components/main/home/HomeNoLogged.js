import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const MainNoLogged = () => {
    const handleRedirect=()=>{
        window.location.href="/login"
    }
    return (
        <>
        <Header redirectFunction={handleRedirect} texto={"Iniciar sesión"}/>
        <Main/>
        <Footer/>
        </>
    )
}

export default MainNoLogged
