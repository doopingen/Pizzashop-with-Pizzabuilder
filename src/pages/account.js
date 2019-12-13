import React from "react"
import AppContext from '../context';
import { Router } from "@reach/router"
import Layout from '../components/Layout'
import Home from '../components/Home'
import Checkout from '../components/CheckoutUser'
import { login, isAuthenticated, getProfile } from "../utils/auth"

const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      <Layout>
        <main className="container">
          <div className="row align-items-center my-5" >
          <AppContext.Consumer>
            {userData => (
              <Home path="/account" data={userData} user={user} component={Home} />   
            )}
          </AppContext.Consumer>
          <Router>
            <Settings path="/account/settings" />
            <Billing path="/account/billing" />
          </Router>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Account
