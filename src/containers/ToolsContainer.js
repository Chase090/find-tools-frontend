import React from "react";

import { connect } from "react-redux";
import { fetchTools } from "../actions/ToolsActions";
import ToolCard from "../components/toolsComponents.js/toolCard";

class ToolsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchTools()
    }

    markedToRent(){
        // pass this function as a props to Toolcard for use of the button,
        // when clicked will move the tool to marked,
        // from marked, when user is done with the tool, user would have a button to delete
        // delete action will be triggered dispatched to reducer then will delete the tool from db
    }

    renderTools() {
        return this.props.tools.map(t => {
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
export default connect (mapStateToProps, {fetchTools})(ToolsContainer)
