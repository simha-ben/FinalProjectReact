import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink activeClassName="active" className="nav-link" exact to="/about">about</NavLink>
                        <NavLink activeClassName="active" className="nav-link" exact to="/search">search</NavLink>
                        <NavLink activeClassName="active" className="nav-link" exact to="/allProduct">allProduct</NavLink>
                        <NavLink activeClassName="active" className="nav-link" exact to="/privateArea">privateArea</NavLink>
                        <NavLink activeClassName="active" className="nav-link" exact to="/addProgram">addProgram</NavLink>
                        <NavLink activeClassName="active" className="nav-link" exact to="/login">login</NavLink>
                        <NavLink activeClassName="active" className="nav-link" exact to="/">home</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}