import React from "react";
import styled from 'styled-components'


function App() {
    return (
        <main>
            <Formulario action="">
                <label htmlFor="">Usuario</label>
                <input type="text" placeholder="Usuario"></input>
                <p>Lorem ipsum dolor sit amet</p>
            </Formulario>
        </main>
    )
}

const Formulario = styled.form`
    background: #ccc
`

export default App;
