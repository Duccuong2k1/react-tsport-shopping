import React from 'react'
import { Link } from 'react-router-dom';
import Grid from './Grid';
const footerAboutLinks = [
    {
        display:"Gioi thieu",
        path:"/about",
    },
    {
        display:"lien he",
        path:"/about",
    },
    {
        display:"tuyen dung",
        path:"/about",
    },
    {
        display:"he thong cua hang",
        path:"/about",
    },
];
const footerContactLinks = [
    {
        display:"Gioi thieu",
        path:"/about",
    },
    {
        display:"Gioi thieu",
        path:"/about",
    },
    {
        display:"Gioi thieu",
        path:"/about",
    },
    {
        display:"Gioi thieu",
        path:"/about",
    },
];
const footerCustomerLinks = [
    {
        display:"chinh sach doi tra",
        path:"/about",
    },
    {
        display:"chinh sach bao hang",
        path:"/about",
    },
    {
        display:"hoan tien nhanh chong",
        path:"/about",
    },
    {
        display:"ship trong 48h",
        path:"/about",
    },
];
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            <span>Tong dai ho tro</span>
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item,index) => {
                                    return(
                                            <p key={index}>
                                            <Link to={item.path}>
                                                {item.display}
                                            </Link>
                                            </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            <span>Tong dai ho tro</span>
                        </div>
                        <div className="footer__content">
                            {
                                footerContactLinks.map((item,index) => {
                                    
                                    return(
                                            <p key={index}>
                                                <Link to={item.path}>
                                                    {item.display}
                                                </Link>
                                            </p>
                                       
                                        
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            <span>Tong dai ho tro</span>
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item,index) => {
                                    return(
                                        
                                            <p key={index}>
                                            <Link to={item.path}>
                                                {item.display}
                                            </Link>
                                            </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <h3 className="footer__logo">TSport</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione recusandae nisi quaerat esse nesciunt beatae est praesentium culpa sequi!</p>
                    </div>

                </Grid>
            </div>
        </footer>
    )
}

export default Footer
