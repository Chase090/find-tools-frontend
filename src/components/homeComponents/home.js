import React from "react";
import {Container} from "react-bootstrap";
import { HomeDisplay } from "./homeDescription";

const Home = () => {
    return(
        <div className='homepage'>
            <Container>
                <HomeDisplay />
            </Container>
        </div>
    )
}

export default Home