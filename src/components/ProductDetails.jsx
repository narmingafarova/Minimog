import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext';
import { Button, Card, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const [products] = useContext(ProductContext);
    const { addItem } = useCart();
    const notify = () => toast.success('Product added!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const { url } = useParams();
    const details = products.find(item => item.id == url);
    return (
        <>
            {details === undefined ? <h1>Loading...</h1> :
                <Container className='text-center mt-5'>
                    <Card className='mx-5 details-card d-flex flex-row justify-content-center align-items-center border-0'>
                        <Card.Img src={details.image} style={{ width: "400px" }} />
                        <Card.Body>
                            <Card.Title>{details.title}</Card.Title>
                            <Card.Text>
                                <p><span>Description:</span> {details.description}</p>
                                <p className='fs-3 mt-3'>{details.price} $</p>
                            </Card.Text>
                            <LinkContainer to="/products">
                                <Button variant='danger'>Back to products</Button>
                            </LinkContainer>
                            <Button variant='warning ms-3' onClick={() => { notify(addItem(details)) }}>Add to cart</Button>
                        </Card.Body>
                    </Card>
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
                </Container>
            }
        </>
    )
}

export default ProductDetails