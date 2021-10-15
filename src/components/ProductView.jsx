import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Button from '../components/Button';
import numberWithCommas from '../utils/numberWithCommas';
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";

const ProductView = props => {
    const product = props.product;
    const [previewImage,setPreviewImage] = useState(product.image01)
    const [description,setDescription] = useState(false);
    const [color,setColor] = useState(undefined);
    const [size,setSize] = useState(undefined);
    const [quantity,setQuantity] = useState(1);

    const updateQuantity = (type) =>{
        if(type === 'plus'){
            setQuantity(quantity + 1);
        }else{
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
        }
    }
    useEffect(() => {
        setPreviewImage(product.image01);
        setColor(undefined);
        setQuantity(1);
        setSize(undefined);
    },[])
    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item" onClick={()=> setPreviewImage(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="product__images__list__item" onClick={()=> setPreviewImage(product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={previewImage} alt="" />
                </div>
                <div className={`product-description ${description ? 'expand' : ''}`}>
                    <div className="product-description__title">
                        chi tiết sản phẩn
                    </div>
                    <div className="product-description__content"
                        dangerouslySetInnerHTML={{__html:product.description}}
                    ></div>
                    <div className="product-description__toggle">
                        <Button size="sm" onClick={()=> setDescription(!description)}>
                            {description ? 'thu gọn': 'xem thêm'}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product__info">
                <h2 className="product__info__title">
                    {product.title}
                </h2>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {numberWithCommas(product.price)}
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Màu sắc :
                    </div>
                    <div className="product__info__item__list">
                        {product.colors.map((item,index) =>(
                            <div key={index} 
                                className={`product__info__item__list__item ${color === item ? 'active' : ' '}`}>
                                <div className={`circle bg-${item}`} onClick={() => setColor(item)}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Kích thước :
                    </div>
                    <div className="product__info__item__list">
                        {product.size.map((item,index) =>(
                            <div key={index} 
                                className={`product__info__item__list__item ${size === item ? 'active' : ' '}`}
                                onClick={() => setSize(item)}
                                >
                                <span className="product__info__item__list__item__size" 
                                    
                                >
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* quantity */}
                <div className="product__info__item">
                    <div className="product__info__item__title">
                       Số lượng :
                    </div>
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn"
                            onClick={() => updateQuantity('minus')}
                        >
                            <BiMinus />
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div className="product__info__item__quantity__btn"
                             onClick={() => updateQuantity('plus')}
                        >
                            <BsPlus />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    products: PropTypes.object.isRequired,
}

export default ProductView
