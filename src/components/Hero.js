import React from 'react';
import { Link } from 'gatsby';

export default (props) => (
    <div class="page-header header-filter header-bkgrd">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="brand-heading text-center">
                        <img class="img-fluid d-block mx-auto" src="http://placehold.it/200x200&amp;text=Logo" alt="" />
                        <h1 class="header-title">You're moments away</h1>
                        <h3 class="header-title">from eating the best pizza</h3>
                        <Link class="btn-lg btn-secondary" to="/pizzabuilder" type="button" >Order Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
) 