import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap';
import ProductsCard from '../components/ProductsCard';
import { ProductContext } from '../context/ProductContext';

const Products = () => {
    const [products] = useContext(ProductContext);
    return (
        <Container className='mt-4'>
            <Row className='g-5 mt-3 products-categories'>
                {products.map(i => {
                    return <ProductsCard key={i.id} category={i.category} image={i.image} title={i.title} price={i.price} id={i.id} alldata={i} />
                })}
            </Row>
        </Container>
    )
}

export default Products