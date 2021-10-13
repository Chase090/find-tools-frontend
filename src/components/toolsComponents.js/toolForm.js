import React from "react";
import { Button, Form, FloatingLabel, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { createTool } from "../../actions/ToolsActions";

class ToolsForm extends React.Component{


    state = {
        name: "",
        details: "",
        price: "",
        image_url: ""
    }

    handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()

        this.props.createTool(this.state)
       
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
                    

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <FloatingLabel label="Image Url">
                                <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    placeholder="Image Url" 
                                    name ="image_url"
                                    value={this.state.image_url}
                                    onChange={this.handleOnChange}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    
                    
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
                                            
                    
                    
                    

                    
                        <Button variant="primary" type="submit">Submit</Button>
                    
                
                    </Form>
                </Container>

            </div>
            
        )
    }
}

export default connect(null, {createTool})(ToolsForm)