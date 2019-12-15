import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CheckoutModal from './CheckoutModal';
import { Link } from 'gatsby'

const CheckOutUser = (props) => {

    const add = (a, b) => {
        return a + b
    }
    
    const mappedOrders = props.data.order.map((order) => {
        const pizzaTotal = order.cost.reduce(add);
        if (props.data.order.length > 0){
            return (
                <>
                    <p>Cheese Pizza with {`${order.toppings}`}</p>
                    <small className="text-muted">$ {pizzaTotal}</small>
                    <Button onClick={((e) => props.data.clearOrder(e, order.id))} >Remove</Button>
                    <hr />
                </>
            );
        }
    });

    return (
        <>
            <div className="user-banner">
                <div className="container-fluid">
                    <h3 className="d-inline font-weight-light text-muted text-center text-small">Checkout</h3>
                </div>
            </div>
            <div className="container-desktop-md container">
                <div className="row">
                    <div className="col-lg-3">
                        <h1 className="my-4">Shop Name</h1>
                        <div className="list-group">
                        <Link className="list-group-item text-center text-uppercase font-weight-bold" to="/pizzabuilder">Build More Pizza</Link>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="card card-outline-secondary my-4">
                            <div className="card-header">
                                Your Order
                            </div>
                            <div className="card-body">
                                {mappedOrders}
                                {props.data.order.length === 0 &&
                                    <>
                                        <p>Time to order some pizza!</p>
                                    </>
                                }
                                {props.data.order.length > 0 &&
                                    <> 
                                        <p>Thank you for your business. Payment is required on delivery</p>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="card mt-4">
                            <img className="card-img-top img-fluid" src="http://placehold.it/900x400" alt="" />
                            <div className="card-body">
                                <h3 className="card-title">Order Details</h3>
                                <Form>
                                    <Form.Group controlId="address1">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control name="Add1" onChange={props.data.onChange} placeholder="1234 Main St" />
                                    </Form.Group>
                                    <Form.Group controlId="address2">
                                        <Form.Label>Address 2</Form.Label>
                                        <Form.Control name="Add2" onChange={props.data.onChange} placeholder="Apartment, studio, or floor" />
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group controlId="city">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control name="City" onChange={props.data.onChange} placeholder="Seattle" />
                                        </Form.Group>
                                        <Form.Group controlId="state" className="ml-3">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control name="State" onChange={props.data.onChange} placeholder="Washington" />
                                        </Form.Group>
                                        <Form.Group controlId="zip">
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control name="Zip" onChange={props.data.onChange} placeholder="98101" />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group controlId="formGridZip">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control name="Phone" onChange={props.data.onChange} placeholder="360-555-1234" />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="I agree to pay order upon delivery" />
                                    </Form.Group>
                                </Form>
                                <CheckoutModal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    )
 
}

export default CheckOutUser 

