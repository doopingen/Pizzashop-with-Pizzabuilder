import React from 'react';
import Layout from '../components/Layout';
import AppContext from '../context';
import PizzaPreview from '../components/PizzaPreview';
import PizzaPanel from '../components/PizzaPanel';

export default () => (
  <Layout>
      <div className="container-desktop-md container">
        <div className="row pizza-bkgrd my-5">
          <AppContext.Consumer>
            {userData => (
              <PizzaPreview data={userData} />
            )}
          </AppContext.Consumer>
        </div>
        <div className="card text-white bg-deepred my-5 py-4 text-center">
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
      </div>
</Layout>
)
