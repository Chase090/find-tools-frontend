import React from "react";
import ToolCard from "../components/toolsComponents.js/toolCard";
import { connect } from "react-redux";
import MarkedCard from "../components/toolsComponents.js/markedCard";

class MarkedContainer extends React.Component{

    componentDidMount(){
        this.props.fetchMarkedTools()
    }

    renderMarked(){
        console.log(this.props)
        return this.state.marked.map(m => {
            return <MarkedCard
             key={m.id}
                id={m.id}
                price={m.price}      
                available={m.available} 
                category_id={m.category_id} 
                details={m.details} 
                name={m.name} 
             />
        })
    }

    render(){
        
        return(
            <>
                {/* {this.renderMarked()} */}
            </>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state.tools.marked)
    return{
        marked: state.tools.marked
    }
}
export default connect (mapStateToProps)(MarkedContainer)