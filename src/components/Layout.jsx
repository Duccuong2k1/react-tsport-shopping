import React from 'react'
import { BrowserRouter ,Route } from 'react-router-dom'
import Routes from '../routes/Routes'
import Footer from './Footer'
import Header from './Header'
import ProductViewModal from './ProductViewModal'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={props =>(
                <div>
                    <div className="container">
                        <Header {...props}/>
                        <div className="main">
                            <Routes />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal />
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
