import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductsCard = ({ category, image, title, price, id, alldata }) => {
    const { addItem } = useCart();
    const notify = () => toast.success('Product added!', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    
    return (
        <Col sm={12} md={4} className={`all ${category.substring(0, 4)}`}>
            <Card className='char-card border-0'>
                <Card.Img variant="top" src={image} height={450} />
                <Card.Body className='text-center border-0'>
                    <Card.Title>{title.substring(0, 20)}</Card.Title>
                    <Card.Text>{price} $</Card.Text>
                    <LinkContainer to={`/${id}`}>
                        <Button variant='info'>View details</Button>
                    </LinkContainer>
                    <Button variant='warning ms-3' onClick={() => { notify(addItem(alldata)) }}>Add to cart</Button>
                    <ToastContainer
                        position="top-right"
                        autoClose={1000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductsCard