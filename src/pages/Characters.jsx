import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap';
import CharacterCard from '../components/CharacterCard';
import { CharacterContext } from '../context/CharacterContext'

const Characters = () => {
    const [characters] = useContext(CharacterContext);
    return (
        <Container className='mt-4'>
            <Row className='g-5'>
                {characters.map(i => {
                    return <CharacterCard key={i.id} image={i.image} name={i.name} species={i.species} id={i.id} />
                })}
            </Row>
        </Container>
    )
}

export default Characters