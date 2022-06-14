import React from "react";
import { Boton, ContenedorBotonCentrado, ContenedorTerminos, Formulario, GrupoInput, IconoValidacion, Input, Label, LeyendaError, MensajeError, MensajeExito } from "./Elementos/Formularios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'




function App() {
    return (
        <main>
            <Formulario action="">
                <div>
                    <Label htmlFor="nombre">Usuario</Label>
                    <GrupoInput>
                        <Input type="text" placeholder="Usuario" id="nombre"></Input>
                        <IconoValidacion icon={faCheckCircle}/>
                    </GrupoInput>
                    <LeyendaError>Lorem ipsum dolor sit amet</LeyendaError>
                </div>
                <ContenedorTerminos>
                    <Label>
                        <input type="checkbox" name="terminos" />
                        Acepto los Terminos y Condiciones
                    </Label>
                </ContenedorTerminos>
                <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                        <b>Error:</b> Por favor rellenar el formulario correctamente</p>
                </MensajeError>
                <ContenedorBotonCentrado>
                    <Boton type="submit"> Evniar</Boton>
                    <MensajeExito>El formualrio se envio exitosamente</MensajeExito>
                </ContenedorBotonCentrado>
            </Formulario>
        </main>
    )
}


export default App;
