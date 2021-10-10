import React from "react";

import { connect } from "react-redux";
import { fetchTools } from "../actions/ToolsActions";
import Tool from "../components/toolsComponents.js/tool";

class ToolsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchTools()
    }

    renderTools() {
        return this.props.tools.map(t => {
            return <Tool
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
