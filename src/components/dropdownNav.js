import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


export const DropdownNav = () => {
    return(
        <div className="dropdown-nav">
            <NavDropdown id="basic-nav-dropdown">
                
                <NavDropdown.Item as={Link} to='/tools/new'>Create</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Rented'>Rented</NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to='/about'>About</NavDropdown.Item>

            </NavDropdown>
        </div>
    )
}