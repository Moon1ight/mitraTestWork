import React, { useState } from "react"
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
        <Card className='mb-3 py-0 '>
            <Card.Header className='justify-content-start align-items-center' style={{ display: "flex" }}>
                <div style={{ marginRight: "20px" }}>
                    <Link to={`users/${post.userId}`}>
                        <Card.Img
                            style={{ width: "50px" }}
                            variant='left'
                            src='https://www.lenbaget.ru/wp-content/uploads/2021/11/2345-1000x830-1.jpg'
                            className='rounded-circle'
                        />
                    </Link>
                </div>
                <Card.Title>{post.title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>{post.body}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant={buttonVariant} onClick={() => getComments()}>
                    Комментарии
                </Button>
                {showComments && (
                    <div className='mt-2'>
                        {comments?.map((comment) => (
                            <Comment key={comment.id} comment={comment} />
                        ))}
                    </div>
                )}
                {isLoading && (
                    <div className='mt-2'>
                        <Spinner animation='border' role='status'>
                            <span className='visually-hidden'>Loading...</span>
                        </Spinner>
                    </div>
                )}
            </Card.Footer>
        </Card>
    )
}

export default Post
