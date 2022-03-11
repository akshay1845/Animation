import React from 'react'
import './header.scss'
import {Navbar, Nav, Container} from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand><h1 className='logo1'>App<span className='logo2'>Web</span></h1></Navbar.Brand>
                    <Nav className="mx-auto" className='list'>
                        <Nav.Link >ABOUT</Nav.Link>
                        <Nav.Link>RENTAILS</Nav.Link>
                        <Nav.Link >BOOK</Nav.Link>
                        <Nav.Link >CONTACT</Nav.Link>
                        <Nav.Link >SERVICES</Nav.Link>
                        <Nav.Link ><span className='mx-auto'>GET IN TOUCH</span></Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header