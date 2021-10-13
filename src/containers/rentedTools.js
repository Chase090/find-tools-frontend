import React from "react";

import { connect } from "react-redux";
import { fetchTools } from "../actions/ToolsActions";
import ToolCard from "../components/toolsComponents.js/toolCard";
import RentedCard from "../components/toolsComponents.js/rentedCard";
import { Container } from "react-bootstrap";



class RentedTools extends React.Component{

    componentDidMount(){
        this.props.fetchTools()
    }

    displayUnavailable(){
        const toDisplay = this.props.tools.filter(tool => {
            return tool.available === false
        })
        return toDisplay.map(t => {
            return <RentedCard
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
        console.log(toDisplay)
    }


    render(){
        return(
            <>
                 <h1>Your Rented List</h1>
                 <br></br>
                <Container>
                    
                <div className="rented-tools">
                    {this.displayUnavailable()}
                </div>
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

export default connect (mapStateToProps, {fetchTools})(RentedTools)