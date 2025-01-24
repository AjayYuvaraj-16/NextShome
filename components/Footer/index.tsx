import React, { useState } from 'react';
import Link from '../Link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="footer-main">
                <div className="container pt-0 pb-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="widget-item">
                                <div className="about-widget-wrap">
                                    <div className="widget-logo-area">
                                        <Link pathname="/">
                                            <Image className="logo-main" src="/assets/img/logo-light.webp" width="131" height="34" alt="Logo" />
                                        </Link>
                                    </div>
                                    <p className="desc">Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore</p>
                                    <div className="social-icons">
                                        <Link pathname="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></Link>
                                        <Link pathname="https://dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></Link>
                                        <Link pathname="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest-p"></i></Link>
                                        <Link pathname="https://twitter.com/" target="_blank"><i className="fa fa-twitter"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <Collapsible title='Services'>
                                <div className="collapse-body">
                                    <div className="widget-menu-wrap">
                                        <ul className="nav-menu" style={{ marginBottom: '30px' }}>
                                            <li><Link pathname="/contact-us">Home monitoring</Link></li>
                                            <li><Link pathname="/contact-us">Air Filters</Link></li>
                                            <li><Link pathname="/contact-us">Professional installation</Link></li>
                                            <li><Link pathname="/contact-us">Smart Buildings</Link></li>
                                            <li><Link pathname="/contact-us">For contractors</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <Collapsible title='My Account'>
                                <div className="collapse-body">
                                    <div className="widget-menu-wrap">
                                        <ul className="nav-menu" style={{ marginBottom: '30px' }}>
                                            <li><Link pathname="/account">My Account</Link></li>
                                            <li><Link pathname="/contact-us">Contact</Link></li>
                                            <li><Link pathname="/shop-cart">Shopping cart</Link></li>
                                            <li><Link pathname="/shop">Shop</Link></li>
                                            <li><Link pathname="/login">Services Login</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <Collapsible title='Contact Info'>
                                <div className="collapse-body">
                                    <div className="widget-contact-wrap">
                                        <ul style={{ marginBottom: '30px' }}>
                                            <li><span>Address:</span> Your address goes here.</li>
                                            <li><span>Phone//fax:</span> <Link pathname="tel://0123456789">0123456789</Link></li>
                                            <li><span>Email:</span> <Link pathname="mailto://demo@example.com">demo@example.com</Link></li>
                                            <li><Link target="_blank" pathname="https://www.hasthemes.com">www.example.com</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container pt--0 pb--0">
                    <div className="row">
                        <div className="col-md-7 col-lg-6">
                            <p className="copyright">© 2021 Shome. Made with <i className="fa fa-heart"></i> by Ajay
                                {/* <Link target="_blank" pathname="https://themeforest.net/user/codecarnival/portfolio">Codecarnival.</Link> */}
                            </p>
                        </div>
                        <div className="col-md-5 col-lg-6">
                            <div className="payment">
                                <Link pathname="/login"><Image src="/assets/img/photos/payment-card.webp" width="192" height="21" alt="Payment Logo" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

interface CollapsibleProps {
    title: string;
    children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="widget-item widget-services-item">
                <h4 className="widget-title">{title}</h4>
                <h4 className={`widget-collapsed-title ${!isOpen ? 'collapsed' : ''}`} onClick={toggleContent} data-bs-toggle="collapse" data-bs-target="#widgetId-1">{title}</h4>
                <div id="widgetId-1" className={`collapse widget-collapse-body ${isOpen ? 'show' : ''}`}>
                    {children}
                </div>
            </div>
        </>
    );
};

