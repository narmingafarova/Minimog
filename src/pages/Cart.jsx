import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import { LinkContainer } from "react-router-bootstrap";

function Cart() {
    const { isEmpty, items, updateItemQuantity, removeItem, cartTotal, emptyCart } = useCart();

    const notify = () => toast.error('Item has removed!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return isEmpty ?
        <div className="d-flex flex-column align-items-center justify-content-center">
            <img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="empty-cart" width="70%" style={{ backgroundColor: "transparent" }} />
            <LinkContainer to="/products">
                <Button variant='transparent'><img src="https://vizionz.boydnetonline.com/wp-content/uploads/2019/07/kisspng-logo-organization-photography-brand-go-back-button-5b3f520fef8813.4474823615308764319811-1.png" alt="back" width={100} /></Button>
            </LinkContainer>
        </div> :
        (
            <Container className="mt-5">
                <Table className="text-center" bordered>
                    <thead>
                        <tr>
                            <th>&#8470;</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, count) => (
                            <tr>
                                <td>{count + 1}</td>
                                <td>
                                    <img width={40} src={item.image} alt={item.title} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price.toFixed() * item.quantity}$</td>
                                <td>
                                    <Button
                                        onClick={() => {
                                            updateItemQuantity(item.id, item.quantity - 1);
                                        }}
                                    >
                                        -
                                    </Button>
                                    <span className="mx-3">{item.quantity}</span>
                                    <Button onClick={() => { updateItemQuantity(item.id, item.quantity + 1) }}>+</Button>
                                </td>
                                <td>
                                    <Button variant="danger" onClick={() => { notify(removeItem(item.id)) }}>Remove</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h4 className="my-5">Total Price: {cartTotal.toFixed()}$</h4>
                    <div className="cart-btns">
                        <LinkContainer to="/products">
                            <Button variant='success'>Back to shopping</Button>
                        </LinkContainer>
                        <Button variant="danger" className="ms-3" onClick={emptyCart}>Remove all</Button>
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </Container>
        );
}

export default Cart;
