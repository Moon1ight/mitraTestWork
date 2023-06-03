import React, { useState, useEffect } from "react"
import axios from "axios"
import { Card } from "react-bootstrap"

const UserPage = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    // const getUserInfo = async () => {
    //     setIsLoading(true)
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.id}`)
    //     setUser(response.data)
    //     setIsLoading(false)
    //     // setShowComments((prev) => !prev)
    // }

    // useEffect(() => {
    //     getUserInfo()
    // }, [])

    return (
        <div>
            <div>Информация о пользователе: </div>
            <Card key={user.id} className='mb-3 py-2 px-4'>
                <Card.Body className='px-0'>
                    <Card.Title>{user.title}</Card.Title>
                    <Card.Text>{user.body}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserPage
