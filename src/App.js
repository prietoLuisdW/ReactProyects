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
    const [terminos, setTerminos]=useState(false)
    const [formularioValido, setFormularioValido]=useState(null)

    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }
    
    const validarPassword2 = () => {
        if(password1.campo.length>0){
            if(password1.campo !== password2.campo){
                setPassword2((prevState)=>{
                    return {...prevState, valido: 'false'}
                })
            } else {
                setPassword2((prevState)=>{
                    return {...prevState, valido: 'true'}
                })
            }
        }
    }

    const onChangeTerminos = (e) => {
        setTerminos(e.target.checked)

    }

    function onSubmit (e){
        e.preventDefault()

        if(
            usuario.valido === 'true' && 
            nombre.valido ==='true' &&
            password1.valido ==='true' &&
            password2.valido ==='true' &&
            email.valido ==='true' &&
            terminos
            ){
                setFormularioValido(true)
                setUsuario({campo: '', valido: null})
                setNombre({campo: '', valido: null})
                setPassword1({campo: '', valido: null})
                setPassword2({campo: '', valido: null})
                setEmail({campo: '', valido: null})
                setTelefono({campo: '', valido: null})
                setTerminos(false)
        } else {
            setFormularioValido(false)
        }
    }

    return (
        <main>
            <Formulario action="" onSubmit={onSubmit}>
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
                <ComInput
                    estado={nombre}
                    cambiarEstado={setNombre}
                    tipo="nombre"
                    label="Nombre"
                    placeholder="Jean Doe"
                    name="nombre"
                    leyendaError="No usar caracteres especiales"
                    expresionRegular={expresiones.nombre}
                />
                <ComInput
                    estado={password1}
                    cambiarEstado={setPassword1}
                    tipo="password"
                    label="Contraseña"
                    placeholder="*******"
                    name="password1"
                    leyendaError="Debe contener mas de 3 caracteres"
                    expresionRegular={expresiones.password}
                />
                <ComInput
                    estado={password2}
                    cambiarEstado={setPassword2}
                    tipo="password"
                    label="Contraseña"
                    placeholder="*******"
                    name="password2"
                    leyendaError="Ambas contraseñas deben ser iguales"
                    funcion={validarPassword2}
                />
                <ComInput
                    estado={telefono}
                    cambiarEstado={setTelefono}
                    tipo="text"
                    label="Telefono"
                    placeholder="3125595767"
                    name="telefono"
                    leyendaError="Debe contener de 7 a 12 numeros"
                    expresionRegular={expresiones.telefono}
                />
                <ComInput
                    estado={email}
                    cambiarEstado={setEmail}
                    tipo="email"
                    label="E-Mail"
                    placeholder="tucorreo@correo.con"
                    name="email"
                    leyendaError="Debe contener la estrucutra de un correo"
                    expresionRegular={expresiones.email}
                />
                

                <ContenedorTerminos>
                    <Label>
                        <input 
                        type="checkbox" 
                        name="terminos" 
                        id="terminos" 
                        checked={terminos}
                        onChange={onChangeTerminos}
                        />
                        Acepto los Terminos y Condiciones
                    </Label>
                </ContenedorTerminos>
                {formularioValido ===false && <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                        <b>Error:</b> Por favor rellenar el formulario correctamente</p>
                </MensajeError>}
                <ContenedorBotonCentrado>
                    <Boton type="submit"> Enviar</Boton>
                    {formularioValido === true && <MensajeExito>El formualrio se envio exitosamente</MensajeExito>}
                </ContenedorBotonCentrado>
            </Formulario>
        </main>
    )
}


export default App;
