import React, { useState } from "react"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Sidebar from "./Sidebar"

const Header = () => {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Navbar bg='dark' className='mb-4'>
                <Container className='py-2'>
                    <Link className='btn' style={{ color: "#fff" }} to='/posts'>
                        MantraPosts
                    </Link>
                    <Button variant='primary' onClick={handleShow}>
                        =
                    </Button>
                </Container>
            </Navbar>

            <Sidebar show={show} setShow={setShow} />
        </>
    )
}

export default Header
