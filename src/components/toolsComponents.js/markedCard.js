import React from "react";

import { Button } from "react-bootstrap";

const MarkedCard = (props) => {
    console.log(props)
    return(
        <div>
        <h1>this is marked</h1>
            <h4>{props.name}</h4> 
            <p>{props.id}</p> 
            <p>{props.price}</p> 
            <p>{props.available}</p> 
            <p>{props.category_id}</p> 
            <p>{props.details}</p> 
            <p>{props.id}</p> 
            <p>{props.id}</p> 
            <p>{props.id}</p>
            <Button variant="primary" size="sm">Rent!</Button>
        </div>
    )
}

export default MarkedCard