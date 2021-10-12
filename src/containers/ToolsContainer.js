import React from "react";
import {Container} from "react-bootstrap";

import { connect } from "react-redux";
import { fetchTools } from "../actions/ToolsActions";
import ToolCard from "../components/toolsComponents.js/toolCard";
import { Form, FormControl, Button } from 'react-bootstrap'

class ToolsContainer extends React.Component{
    
    
    componentDidMount(){
        this.props.fetchTools()
    }
    
    state = {
        query: "",
        tools: []
    }
   


    filteredTools = (e) => {
        const searchTerm = e.target.value
        this.setState({query: searchTerm})
       
    }

    renderFilteredOrRenderList() {
        console.log(this.state.query)
       if(this.state.query !== "") {
       const toolsFiltered = this.props.tools.filter(tool => tool.name.toLowerCase().includes(this.state.query.toLowerCase()))

            return toolsFiltered.map(t => {
                return <ToolCard
                    key={t.id}
                    id={t.id}
                    price={t.price}      
                    available={t.available} 
                    category_id={t.category_id} 
                    details={t.details} 
                    name={t.name}
                    />
            })
        } else {
            console.log(this.props)
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
                    />
            })
        }
    }




    render() {
        return(
            <>
                <Form className="d-flex">
                    <FormControl
                        onChange={(e) => this.filteredTools(e)}
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                </Form>
                
                <Container>
                    {this.renderFilteredOrRenderList()}
                </Container>
            </>
        )
    }

}


const mapStateToProps = (state) => {
        return{
            tools: state.tools.tools
        }
    }
export default connect (mapStateToProps, {fetchTools})(ToolsContainer)
