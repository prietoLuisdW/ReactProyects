import React, {useState} from "react";
import { Boton, ContenedorBotonCentrado, ContenedorTerminos, Formulario, Label, MensajeError, MensajeExito } from "./Elementos/Formularios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import ComInput from "./Components/Input";

function App() {

    const [usuario, setUsuario]=useState({campo: '', valido: null})
    const [nombre, setNombre]=useState({campo: '', valido: null})
    const [password1, setPassword1]=useState({campo: '', valido: null})
    const [password2, setPassword2]=useState({campo: '', valido: null})
    const [email, setEmail]=useState({campo: '', valido: null})
    const [telefono, setTelefono]=useState({campo: '', valido: null})

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }
    
    return (
        <main>
            <Formulario action="">
                <ComInput
                    estado={usuario}
                    cambiarEstado={setUsuario}
                    tipo="text"
                    label="Usuario"
                    placeholder="lhprieto91"
                    name="usuario"
                    leyendaError="El suario debe ser de 8 a 16 caracteres, debe conterner letras y numeros, sin espacios"
                    expresionRegular={expresiones.usuario}
                />
                {/* <ComInput
                    tipo="password"
                    label="Password"
                    placeholder="Contraseña"
                    name="password"
                    leyendaError="Contraseña incorrecta"
                    expresionRegular=""
                /> */}

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
