import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faglobe  } from '@fortawesome/free-solid-svg-icons/faGlobe'

function NavBar() {
    return (
        <Container>
            <img src="https://kuwaitmosafer.gov.kw/images/preload-logo.png" />
            <i>{faglobe}</i>
        </Container>
    )
}

export default NavBar

const Container = styled.nav`
    
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 50px;
    transition: all 350ms ease;
    background-color: #FFF;
    border-bottom: solid 1px rgba(0, 0, 0, 0.03);
    box-shadow: 0 4px 18px 0 rgb(0 0 0 / 8%);

    img {
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
    position: absolute;
    z-index: 99;
        
    }
}



`
