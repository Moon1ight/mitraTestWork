import React from "react"
import Container from "react-bootstrap/Container"
import { Card } from "react-bootstrap"

const About = () => {
    return (
        <Container>
            <Card className='mb-3 py-2 px-4'>
                <Card.Body className='px-0'>
                    <Card.Title>Евгений Ионов</Card.Title>
                    <Card.Text>Какая-то информация обо мне</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default About
