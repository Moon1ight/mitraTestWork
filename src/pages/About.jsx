import React from "react"
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"

import { Card, Image } from "react-bootstrap"

const About = () => {
    return (
        <Container>
            <Card>
                <Card.Header className='text-center'>
                    <Image
                        src='https://www.lenbaget.ru/wp-content/uploads/2021/11/2345-1000x830-1.jpg'
                        roundedCircle
                        fluid
                        // className='w-25'
                        style={{ height: "100px" }}
                    />
                    <Card.Title>Евгений ионов</Card.Title>
                    <Card.Text>huredmoon@gmail.com</Card.Text>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Обо мне:</Card.Title>
                    <Card.Text>
                        Меня зовут Женя, мне 23 года, имею высшее профильное образование (Прикладная информатика в экономике).
                    </Card.Text>
                    <Card.Text>Работаю Frontend-разработчиком уже более года. Работал на стеке React, Axios, SCSS, ReactFlow.</Card.Text>
                    <Card.Text>Умею и люблю работать в команде :)</Card.Text>
                    <Card.Title>Что умею:</Card.Title>
                    <ListGroup>
                        <ListGroup.Item>- HTML 5, CSS3, JavaScript (ES6);</ListGroup.Item>
                        <ListGroup.Item>- ReactJS (FC, hooks), TypeScript, Redux, Redux Toolkit;</ListGroup.Item>
                        <ListGroup.Item>- Axios, WebSocket;</ListGroup.Item>
                        <ListGroup.Item>- Основы React Native;</ListGroup.Item>
                        <ListGroup.Item>
                            - Адаптивная и кроссбраузерная верстка используя Flexbox / Grid, использование БЭМ методологии;
                        </ListGroup.Item>
                        <ListGroup.Item>- Знание препроцессоров SASS / SCSS;</ListGroup.Item>
                        <ListGroup.Item>- Инлайновая стилизация, Styled Components, CSS Modules;</ListGroup.Item>
                        <ListGroup.Item>- Знание графических редакторов Figma, Photoshop;</ListGroup.Item>
                        <ListGroup.Item>- Опыт работы с системой контроля версий GIT, GitHub, GitLab;</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <Card.Footer>
                    <Card.Title>Связаться со мной:</Card.Title>
                    <Card.Text>Мой тг: @duck_crack</Card.Text>
                    <Card.Text>Моя почта: huredmoon@gmail.com</Card.Text>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default About
