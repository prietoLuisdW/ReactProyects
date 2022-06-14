import React from "react";
import { Boton, ContenedorBotonCentrado, ContenedorTerminos, Formulario, Label, MensajeError, MensajeExito } from "./Elementos/Formularios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import ComInput from "./Components/Input";



function App() {
    return (
        <main>
            <Formulario action="">
                <ComInput />

                <ContenedorTerminos>
                    <Label>
                        <input type="checkbox" name="terminos" />
                        Acepto los Terminos y Condiciones
                    </Label>
                </ContenedorTerminos>
                {false && <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                        <b>Error:</b> Por favor rellenar el formulario correctamente</p>
                </MensajeError>}
                <ContenedorBotonCentrado>
                    <Boton type="submit"> Evniar</Boton>
                    <MensajeExito>El formualrio se envio exitosamente</MensajeExito>
                </ContenedorBotonCentrado>
            </Formulario>
        </main>
    )
}


export default App;
