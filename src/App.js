import React from "react";
import { Formulario } from "./Elementos/Formularios";




function App() {
    return (
        <main>
            <Formulario action="">
                <div>
                    <label htmlFor="">Usuario</label>
                    <input type="text" placeholder="Usuario"></input>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                    <label htmlFor="">Usuario</label>
                    <input type="text" placeholder="Usuario"></input>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </Formulario>
        </main>
    )
}


export default App;
