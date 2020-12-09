import React from "react";
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Header() {
  return (
        
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Portfolio</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Bio">Bio</Nav.Link>
          <Nav.Link href="/Job">Jobs</Nav.Link>
          <Nav.Link href="/Education">Education</Nav.Link>
          <Nav.Link href="/Project">Projects</Nav.Link>
          <Nav.Link href="/Skill">Skills</Nav.Link>
        </Nav>
      </Navbar>
      
     
   


  );
}

export default Header;