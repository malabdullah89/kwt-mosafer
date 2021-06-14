import React from 'react'
import styled from 'styled-components'

function Signin() {
    return (
        <Container>
            <button>Sign In</button>
        </Container>
    )
}

export default Signin
const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.75rem;
    align-items: center;
    padding: 20px;
    

    button {
        width: 200px;
        border: none;
        border-radius: 10px;
        background-color: #4A89DC;
        color: white;
        padding: 10px;

        
        
    }
`
