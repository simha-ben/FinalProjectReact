import React from 'react';
import logo from '../images/logo_b.jpg'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'bootstrap';



function mapStateToProps(state) {
    return {
        programs: state.ProgramReducer.programs,
        id: state.UserReducer.id,
    };
}
export default connect(mapStateToProps)
    (function NavBar(props) {
       
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" >

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto justify-content-start align-items-center" style={{ fontSize: '20px' }}>

                            <img src={logo} style={{ width: "10%", marginLeft: '280px' }}></img>  {/* , marginLeft: '280px' */}

                            <NavLink activeClassName="active" className="nav-link" exact to="/">דף הבית</NavLink>
                            <NavLink activeClassName="active" className="nav-link" exact to="/about">אודות</NavLink>
                            <NavLink activeClassName="active" className="nav-link" exact to="/allProduct">כל התוכניות</NavLink>
                            <NavLink activeClassName="active" className="nav-link" exact to="/search">חיפוש</NavLink>
                            <NavLink activeClassName="active" className="nav-link" exact to="/addProgram">הוספת תוכנית</NavLink>
                            <NavLink activeClassName="active" className="nav-link" exact to="/privateArea">אזור אישי</NavLink>
                            {/* <NavLink activeClassName="active" className="nav-link" exact to="/login">התחברות</NavLink> */}
                           
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </>
        );
    })