import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap';
import ProductsCard from '../components/ProductsCard';
import { ProductContext } from '../context/ProductContext';

const Products = () => {
    const [products] = useContext(ProductContext);
    return (
        <Container className='mt-4'>
            {/* <h1 className='text-center my-4'>Choose category:</h1> */}
            {/* <div className='category-btns d-flex justify-content-center'>
                <Button variant='info' className="choosing active me-3" data-filter=".all">All</Button>
                <Button variant='info' className="choosing me-3" data-filter=".men">Men's clothing</Button>
                <Button variant='info' className="choosing me-3" data-filter=".wom">Women's clothing</Button>
                <Button variant='info' className="choosing me-3" data-filter=".jew">Jewelery</Button>
                <Button variant='info' className="choosing" data-filter=".ele">Electronics</Button>
            </div> */}
            <Row className='g-5 mt-3 products-categories'>
                {products.map(i => {
                    return <ProductsCard key={i.id} category={i.category} image={i.image} title={i.title} price={i.price} id={i.id} alldata={i} />
                })}
            </Row>
        </Container>
    )
}

export default Products