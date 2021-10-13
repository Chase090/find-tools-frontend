import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DropdownNav } from "./dropdownNav";


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

                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/tools'>Tools</Nav.Link>
                        <DropdownNav />

                </Nav>

                  

            </Navbar.Collapse>
        </Navbar>
  </>
    )
}


export default Navigation