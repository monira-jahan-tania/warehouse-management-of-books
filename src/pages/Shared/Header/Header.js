import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <nav>
            <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" >
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} height='55px' alt="" />
                        <span className='fs-3'>
                            <span className='text-danger'>B</span><span className='text-info'>oo</span><span className='text-warning'>k</span>s<span className='text-danger'>'</span> <span className='text-warning'>C</span><span className='text-info'>av</span><span className='text-danger'>e</span>
                        </span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav >
                            <Nav.Link href="home#items">Items</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignout}>SignOut</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;