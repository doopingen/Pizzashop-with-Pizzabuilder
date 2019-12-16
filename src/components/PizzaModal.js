import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Modal, Button } from 'react-bootstrap';

const PizzaModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        props.addToCart();
    }

    return(
        <>
            <Button variant="secondary" onClick={handleShow}>Place Order</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Pizza added to cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your Pizza has been added to cart. Build more pizza or checkout to finish your order</Modal.Body>
                <Modal.Footer>
                    <Link to="/account">
                        Modify Order/Cart
                    </Link>
                    <Link to="/checkout">
                        Proceed to Checkout
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PizzaModal