import React from "react";
import { Button, Form, FloatingLabel, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { createTool } from "../../actions/ToolsActions";

class ToolsForm extends React.Component{


    state = {
        show: false,
        name: "",
        details: "",
        price: "",
        image_url: ""
    }

    setShow(type){
        this.setState({
            ...this.state,
            show: type
        })
    }

    handleShow = () => {this.setShow}

    handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log("will add to db")
        const tempState = {...this.state}
        delete tempState.show;

        this.props.createTool(tempState)
       
        // then setState to empty
        this.setState({
            name: "",
            details: "",
            price: "",
            image_url: ""
        })
    }




    render(){
        return(

            <div className="tool-form">
                <Container>
                    <br></br>
                    <Form onSubmit={this.handleOnSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicToolName">                  
                                    <FloatingLabel label="Tool Name" className="mb-3">
                                        <Form.Control 
                                            placeholder="Tool Name"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.handleOnChange}

                                        />
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
                                            step="1.00" 
                                            name="price"
                                            value={this.state.price}
                                            onChange={this.handleOnChange}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                                
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <FloatingLabel label="Details">
                                        <Form.Control 
                                            as="textarea" 
                                            rows={3} 
                                            placeholder="Details" 
                                            name="details"
                                            value={this.state.details}
                                            onChange={this.handleOnChange}
                                        />
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

export default connect(null, {createTool})(ToolsForm)