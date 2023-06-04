import React from "react"
import Pagination from "react-bootstrap/Pagination"

const PaginationComponent = ({ postsPerPage, totalPosts, currentPage, setCurrentPage }) => {
    const onChangePage = (number) => {
        setCurrentPage(number)
    }

    let pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(
            <Pagination.Item key={i} active={i === currentPage} onClick={() => onChangePage(i)}>
                {i}
            </Pagination.Item>
        )
    }

    return (
        <Pagination className='flex-wrap justify-content-end'>
            <Pagination.Prev disabled={currentPage < 2} onClick={() => setCurrentPage((prev) => prev - 1)} />
            {pageNumbers}
            <Pagination.Next disabled={currentPage >= totalPosts / postsPerPage} onClick={() => setCurrentPage((prev) => prev + 1)} />
        </Pagination>
    )
}

export default PaginationComponent
