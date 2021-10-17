import React, { useEffect, useRef } from 'react';
import { Link ,useLocation} from 'react-router-dom';
import { FiAlignLeft, FiUser } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { BsCartCheck } from "react-icons/bs";
import { GrFormPrevious } from "react-icons/gr";
import { useSelector } from 'react-redux';

const mainNav = [
    {
        display:"Trang chủ",
        path:"/",
    },
    {
        display:"Sản phẩm",
        path:"/catalog",
    },
    {
        display:"Phụ kiện",
        path:"/accessories",
    },
    {
        display:"Liên hệ",
        path:"/contact",
    }
]

const Header = () => {
    const {pathname} = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname);
    const cartItems = useSelector((state) => state.cartItems.value);


    const headerRef = useRef(null);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);
    const menuRef = useRef(null);
    const menuToggle = ()=> menuRef.current.classList.toggle('active');

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <h3>TSport</h3>
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <FiAlignLeft/>
                    </div>
                    <div className="header__menu__left" ref={menuRef}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <GrFormPrevious/>
                        </div>
                        {
                            mainNav.map((item, index)=>(
                                <div key={index} 
                                onClick={menuToggle}
                                className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active':''}`}>
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <GoSearch/>
                        </div>
                        <div className="header__menu__item header__menu__right__item numCart">
                            <Link to="/cart">
                                <BsCartCheck/>
                                <span className={`${cartItems.length > 0 ? 'numberInCart' : ''}`}>{cartItems.length > 0 ? cartItems.length : ''}</span>
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <FiUser/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
