import React from "react";
import { Formulario, GrupoInput, IconoValidacion, Input, Label, LeyendaError } from "./Elementos/Formularios";

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'




function App() {
    return (
        <main>
            <Formulario action="">
                <div>
                    <Label htmlFor="">Usuario</Label>
                    <GrupoInput>
                        <Input type="text" placeholder="Usuario"></Input>
                        <IconoValidacion icon={faCheckCircle}/>
                    </GrupoInput>
                    <LeyendaError>Lorem ipsum dolor sit amet</LeyendaError>
                </div>
            </Formulario>
        </main>
    )
}


export default App;
