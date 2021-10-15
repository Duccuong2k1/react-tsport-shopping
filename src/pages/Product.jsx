import React from 'react'
import productData from '../assets/fake-data/products'
import Helmet from '../components/Helmet'

const Product = (props) => {    
    const product = productData.getProductBySlug(props.match.params.slug)
    return (
        <Helmet title={product.title}>
            product
        </Helmet>
    )
}

export default Product
