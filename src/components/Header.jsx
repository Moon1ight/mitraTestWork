import React, { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import Offcanvas from "react-bootstrap/Offcanvas"
import { Link } from "react-router-dom"

const Header = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div className='py-2 justify-content-end'>
            <Button variant='primary' onClick={handleShow}>
                =
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <nav bg='dark' expand='lg'>
                        <ul>
                            <li>
                                <Link to='/posts'>Список постов</Link>
                            </li>
                            <li>
                                <Link to='/about'>Обо мне</Link>
                            </li>
                        </ul>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Header
