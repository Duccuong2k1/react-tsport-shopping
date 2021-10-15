import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { BiCart } from "react-icons/bi";
import Button from './Button';

const HeroSlider = props => {
    const dataSlider = props.slider;
    const timeOut = props.timeOut ? props.timeOut : 3000;
    const [activeSlider, setActiveSlider] = useState(0)
    

    const nextSlider = useCallback(
        () => {
            const index = activeSlider + 1 === dataSlider.length ? 0 : activeSlider + 1;
            setActiveSlider(index);
        },
        [activeSlider,dataSlider],
    )
    const prevSlider = ()=>{
        const index = activeSlider - 1 < 0 ? dataSlider.length - 1 : activeSlider - 1;
        setActiveSlider(index);
    }
    useEffect(() => {
        if(props.auto){
            const slideAuto = setInterval(() => {
                nextSlider()
            },timeOut)
            return () => {
                clearInterval(slideAuto)
            }
        }
    }, [nextSlider , timeOut, props])
    

    return (
        <div className="hero-slider" >
            {
                dataSlider.map((item,index) =>(
                    <HeroSliderItem key={index} item={item} active={index === activeSlider}/>
                ))
            }
            {
                props.control ? (
                    <div className="hero-slider__control">
                    <div className="hero-slider__control__item" onClick={prevSlider}>
                            <GrFormPrevious/>
                        </div>
                        <div className="hero-slider__control__item">
                            <div className="index">
                                {activeSlider + 1}/{dataSlider.length}
                            </div>
                        </div>
                        
                        <div className="hero-slider__control__item" onClick={nextSlider}>
                            <GrFormNext/>
                        </div>
                    </div>
                ):null
            }
        </div>
    )
}

HeroSlider.propTypes = {
    slider: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}

const HeroSliderItem = props => (
    <div className={`hero-slider__item ${props.active ? 'active' : ''}`}>
        <div className="hero-slider__item__info">
            <div className={`hero-slider__item__info__title color-${props.item.color}`}>
                <span>{props.item.title}</span>
            </div>
            <div className="hero-slider__item__info__desc">
                <span>{props.item.description}</span>
            </div>
            <div className="hero-slider__item__info__btn">
                <Link to={props.item.path}>
                    <Button
                        backgroundColor={props.item.color}
                        icon={BiCart}
                        animate={true}
                        
                    >
                    xem chi tiết
                    </Button>
                </Link>
            </div>
        </div>
        <div className="hero-slider__item__img">
            <div className={`shape bg-${props.item.color}`}></div>
            <img src={props.item.img} alt="" />
        </div>
    </div>

    
)

export default HeroSlider
