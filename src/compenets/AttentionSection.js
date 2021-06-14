import React from 'react'
import styled from 'styled-components'

function AttentionSection() {
    return (
        <Container>
            <p>Your Official gateway to Kuwait Int. Airport passenger services</p>
        </Container>
    )
}

export default AttentionSection

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

    p {
        font-size:  20px;
        font-weight: bold;
        text-align: center;
    }
`
