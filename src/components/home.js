import React from "react";
import {Container, Image, Row, Col} from "react-bootstrap";

const Home = () => {
    return(
        <div className='homepage'>
            <Container>
            <Image src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" fluid />
                <Row>
                    <Col>
                        <h1>Welcome!</h1>
                        <h4>we got some stuff tools to rent out here</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home