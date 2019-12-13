import React from 'react';
import Layout from '../components/Layout';
import AppContext from '../context';
import PizzaPreview from '../components/PizzaPreview';
import PizzaPanel from '../components/PizzaPanel';
import { Link } from 'gatsby';

export default () => (
  <Layout>
    <div className="container">
      <div className="row pizza-bkgrd my-5">
        <AppContext.Consumer>
          {userData => (
            <PizzaPreview data={userData} />
          )}
        </AppContext.Consumer>
      </div>
      <div className="card text-white bg-secondary my-5 py-4 text-center">
        <div className="card-body">
          <div className="text-white m-0">
            <AppContext.Consumer>
            {userData => (
              <PizzaPanel data={userData} />
            )}
            </AppContext.Consumer>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">Card One</h2>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
            </div>
            <div className="card-footer">
              <Link href="#" className="btn btn-primary btn-sm">More Info</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">Card Two</h2>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
            </div>
            <div className="card-footer">
              <Link href="#" className="btn btn-primary btn-sm">More Info</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">Card Three</h2>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
            </div>
            <div className="card-footer">
              <Link href="#" className="btn btn-primary btn-sm">More Info</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
</Layout>
)
