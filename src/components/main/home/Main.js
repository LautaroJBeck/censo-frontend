import "./Main.css"
import list from "../../../media/notes.png"
import computer from "../../../media/computer.png"

const Main = () => {
    return (
        <main>
            <div className="main-container">
                <section id="que-es" className="main-section">
                    <div className="main-text-container">
                        <h3>¿Para que sirve el censo económico de Concepción?</h3>                   
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero incidunt assumenda non ratione doloremque sint optio laudantium sequi et! Nam dignissimos, animi quidem repellendus quis numquam alias eos minus!</p>
                    </div>
                    <div className="main-img-container">
                        <img src={list} alt=""/>
                    </div>
                </section>
                <section id="quienes" className="main-section-dos">
                    <div className="main-img-container">
                        <img src={computer} alt=""/>
                    </div>
                    <div className="main-text-container">
                        <h3>¿Quienes pueden ser censistas?</h3>                   
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero incidunt assumenda non ratione doloremque sint optio laudantium sequi et! Nam dignissimos, animi quidem repellendus quis numquam alias eos minus!</p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Main
