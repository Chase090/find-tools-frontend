import React from "react";
import { Card } from "react-bootstrap";

export const AboutDisplay = () => {
    return(
        <Card className="bg-dark text-white">
            <Card.Img src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>About ToolsFind</Card.Title>
                <Card.Text>
                    We are here to help you make or save money with peer to peer tool rental
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}