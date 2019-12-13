import React from 'react';
import { Button } from 'react-bootstrap';
import { link } from 'gatsby'

const Home = (props) => {

    const add = (a, b) => {
        return a + b
    }
    
    const mappedOrders = props.data.order.map((order) => {
        if(props.data.order.length === 0){
            return <h3>Go order some pizza!</h3>
        }if (props.data.order.length > 0){
            const orderTotal = order.cost.reduce(add)
            return (
                <>
                <p>Cheesa Pizza with {order.toppings} with free delivery</p>
                <small className="text-muted">$ {orderTotal}</small>
                <Button onClick={props.data.clearOrder()}>Remove</Button>
                </>
            );
        }
    });

    return (
    <>
    <div className="container">
          <div className="bg-primary text-center pt-3 pb-3">
          <h1 className="font-weight-light text-white"><p>Howdy, {props.user.nickname ? props.user.nickname : "friend"}!</p></h1>
          <h3 className="font-weight-light text-white"><p>Email: {props.user.email}</p></h3>
        </div>
    </div>
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

                <div className="card mt-4">
                    <img className="card-img-top img-fluid" src="http://placehold.it/900x400" alt="" />
                    <div className="card-body">
                        <h3 className="card-title">Product Name</h3>
                        <h4>$24.99</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit ugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure,ducimus!</p>
                        <span className="text-warning">★ ★ ★ ★ ☆</span>
                        4.0 stars
                        <hr />
                        <Button onClick={((e) => props.data.handlePizzaClick(e))}>Order Now!</Button>
                    </div>
                </div>
                <div className="card card-outline-secondary my-4">
                <div className="card-header">
                    Product Reviews
                </div>
                <div className="card-body">
                    {mappedOrders}
                    <hr />
                    <Button onClick={((e) => props.data.handlePizzaClick(e))}>Place Order</Button>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Home