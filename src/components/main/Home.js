
import HomeNoLogged from "./home/HomeNoLogged"

import HomeLogged from "./logged/HomeLogged"


const Home = () => {

    return (
        <>{localStorage.getItem("token")?(
            <>
                <HomeLogged token={localStorage.getItem("token")}/>
            </>
        ):(
            <>  
                <HomeNoLogged/>
            </>
        )}
        </>
    )
}

export default Home
