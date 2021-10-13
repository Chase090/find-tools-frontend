import React from "react";
import {Container} from "react-bootstrap";

import { connect } from "react-redux";
import { fetchTools } from "../actions/ToolsActions";
import ToolCard from "../components/toolsComponents.js/toolCard";
import { Form, FormControl } from 'react-bootstrap'

class ToolsContainer extends React.Component{
    
    
    componentDidMount(){
        this.props.fetchTools()
    }
    
    state = {
        query: ""
    }
   

    searchInput = (e) => {
        const searchTerm = e.target.value
        this.setState({query: searchTerm})
       
    }



    renderFilteredOrRenderList() {

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
        return{
            tools: state.tools.tools
        }
    }
export default connect (mapStateToProps, {fetchTools})(ToolsContainer)
