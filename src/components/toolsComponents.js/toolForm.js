import React from "react";
import { Button, Form, FloatingLabel, Container, Row, Col } from "react-bootstrap";


class ToolsForm extends React.Component{

    





    render(){
        return(

            <div className="tool-form">
                <Container>
                    <br></br>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicToolName">                  
                                    <FloatingLabel label="Tool Name" className="mb-3">
                                        <Form.Control type="email" placeholder="Tool Name" />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPrice">
                                    <FloatingLabel label="Price">
                                        <Form.Control 
                                        placeholder="Price" 
                                        type="number" 
                                        min="0.00" 
                                        max="10000.00" 
                                        step="1.00" />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                                
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <FloatingLabel label="Details">
                                        <Form.Control as="textarea" rows={3} placeholder="Details" />
                                    </FloatingLabel>
                                </Form.Group>
                            <Col>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Col>
                        </Row>  
                    </Form>
                </Container>

            </div>
            
        )
    }
}

export default ToolsForm