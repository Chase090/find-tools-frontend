import React, {useState} from "react";
import { Modal, Card, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { deletedTool } from "../../actions/ToolsActions";



const ToolCard = (props) => {
    const [show, setShow] = useState(false);
    const [showMore, setShowMore] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <div>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Img variant="top" src={props.img_url} />
                            <Card.Title>{props.name}</Card.Title>
                                <Card.Text>
                                    <br/>
                                    {showMore ? props.details : `${props.details.substring(0, 75)}`}
                                    <span 
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "...show more"}</span>
                                </Card.Text>
                        </Card.Body>  
                            ${props.price} 
                            <Button onClick={handleShow} variant="primary" size="sm">Rent!
                            </Button>
                   
                    </Card>
                </Col>
            </Row>
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
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button onClick={() => {props.handleRentButton(props.id); handleClose();}} variant="primary">Proceed</Button>
                        </Modal.Footer>
                    </Modal>
                   
            
             <br></br>
        </div>
    )
}

export default connect(null, {deletedTool})(ToolCard)

