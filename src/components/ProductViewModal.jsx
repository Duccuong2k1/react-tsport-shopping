import React, { useEffect, useState } from 'react'
import Button from './Button';
import ProductView from './ProductView'
import { GrClose } from "react-icons/gr";
import {remove} from "../redux/slice/productModal/productModalSlice";
import { useDispatch, useSelector } from 'react-redux';
import productData from '../assets/fake-data/products';


const ProductViewModal = () => {

    const productSlug = useSelector(state => state.productModal.value);
    const dispatch = useDispatch()

    // const product = productData.getProductBySlug('quan-jean-phong-cach-18');
    const [product,setProducts] = useState(undefined);

    useEffect(() => {
        setProducts(productData.getProductBySlug(productSlug))
    },[productSlug])

    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
                <ProductView product={product} />
                <div className="product-view__modal__content__close">
                    <Button size="sm" onClick={()=> dispatch(remove())}>
                        <GrClose className="icon-close-modal" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal
