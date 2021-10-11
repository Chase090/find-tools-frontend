import React from "react";
import {Container} from "react-bootstrap";
import ToolsContainer from "../containers/ToolsContainer";

const Home = () => {
    return(
        <div className='homepage'>
            <Container>
               <ToolsContainer />
            </Container>
        </div>
    )
}

export default Home