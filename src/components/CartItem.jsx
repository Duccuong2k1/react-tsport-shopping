import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import numberWithCommas from '../utils/numberWithCommas';
import { BiMinus } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteItem, updateItem } from '../redux/slice/cart/cartSlice';

const CartItem = props => {
    const dispatch = useDispatch();

    const [item,setItem] = useState(props.item);
    const [quantity,setQuantity] = useState(props.item.quantity);

    useEffect(() => {
        setItem(props.item);
        setQuantity(props.item.quantity);
    },[props.item]);

    const updateQuantity = (opt) =>{
        if(opt === '+'){
            dispatch(updateItem({...item ,quantity: quantity + 1}))
            // setQuantity(quantity + 1);
        }
        if(opt === '-'){
            dispatch(updateItem({...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1}))

            // setQuantity(quantity - 1 === 0 ? 1 : quantity - 1);
        }
    }
    const deleteCartItem = () =>{
        console.log('xoa xong');
        dispatch(deleteItem(item))
    }

    return (
        <div className="cart__item">
           <div className="cart__item__img">
               <img src={item.product.image01} alt="" />
           </div>
           <div className="cart__item__info">
               <div className="cart__item__info__name">
                   <Link to={`/catalog/${item.slug}`}>
                        {`${item.product.title} - ${item.color} - ${item.size}`}
                   </Link>
               </div>
               <div className="cart__item__info__price">
                   {`${numberWithCommas(Number(item.product.price))} vnd`}
               </div>
               <div className="cart__item__info__quantity">
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn"
                            onClick={() => updateQuantity('-')}
                        >
                            <BiMinus />
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div className="product__info__item__quantity__btn"
                            onClick={() => updateQuantity('+')}
                        >
                            <BsPlus />
                        </div>
                    </div>
                </div>
                <div className="cart__item__info__del">
                    <span onClick={() => deleteCartItem()}>
                        <RiDeleteBin5Line className="icon-del"/>
                    </span>
                </div>
           </div>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object,
}

export default CartItem
