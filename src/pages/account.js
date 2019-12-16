import React from "react"
import AppContext from '../context';
import { Router } from "@reach/router"
import Layout from '../components/Layout'
import Home from '../components/Home'
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
          <main className="row align-items-center" >
            <AppContext.Consumer>
              {userData => (
                <Home path="/account" data={userData} user={user} component={Home} />   
              )}
            </AppContext.Consumer>
            <Router>
              <Settings path="/account/settings" />
              <Billing path="/account/billing" />
            </Router>
          </main>
      </Layout>
    </>
  )
}

export default Account
