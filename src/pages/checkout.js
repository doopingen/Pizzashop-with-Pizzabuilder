import React from 'react'
import Layout from '../components/Layout'
import CheckoutUser from '../components/CheckoutUser'
import AppContext from '../context';

export default () => (
    <Layout>
      <main className="container">
        <div className="row align-items-center my-5" >
          <span>
            <AppContext.Consumer>
            {userData => (
              <CheckoutUser data={userData} />
            )}
            </AppContext.Consumer>
          </span>
        </div>
      </main>
    </Layout>
  )