import React from 'react';
import logo from '../images/loogo.jpg'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='row  d-flex'>
                    <Nav className="mr-auto justify-content-end align-items-center">
                        
                        <NavLink activeClassName="active" className="nav-link" exact to="/about">אודות</NavLink>
                        <NavLink activeClassName="active" className="nav-link" exact to="/search">חיפוש</NavLink>
                        <NavLink activeClassName="active" className="nav-link" exact to="/allProduct">כל התוכניות</NavLink>
                        <NavLink activeClassName="active" className="nav-link" exact to="/privateArea">אזור אישי</NavLink>
                        <NavLink activeClassName="active" className="nav-link" exact to="/addProgram">הוספת תוכנית</NavLink>
                        <NavLink activeClassName="active" className="nav-link" exact to="/login">התחברות</NavLink>
                        <NavLink activeClassName="active" className="nav-link" exact to="/">דף הבית</NavLink>
                        <img src={logo} style={{width:'10%',marginLeft:'280px'}} ></img>                 
                               {/* <NavLink activeClassName="active" className="nav-link"  exact to=""><img style={{width:'20%',marginRight:'' ,height:''}} src={logo}></img></NavLink> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* <img src={logo}></img> */}
        </>
    );
}