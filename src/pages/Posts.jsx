import axios from "axios"
import React, { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Spinner from "react-bootstrap/Spinner"
import Post from "../components/Post"

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getPostsList = async () => {
        setIsLoading(true)
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?limit=5")
        setPosts(response.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getPostsList()
    }, [])

    return (
        <>
            {!isLoading && (
                <div>
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            )}
            {isLoading && (
                <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            )}
        </>
    )
}

export default Posts
