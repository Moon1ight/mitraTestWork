import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import CloseButton from "react-bootstrap/CloseButton"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"

const SearchBar = ({ searchValue, setSearchValue, sortHandler }) => {
    return (
        <>
            <Row className='mb-2'>
                <Col md={12} className='flex'>
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
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col xs='12'>
                    <span className='me-2'>Сортировка:</span>
                    <Button className='btn-light border' onClick={() => sortHandler()}>
                        По заголовкам
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default SearchBar
