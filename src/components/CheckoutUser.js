import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

const CheckOutUser = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const add = (a, b) => {
        return a + b
    }
    
    const mappedOrders = props.data.order.map((order) => {
        const orderTotal = order.cost.reduce(add)
        return (
            <>
            <p>Lorem ipsum dolor sit amet, {order.toppings}consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
            <small className="text-muted">$ {orderTotal}</small>
            <Button onClick={props.data.clearOrder()}>Remove</Button>
            </>
        );
        
    });

    return (
    <>
    <div className="container-md">
        <div className="row">
            <div className="col-lg-3">
                <h1 className="my-4">Shop Name</h1>
                <div className="list-group">
                <a href="#" className="list-group-item active">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
                </div>
            </div>
            <div className="col-lg-9">
            <div className="card card-outline-secondary my-4">
                <div className="card-header">
                    Product Reviews
                </div>
                <div className="card-body">
                    {mappedOrders}
                    <Button onClick={((e) => props.data.handlePizzaClick(e))}>Place Order</Button>
                </div>
            </div>
                <Form>
                    <Form.Row>
                        <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" onClick={handleShow}>Launch demo modal</Button>
                </Form>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    </div>
    </>
    )
}

export default CheckOutUser 