import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deletedTool } from "../../actions/ToolsActions";


const ToolCard = (props) => {
    // console.log(props)
    return(
        <div>
           <Card>
               <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <br/>
                        {props.details}
                    </Card.Text>
               </Card.Body>  
               ${props.price}
                <Button onClick={() => props.deletedTool(props.id)} variant="primary" size="sm">Rent!</Button>
           </Card>  
        </div>
    )
}

export default connect(null, {deletedTool})(ToolCard)