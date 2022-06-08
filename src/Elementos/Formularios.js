import styled from 'styled-components'

const colores = {
    borde: "#0075ff",
    error: "#bb2929",
    exito: "#1ed12d"
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media(max-widht: 800px){
        grid-template-columns: 1fr;
    }

`;


export {Formulario}