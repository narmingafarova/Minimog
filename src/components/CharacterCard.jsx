import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CharacterCard = ({ image, name, species, id }) => {
    return (
        <Col sm={12} md={4}>
            <Card className='char-card border-0'>
                <Card.Img variant="top" src={image} className="rounded-pill"/>
                <Card.Body className='text-center border-0'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{species}</Card.Text>
                    <LinkContainer to={`/${id}`}>
                        <Button variant='info'>Read more</Button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CharacterCard