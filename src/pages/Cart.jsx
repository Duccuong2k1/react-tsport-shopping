import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import productData from '../assets/fake-data/products';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
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

                            Tổng số sản phẩm : {totalProducts}
                        </p>
                        <div className="cart__info__txt__price">
                            <span>Thành tiền:</span>
                            <span>{numberWithCommas(totalPrice)} vnd</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        <Button size="block">Đặt hàng</Button>
                        <Link to="/catalog">
                            <Button size="block">
                                Tiếp tục mua hàng
                            </Button>
                        </Link>
                    </div>

                </div>
                <div className="cart__list">
                    {
                        cartProduct.length > 0 ? (
                            
                            cartProduct.map((item, index)=>(
                                <CartItem item={item} key={index}/>
                            ))
                    
                        ): (
                            <>
                                <img src="https://www.webthietke.vn/wp-content/uploads/2021/09/5ad047a18772cf0488a908d98942f9bf.gif" alt="" />
                                <h2>giỏ hàng không có sản phẩm nào</h2>
                            </>
                        )
                    }
                    
                </div>
            </div>
        </Helmet>
    )
}

export default Cart
