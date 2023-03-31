import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Home = () => {
    return (
        <div className="header-carousel">
            <Container>
                <Row>
                    <Col sm={12} md={6} className='text-capitalize'>
                        <p className='mb-3'>New arrivals</p>
                        <h1 className='mb-3'>Autumn collection</h1>
                        <Button className='text-capitalize'>Shop now</Button>
                    </Col>
                </Row>
                <div className='header-foot'>
                    The ReCotton Tea <span className='mx-2'>|</span>
                    <a href='/' className='text-decoration-none'>Shop Now</a>
                </div>
            </Container>
        </div>
    )
}

export default Home