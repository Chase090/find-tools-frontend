import React from "react";
import { connect } from "react-redux";
import toolCard from "../components/toolsComponents.js/toolCard";
import { Form, FormControl, Button } from 'react-bootstrap'
class SearchContainer extends React.Component {

    state = {
        query: "",
        tools: []
    }

    filteredTools = (e) => { debugger
        const searchTerm = e.target.value
        this.setState({query: searchTerm})
       
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
        </>
       ) 
    }

}

const mapStateToProps = (store) => {
    return{
        tools: store.tools
    }
}


export default connect(mapStateToProps)(SearchContainer)