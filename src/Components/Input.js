import React from "react";
import {Input, GrupoInput, IconoValidacion, Label, LeyendaError} from '../Elementos/Formularios'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const ComInput = ({tipo, label, placeholder, name, leyendaError, expresionRegular}) => {
    return(

        <div>
            <Label htmlFor={name}>{label}</Label>
            <GrupoInput>
                <Input type={tipo} placeholder={placeholder} id={name}></Input>
                <IconoValidacion icon={faCheckCircle}/>
            </GrupoInput>
            <LeyendaError>{leyendaError}</LeyendaError>
        </div>
    )
}

export default ComInput;