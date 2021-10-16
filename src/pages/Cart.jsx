import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import productData from '../assets/fake-data/products';
import Button from '../components/Button';
import Helmet from '../components/Helmet';
import numberWithCommas from '../utils/numberWithCommas';


const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value);
    const [cartProduct,setCartProduct] = useState([]); 
    const [totalProducts,setTotalProducts] = useState(0); 
    const [totalPrice,setTotalPrice] = useState(0); 

    console.log(cartItems);

    useEffect(() => {
        setCartProduct(productData.getCartItemsInfo(cartItems));
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity),0))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity)* Number(item.price)),0))

    },[cartItems])
    return (
        <Helmet title="Giỏ hàng">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>

                            so san pham trong gio {totalProducts}
                        </p>
                        <div className="cart__info__txt__price">
                            <span>thanh tien:</span>
                            <span>{numberWithCommas(totalPrice)}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        <Button size="sm    ">dat hang</Button>
                        <Link to="">
                            <Button size="sm">
                                tiep tuc mua hang
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </Helmet>
    )
}

export default Cart
