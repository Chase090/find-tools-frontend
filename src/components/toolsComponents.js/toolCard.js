import React from "react";
import { Button } from "react-bootstrap";

const ToolCard = (props) => {
    console.log(props)
    return(
        <div>
            <h4>{props.name}</h4> 
            <p>{props.id}</p> 
            <p>{props.price}</p> 
            <p>{props.available}</p> 
            <p>{props.category_id}</p> 
            <p>{props.details}</p> 
            <p>{props.id}</p> 
            <p>{props.id}</p> 
            <p>{props.id}</p>
            <Button onClick={() => props.handleMarkedTool(props.id)} variant="primary" size="sm">Rent!</Button>
        </div>
    )
}

export default ToolCard