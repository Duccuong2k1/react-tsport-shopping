import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import Accessories from '../pages/Accessories';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
const Routes = () => {
    return (
        <Switch>
            <Route exact component={Home} path='/'/>
            <Route  component={Product} path='/catalog/:slug'/>
            <Route  component={Cart} path='/cart'/>
            <Route  component={Catalog} path='/catalog'/>
            <Route  component={Accessories} path='/accessories'/>
            <Route  component={Contact} path='/contact'/>
            <Route  component={Login} path='/login'/>
        </Switch>
    )
}

export default Routes
