import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import CloseButton from "react-bootstrap/CloseButton"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"

const SearchBar = ({ searchValue, setSearchValue, sortHandler }) => {
    return (
        <Row className='mb-4 align-items-center'>
            <Col xs={9} className='flex'>
                <InputGroup>
                    <Form.Control
                        type='input'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder='Поиск по постам..'
                    />
                    <InputGroup.Text>
                        <CloseButton onClick={() => setSearchValue("")} />
                    </InputGroup.Text>
                </InputGroup>
                {/* <Form.Control
                    className='mb-2'
                    type='input'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder='Поиск по постам..'
                />
                <CloseButton className='mr-2' onClick={() => setSearchValue("")} /> */}
            </Col>
            <Col xs='auto'>
                <Button onClick={() => sortHandler()}>Заголовок</Button>
            </Col>
            {/* <Col xs='auto' style={{ textAlign: "right" }}></Col> */}
        </Row>
    )
}

export default SearchBar
