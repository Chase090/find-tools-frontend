import React from "react";
import {Container} from "react-bootstrap";

import { connect } from "react-redux";


import { fetchTools, updateTool } from "../actions/ToolsActions";
import ToolCard from "../components/toolsComponents.js/toolCard";
import { Form, FormControl } from 'react-bootstrap'

class ToolsContainer extends React.Component{
    
    
    componentDidMount(){
        console.log("a")
        this.props.fetchTools()
        console.log("b")
    }
    
    state = {
        query: ""
    }
   

    searchInput = (e) => {
        const searchTerm = e.target.value
        this.setState({query: searchTerm})
       
    }


    handleRentButton = (id) => {
        debugger
        const matched = this.props.tools.find(tool => tool.id === id)
        const updatedMatch = {...matched, available: matched.available === false}
        this.props.updateTool(updatedMatch)
    }



    renderFilteredOrRenderList() {
// console.log(this.props.tools)
        if(this.state.query !== "") {
        const toolsFiltered = this.props.tools.filter(tool => tool.name.toLowerCase().includes(this.state.query.toLowerCase()))

            return toolsFiltered.map(t => {
                return <ToolCard
                    key={t.id}
                    id={t.id}
                    price={t.price}      
                    available={t.available} 
                    category_id={t.category_id} 
                    
                    name={t.name}
                    img_url={t.img_url}
                    handleRentButton={this.handleRentButton}
                    />
                    

                    
            })
        } else {
            const tooList = this.props.tools
            return tooList.map(t => {
                return <ToolCard
                    key={t.id}
                    id={t.id}
                    price={t.price}      
                    available={t.available} 
                    category_id={t.category_id} 
                    details={t.details} 
                    name={t.name}
                    img_url={t.img_url}
                    handleRentButton={this.handleRentButton}
                    />
            })
        }
    }




    render() {
        return(
            <>
                <div className="search-bar">   
                    <Form className="d-flex">
                        <FormControl
                            onChange={(e) => this.searchInput(e)}
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                    </Form>

                </div>
                    <br></br>
                <div className="toolcard">
                    <Container>
                        {this.renderFilteredOrRenderList()}
                    </Container>
                </div>
            </>
        )
    }

}


const mapStateToProps = (state) => {
    console.log(state.tools.tools)
        return{
            tools: state.tools.tools
        }
    }

    
export default connect (mapStateToProps, {fetchTools, updateTool})(ToolsContainer)

