import React from "react"
import Offcanvas from "react-bootstrap/Offcanvas"
import Image from "react-bootstrap/Image"
import { Link } from "react-router-dom"

const Sidebar = ({ show, setShow }) => {
    const handleClose = () => setShow(false)

    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton className='border-bottom'>
                <Image
                    src='https://www.lenbaget.ru/wp-content/uploads/2021/11/2345-1000x830-1.jpg'
                    roundedCircle
                    fluid
                    style={{ width: "30px" }}
                />
                <Offcanvas.Title>Евгений</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p>Ваша почта: huredmoon@gmail.com</p>

                <div className='mb-2'>
                    <Link className='btn btn-light border w-100' variant='primary' to='/posts' onClick={() => handleClose()}>
                        Список постов
                    </Link>
                </div>
                <div>
                    <Link className='btn btn-light border w-100' to='/about' onClick={() => handleClose()}>
                        Обо мне
                    </Link>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Sidebar
