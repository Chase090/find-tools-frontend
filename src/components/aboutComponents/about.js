import React from "react";
import { Container } from "react-bootstrap";
import { AboutDisplay } from "./aboutDesciption";
import InputTool from "../InputTool";

export const About = () => {
    return(
        <div className="aboutpage">
            <Container>
                <AboutDisplay />
                <InputTool />
            </Container>
        </div>
    )
}