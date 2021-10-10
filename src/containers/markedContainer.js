import React from "react";
import ToolCard from "../components/toolsComponents.js/toolCard";
import { connect } from "react-redux";

class MarkedContainer extends React.Component{

    render(){
        
        return(
            <>
            <ToolCard />    
            </>
        )
    }
}


const mapStateToProps = (state) => {
    
    return{
        tools: state.tools.tools
    }
}
export default connect (mapStateToProps)(MarkedContainer)