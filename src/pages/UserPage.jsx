import React, { useState, useEffect } from "react"
import axios from "axios"
import Container from "react-bootstrap/Container"
import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Post from "../components/Post"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"

const UserPage = () => {
    const params = useParams()
    const [user, setUser] = useState({})
    const [userPosts, setUserPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getUserInfo = async () => {
        setIsLoading(true)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params?.id}`)
        setUser(response.data)
        setIsLoading(false)
        // setShowComments((prev) => !prev)
    }

    const getUserPosts = async () => {
        setIsLoading(true)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params?.id}/posts`)
        setUserPosts(response.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getUserInfo()
        getUserPosts()
    }, [])

    return (
        <Container>
            <Row className='justify-content-end'>
                <Col xs={1}>
                    <Link variant='primary' to='/'>
                        Назад
                    </Link>
                </Col>
            </Row>
            <h5>Информация о пользователе: </h5>
            <Card key={user.id} className='mb-4 py-2 px-4'>
                <Card.Header>{user.username}</Card.Header>
                <Card.Body className='px-0'>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.email}</Card.Text>
                </Card.Body>
            </Card>
            <div>
                <h5>Посты пользователя: </h5>
                {userPosts?.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </Container>
    )
}

export default UserPage
