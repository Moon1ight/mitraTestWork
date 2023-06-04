import React, { useState, useEffect } from "react"
import axios from "axios"
import Container from "react-bootstrap/Container"
import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Post from "../components/Post"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import Spinner from "react-bootstrap/Spinner"

const UserPage = () => {
    const params = useParams()
    const [user, setUser] = useState({})
    const [userPosts, setUserPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const getUserInfo = async () => {
        try {
            setError("")
            setIsLoading(true)
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params?.id}`)
            setUser(response.data)
            setIsLoading(false)
        } catch (e) {
            setIsLoading(false)
            setError(e.message)
        }
    }

    const getUserPosts = async () => {
        try {
            setError("")
            setIsLoading(true)
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params?.id}/posts`)
            setUserPosts(response.data)
            setIsLoading(false)
        } catch (e) {
            setIsLoading(false)
            setError(e.message)
        }
    }

    useEffect(() => {
        getUserInfo()
        getUserPosts()
    }, [])

    return (
        <Container>
            <Row className='justify-content-start mb-2'>
                <Col xs={2}>
                    <Link className='btn btn-light border' to='/'>
                        {`Назад`}
                    </Link>
                </Col>
            </Row>
            <h5>Информация о пользователе: </h5>
            {error && <h5>{error}</h5>}
            {!isLoading && (
                <Card key={user.id} className='mb-4'>
                    <Card.Header>Никнейм пользователя: {user.username}</Card.Header>
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>{user.email}</Card.Text>
                    </Card.Body>
                </Card>
            )}
            {isLoading && (
                <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            )}
            <h5>Посты пользователя: </h5>
            {error && <h5>{error}</h5>}
            {!isLoading && (
                <div>
                    {userPosts?.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            )}
            {isLoading && (
                <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            )}
        </Container>
    )
}

export default UserPage
