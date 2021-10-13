import React from "react";
import { Container } from "react-bootstrap";
import { AboutDisplay } from "./aboutDesciption";

export const About = () => {
    return(
        <div className="aboutpage">
            <Container>
                <AboutDisplay />
            </Container>
        </div>
    )
}