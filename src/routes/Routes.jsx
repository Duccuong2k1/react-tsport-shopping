import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
const Routes = () => {
    return (
        <Switch>
            <Route exact component={Home} path='/'/>
            <Route  component={Catalog} path='/catalog/:slug'/>
            <Route  component={Cart} path='/Cart'/>
            <Route  component={Product} path='/Product'/>
        </Switch>
    )
}

export default Routes
