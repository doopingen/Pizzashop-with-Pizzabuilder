import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Link } from 'gatsby';

export default () => (
  <Layout>
    <Hero />
    <main className="container">
      <div className="row align-items-center my-5" >
        <span>
          <Link to="/account">Hello! Go to your account</Link>
        </span>
      </div>
    </main>
  </Layout>
)