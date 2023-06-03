import React, { useState } from "react"
import { Card } from "react-bootstrap"

const Comment = ({ comment }) => {
    return (
        <Card key={comment.id} className='mb-3 py-2 px-4'>
            <Card.Body className='px-0'>
                <Card.Title>{comment.email}</Card.Title>
                <Card.Text>{comment.body}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Comment
