import React, {useState} from "react";
import { Modal, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deletedTool } from "../../actions/ToolsActions";


const ToolCard = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                <Button onClick={handleShow} variant="primary" size="sm">Rent!</Button>

                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Rent Out</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure?
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={() => {props.deletedTool(props.id); handleClose();}} variant="primary">Proceed</Button>
                    </Modal.Footer>
                </Modal>
           </Card>  
        </div>
    )
}

export default connect(null, {deletedTool})(ToolCard)

