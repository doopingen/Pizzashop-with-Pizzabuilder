import React from 'react'
import Layout from '../components/Layout'
import CheckoutUser from '../components/CheckoutUser'
import AppContext from '../context';

export default () => (
    <Layout>
       <main className="row align-items-center">
          <span>
            <AppContext.Consumer>
            {userData => (
              <CheckoutUser data={userData} />
            )}
            </AppContext.Consumer>
          </span>
      </main>
    </Layout>
  )