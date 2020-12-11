import React from "react";
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";

function Header() {
  return (
        
      <ReactBootStrap.Navbar bg="primary" variant="dark">
        <ReactBootStrap.Navbar.Brand href="/">Portfolio</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Nav  className="mr-auto">
          <Link to ="/Bio">
          <ReactBootStrap.Nav.Link href= "#Bio">Bio</ReactBootStrap.Nav.Link>
          </Link>
          <Link to ="/Job">
          <ReactBootStrap.Nav.Link href ="#Job">Job </ReactBootStrap.Nav.Link>
          </Link>
          <Link to ="/Education">
          <ReactBootStrap.Nav.Link href="#Education">Education</ReactBootStrap.Nav.Link>
          </Link>
          <Link to ="/Project">
          <ReactBootStrap.Nav.Link href="#Project">Projects</ReactBootStrap.Nav.Link>
          </Link>
          <Link to ="/Skill">
          <ReactBootStrap.Nav.Link href="#Skill">Skills</ReactBootStrap.Nav.Link>
          </Link>
        </ReactBootStrap.Nav >
        <ReactBootStrap.Nav >
          <ReactBootStrap.Nav.Link href="/SignIn">SignIn</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav >
      </ReactBootStrap.Navbar>

      
    
      
     
   


  );
}

export default Header;