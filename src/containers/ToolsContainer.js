import React from "react";

import { connect } from "react-redux";
import { fetchTools, toolsMarkedUnavaliable } from "../actions/ToolsActions";
import ToolCard from "../components/toolsComponents.js/toolCard";

class ToolsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchTools()
    }

    handleMarkedTool = (id) => {
        // function will have id as an arg wich will be matched against the propstools
        const matchedTool = this.props.tools.find(tool => tool.id === id)
        const newlyEdited = {...matchedTool, available: matchedTool.available === 0}

        this.props.toolsMarkedUnavaliable(newlyEdited)
        
        // pass this function as a props to Toolcard for use of the button,
        // when clicked will move the tool to marked,
        // from marked, when user is done with the tool, user would have a button to delete
        // delete action will be triggered dispatched to reducer then will delete the tool from db
    }

    renderTools() {
        console.log()
        return this.props.tools.map(t => {
            return <ToolCard
                key={t.id}
                id={t.id}
                price={t.price}      
                available={t.available} 
                category_id={t.category_id} 
                details={t.details} 
                name={t.name}
                handleMarkedTool={this.handleMarkedTool} 
            />
        })
    }

    render() {
        // console.log("this is props.toolscontainer",this.props.tools)
        return(
            <>
                {this.renderTools()}
            </>
        )
    }

}


const mapStateToProps = (state) => {
    
        return{
            tools: state.tools.tools
        }
    }
export default connect (mapStateToProps, {fetchTools, toolsMarkedUnavaliable})(ToolsContainer)
