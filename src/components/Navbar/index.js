import React from 'react'
import { Container } from './NavbarElements'
import {FiUser} from 'react-icons/all'

function Navbar() {
    return (
        <Container>
            <div></div>
            <div style={{display: 'flex', alignItems: 'center', marginRight: '.6rem', color: '#fff'}}>
                <FiUser style={{fontSize: '20px', marginRight: '.5rem'}}/>
                <span style={{fontSize: '1rem', marginTop: '.2rem', fontWeight: 'bolder'}}>John Doe</span>
            </div>
        </Container>
    )
}

export default Navbar
