import React from "react";
import { Modal, Card, Button, Row, Col } from "react-bootstrap";


export const ToolModal = (props) => {
    return(
        
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
            <Button onClick={() => {props.deletedTool(props.id); handleClose();}} variant="primary">Proceed</Button>
        </Modal.Footer>
    </Modal>
    )
}