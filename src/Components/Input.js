import React from "react";
import {Input, GrupoInput, IconoValidacion, Label, LeyendaError} from '../Elementos/Formularios'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const ComInput = () => {
    return(

        <div>
            <Label htmlFor="nombre">Usuario</Label>
            <GrupoInput>
                <Input type="text" placeholder="Usuario" id="nombre"></Input>
                <IconoValidacion icon={faCheckCircle}/>
            </GrupoInput>
            <LeyendaError>Lorem ipsum dolor sit amet</LeyendaError>
        </div>
    )
}

export default ComInput;