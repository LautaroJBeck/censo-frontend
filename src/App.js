import Login from "./components/login/Login";
import Home from "./components/main/Home";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Censar from "./components/main/logged/questions/Censar";
import AgregarUsuarios from "./components/main/logged/agregarUsuarios/AgregarUsuarios";
import EditarCenso from "./components/main/logged/editarCensos/EditarCenso";


function App() {

  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/censar" element={<Censar/>} />
        <Route path="/agregar" element={<AgregarUsuarios/>}/>
        <Route path="/editar" element={<EditarCenso />} />
        <Route path="*" element={<Navigate replace to="/"/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
