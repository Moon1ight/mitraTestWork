import axios from "axios"
import React, { useState, useEffect } from "react"
import Spinner from "react-bootstrap/Spinner"
import Container from "react-bootstrap/Container"

import Post from "../components/Post"
import SearchBar from "../components/SearchBar"
import PaginationComponent from "../components/PaginationComponent"

const Posts = () => {
    const [searchValue, setSearchValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 10

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex)

    const getPostsList = async () => {
        setIsLoading(true)
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPosts(response.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getPostsList()
    }, [])

    const filteredPosts = () => {
        return currentPosts
            .filter((post) => {
                if (searchValue === "") {
                    return post
                } else if (post.title.toLowerCase().includes(searchValue.toLowerCase())) {
                    return post
                }
            })
            .map((post) => <Post key={post.id} post={post} />)
    }

    const sortHandler = () => {
        let sortedArr = posts.sort((a, b) => {
            if (a.title < b.title) return -1
        })
        console.log(sortedArr)
        filteredPosts(sortedArr)
    }

    return (
        <Container>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} sortHandler={sortHandler} />
            <PaginationComponent
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            {!isLoading && <div className='flex'>{filteredPosts()}</div>}
            {isLoading && (
                <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            )}
        </Container>
    )
}

export default Posts
