import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'gatsby';

const Home = (props) => {
    const [orderBtnDisplay, setorderBtnDisplay] = useState('');
    const [test, setTest] = useState([1]);

    const add = (a, b) => {
        return a + b
    }
    
    const mappedOrders = props.data.order.map((order) => {
       if (props.data.order.length > 0){
            const orderTotal = order.cost.reduce(add);
            return (
                <>
                    <p>Cheese Pizza with {`${order.toppings}`}</p>
                    <small className="text-muted">$ {orderTotal}</small>
                    <Button onClick={((e) => props.data.clearOrder(e, order.id))} >Remove</Button>
                </>
            );
        }
    });

    return (
        <>
            <div className="user-banner">
                <div className="container-fluid">
                    <h3 className="d-inline font-weight-light text-capitalize text-center text-small">Howdy {props.user.nickname ? props.user.nickname : "friend"}!</h3>
                    <h4 className="d-inline font-weight-light text-muted text-center text-small">Email: {props.user.email}</h4>
                </div>
            </div>
            <div className="container-desktop-md container">
                <div className="row">
                    <div className="col-lg-3">
                        <h1 className="my-4">Shop Name</h1>
                        <div className="list-group">
                        <Link className="list-group-item text-center text-uppercase font-weight-bold" to="/account/settings">Edit Profile</Link>
                        <Link className="list-group-item text-center text-uppercase font-weight-bold" to="/checkout">Checkout</Link>
                        <Link className="list-group-item text-center text-uppercase font-weight-bold" to="/pizzabuilder">Build Your Pizza</Link>
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
                                        <hr />
                                        <Button className={orderBtnDisplay} onClick={((e) => props.data.handlePizzaClick(e))}>Place Order</Button>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="card mt-4">
                            <img className="card-img-top img-fluid" src="http://placehold.it/900x400" alt="" />
                            <div className="card-body">
                                <h3 className="card-title">Product Name</h3>
                                <h4>$24.99</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit ugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure,ducimus!</p>
                                <span className="text-warning">★ ★ ★ ★ ☆</span>
                                4.0 stars
                                <hr />
                                <Button className={orderBtnDisplay} onClick={((e) => props.data.handlePizzaClick(e))}>Order Now!</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    )
}

export default Home