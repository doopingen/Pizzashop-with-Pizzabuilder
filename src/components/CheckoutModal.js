import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Modal, Button } from 'react-bootstrap';

const CheckoutModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <Button variant="primary" onClick={handleShow}>Place Order</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Congratulations</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your order has been placed and a delivery update will be sent shortly. If you have any questions, please contact us at 555-1234</Modal.Body>
                <Modal.Footer>
                    <Link to="/account">
                        Proceed to Home
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CheckoutModal


