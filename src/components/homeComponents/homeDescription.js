import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HomeDisplay = () => {
    return(
        <>
            
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                        <Card.Body>
                            <Card.Text>
                              Welcome! We got some tools ready for you!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    

                        <Link to="/tools">
                            <div className="d-grid gap-2"><Button variant="primary" size="lg">Get Started</Button> </div>
                        </Link>
                    
                   
                </Col>
            </Row>
        </>
    )
}