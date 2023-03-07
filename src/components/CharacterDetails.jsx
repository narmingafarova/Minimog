import React, { useContext } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';

const CharacterDetails = () => {
    const [characters] = useContext(CharacterContext);
    const { url } = useParams();
    const details = characters.find(item => item.id == url);
    return (
        <>
            {details === undefined ? <h1>Loading...</h1> :
                <Container className='text-center mt-5'>
                    <Card className='mx-5 details-card d-flex flex-row justify-content-center align-items-center border-0'>
                        <Card.Img src={details.image} style={{ width: "500px" }} />
                        <Card.Body>
                            <Card.Title>{details.name}</Card.Title>
                            <Card.Text>
                                <p><span>Species:</span> {details.species}</p>
                                <p><span>Gender:</span> {details.gender}</p>
                                <p><span>Location:</span> {details.location.name}</p>
                            </Card.Text>
                            <LinkContainer to="/characters">
                                <Button variant='danger'>Go back</Button>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Container>
            }
        </>
    )
}

export default CharacterDetails