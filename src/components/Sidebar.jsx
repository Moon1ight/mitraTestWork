import React from "react"
import Offcanvas from "react-bootstrap/Offcanvas"
import Image from "react-bootstrap/Image"
import { Link } from "react-router-dom"

const Sidebar = ({ show, setShow }) => {
    const handleClose = () => setShow(false)

    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                {/* <div>
                    <Image
                        src='https://www.lenbaget.ru/wp-content/uploads/2021/11/2345-1000x830-1.jpg'
                        roundedCircle
                        fluid
                        className='w-50'
                    />
                </div> */}
                <Offcanvas.Title>Евгений</Offcanvas.Title>
                <div>huredmoon@gmail.com</div>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <nav bg='dark' expand='lg'>
                    <ul>
                        <li>
                            <Link to='/posts' onClick={() => handleClose()}>
                                Список постов
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' onClick={() => handleClose()}>
                                Обо мне
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Sidebar
