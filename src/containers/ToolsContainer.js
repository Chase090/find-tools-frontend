import React from "react";

import { connect } from "react-redux";
import { fetchTools } from "../actions/ToolsActions";


class ToolsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchTools()
    }

    renderTools() {
        return this.props.tools
    }

    render() {
        console.log("this is props.toolscontainer",this.props.tools)
        return(
            <></>
        )
    }

}


const mapStateToProps = (state) => {
    console.log(state.tools)
        return{
            tools: state.tools.tools
        }
    }
export default connect (mapStateToProps, {fetchTools})(ToolsContainer)
