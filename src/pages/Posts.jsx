import axios from "axios"
import React, { useState, useEffect } from "react"
import CloseButton from "react-bootstrap/CloseButton"
import Form from "react-bootstrap/Form"
import Spinner from "react-bootstrap/Spinner"
import Post from "../components/Post"

const Posts = () => {
    const [searchValue, setSearchValue] = useState("")
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getPostsList = async () => {
        setIsLoading(true)
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPosts(response.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getPostsList()
    }, [])

    // useEffect(() => {
    //     posts.sort()
    //     // const filteredPosts = posts.filter((post) => post.title === searchValue)
    //     // console.log(filteredPosts, posts[0]?.title)
    // }, [searchValue])

    return (
        <>
            <div className='mb-4'>
                <Form.Control
                    type='input'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder='Поиск по постам..'
                />
                <CloseButton onClick={() => setSearchValue("")} />
            </div>
            {!isLoading && (
                <div>
                    {posts
                        .filter((post) => {
                            if (searchValue === "") {
                                return post
                            } else if (post.title.toLowerCase().includes(searchValue.toLowerCase())) {
                                return post
                            }
                        })
                        .map((post) => (
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
