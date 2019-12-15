import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'gatsby';

const Home = (props) => {

    const add = (a, b) => {
        return a + b
    }
    
    const mappedOrders = props.data.order.map((order) => {
       if (props.data.order.length > 0){
            const orderTotal = order.cost.reduce(add);
            return (
                <>
                    <p>Cheese Pizza with {`${order.toppings}`}</p>
                    <h4 className="pl-3 text-bold text-muted">$ {orderTotal}</h4>
                    <Button classname="pl-3 btn-remove" size="sm" onClick={((e) => props.data.clearOrder(e, order.id))} >Remove</Button>
                    <hr />
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
                        <img className="my-4 logo-home" src="https://res.cloudinary.com/doopingen/image/upload/v1576444236/unit4/pizza-logo-admin_da8al5.png" alt="Logo"/>
                        <div className="list-group">
                        <Link className="list-group-item text-center text-uppercase font-weight-bold" to="/checkout">Checkout</Link>
                        <Link className="list-group-item text-center text-uppercase font-weight-bold" to="/pizzabuilder">Build Your Pizza</Link>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="card card-outline-secondary my-4">
                            <div className="card-header card-order-header">
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
                                        <Link className="list-group-item text-center text-uppercase font-weight-bold" to="/checkout">Checkout</Link>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="card mt-4">
                            <img className="card-img-top img-fluid" src="https://res.cloudinary.com/doopingen/image/upload/v1576444750/unit4/well-stacked-promo_spn23m.png" alt="pizza promo" />
                            <div className="card-body">
                                <h3 className="card-title">Weekly Promotion</h3>
                                <h4>$25.00</h4>
                                <p className="card-text">Enjoy a two liter of Sprunk, One large pizza with double meat and double cheese for one knockout price!</p>
                                <hr />
                                <Button className="bg-deepred btn-cta" onClick={((e) => props.data.addPromoOrder(e))}>Order Now!</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    )
}

export default Home