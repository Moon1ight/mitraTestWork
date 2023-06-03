import React, { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"
import Comment from "./Comment"

const Post = ({ post }) => {
    const [comments, setComments] = useState([])
    const [showComments, setShowComments] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const buttonVariant = showComments ? "secondary" : "primary"

    const getComments = async () => {
        if (!showComments) {
            setIsLoading(true)
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
            setComments(response.data)
            setIsLoading(false)
            setShowComments((prev) => !prev)
        } else {
            setShowComments((prev) => !prev)
        }
    }

    return (
        <Card key={post.id} className='mb-3 py-2 px-4'>
            <Link to='/user'>
                <Card.Img
                    style={{ width: "50px" }}
                    variant='left'
                    src='https://www.lenbaget.ru/wp-content/uploads/2021/11/2345-1000x830-1.jpg'
                />
            </Link>
            <Card.Body className='px-0'>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Button variant={buttonVariant} onClick={() => getComments()}>
                    Комментарии
                </Button>
                {showComments && comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
                {isLoading && (
                    <Spinner animation='border' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </Spinner>
                )}
            </Card.Body>
        </Card>
    )
}

export default Post
