import React from 'react'
import { Link } from 'react-router-dom';
import Grid from './Grid';
const footerAboutLinks = [
    {
        display:"Giới Thiệu SHEIN",
        path:"/about",
    },
    {
        display:"Chương Trình Affiliate",
        path:"/about",
    },
    {
        display:"Blogger Thời Trang",
        path:"/about",
    },
    
];
const footerContactLinks = [
    {
        display:"Phí Vận Chuyển",
        path:"/about",
    },
    {
        display:"Trả Lại",
        path:"/about",
    },
    {
        display:"Hướng Dẫn Đặt Hàng",
        path:"/about",
    },
    {
        display:"Làm Thế Nào Để Theo Dõi",
        path:"/about",
    },
];
const footerCustomerLinks = [
    {
        display:"Liên Hệ Chúng Tôi",
        path:"/about",
    },
    {
        display:"Phương Thức Thanh Toán",
        path:"/about",
    },
    {
        display:"Điểm Thưởng",
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
                            <span>THÔNG TIN CÔNG TY</span>
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
                            <span>HỖ TRỢ KHÁCH HÀNG</span>
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
                            <span>DỊCH VỤ KHÁCH HÀNG</span>
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
                        <p>TSport cửa hàng thời trang phong cách trẻ trung năng động mạnh mẽ phù hợp với mọi lứa tuổi.</p>
                    </div>

                </Grid>
            </div>
        </footer>
    )
}

export default Footer
