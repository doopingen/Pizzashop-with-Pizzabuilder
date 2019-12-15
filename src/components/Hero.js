import React from 'react';
import { Link } from 'gatsby';

export default (props) => (
    <div class="page-header header-filter header-bkgrd">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="brand-heading text-center">
                        <img class="img-fluid d-block mx-auto mb-3" src="https://res.cloudinary.com/doopingen/image/upload/v1576441616/unit4/well-stacked-logo-hero_ciahdm.png" alt="" width="250px" height="250px" />
                        <h1 class="header-title mb-3">You're moments away...</h1>
                        <Link class="btn-lg btn-cta" to="/pizzabuilder" type="button" >Order Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
) 