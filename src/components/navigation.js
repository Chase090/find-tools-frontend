import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import Searchbox from "./searchbox";

const Navigation = () => {
  return (  
      <>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand>ToolsFind</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav 
                className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>

                    <Nav.Link href="#action1">Home</Nav.Link>
                
             
                    
                    <Nav.Link href="#">Marked</Nav.Link>

                </Nav>

                    <Searchbox/>

            </Navbar.Collapse>
        </Navbar>
  </>
    )
}


export default Navigation