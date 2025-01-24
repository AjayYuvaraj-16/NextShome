import React from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MobileHeader from './MobileHeader';
import Link from '../Link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="main-header-wrapper position-relative">
            <div className="header-top">
                <div className="container pt--0 pb--0">
                    <div className="row">
                        <div className="col-12">
                            <div className="header-top-align">
                                <div className="header-top-align-start">
                                    <div className="desc">
                                        <p>World Wide Completely Free Returns and Free Shipping</p>
                                    </div>
                                </div>
                                <div className="header-top-align-end">
                                    <div className="header-info-items">
                                        <div className="info-items">
                                            <ul>
                                                <li className="number"><i className="fa fa-phone"></i><Link pathname="tel://0123456789">+00 123 456 789</Link></li>
                                                <li className="email"><i className="fa fa-envelope"></i><Link pathname="mailto://demo@example.com">demo@example.com</Link></li>
                                                <li className="account"><i className="fa fa-user"></i><Link pathname="/account">Account</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-middle">
                <div className="container pt--0 pb--0">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="header-middle-align">
                                <div className="header-middle-align-start">
                                    <div className="header-logo-area">
                                        <Link pathname="/">
                                            <Image className="logo-main" src="/assets/img/logo.webp" width="131" height="34" alt="Logo" />
                                            <Image className="logo-light" src="/assets/img/logo-light.webp" width="131" height="34" alt="Logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="header-middle-align-center">
                                    <div className="header-search-area">
                                        <form className="header-searchbox">
                                            <input type="search" className="form-control" placeholder="Search" />
                                            <button className="btn-submit" type="submit"><i className="fa fa-magnifying-glass fa-xs"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="header-middle-align-end">
                                    <div className="header-action-area">
                                        <AsideDrawer />
                                        <div className="shopping-wishlist">
                                            <Link className="shopping-wishlist-btn pt-1" pathname="/wishlist"><i className="fa-regular fa-heart fa-sm"></i></Link>
                                        </div>
                                        <div className="shopping-cart">
                                            <button className="shopping-cart-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasCart" aria-controls="offcanvasRightLabel">
                                                <ShoppingBagOutlinedIcon sx={{ fontSize: '27px', marginBottom: '4px' }} />
                                                <sup className="shop-count">02</sup>
                                            </button>
                                        </div>
                                        <LsideDrawer />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-area header-default">
                <div className="container">
                    <div className="row no-gutter align-items-center position-relative">
                        <div className="col-12">
                            <div className="header-align">
                                <div className="header-navigation-area position-relative">
                                    <ul className="main-menu nav">
                                        <li><Link pathname={'/'}>Home</Link>
                                        </li>
                                        <li><Link pathname={'/about-us'}>About</Link></li>
                                        <li className="has-submenu"><Link pathname={''}>Pages</Link>
                                            <ul className="submenu-nav">
                                                <li><Link pathname={'/account'}><span>Account</span></Link></li>
                                                <li><Link pathname={'/login'}><span>Login</span></Link></li>
                                                <li><Link pathname={'/register'}><span>Register</span></Link></li>
                                                <li><Link pathname={'/page-not-found'}><span>Page Not Found</span></Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu position-static"><Link pathname={''}>Shop</Link>
                                            <ul className="submenu-nav submenu-nav-mega column-3">
                                                <li className="mega-menu-item"><a href="#/" className="mega-title"><span>Shop Layout</span></a>
                                                    <ul>
                                                        <li><Link pathname={'/shop'}>Shop 3 Column</Link></li>
                                                        <li><Link pathname={'/shop/column4'}>Shop 4 Column</Link></li>
                                                        <li><Link pathname={'/shop/left-sidebar'}>Shop Left Sidebar</Link></li>
                                                        <li><Link pathname={'/shop/right-sidebar'}>Shop Right Sidebar</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-item"><a href="#/" className="mega-title"><span>Single Product</span></a>
                                                    <ul>
                                                        <li><Link pathname="/shop/product?t=normal"><span>Single Product Normal</span></Link></li>
                                                        <li><Link pathname="/shop/product?t=variable"><span>Single Product Variable</span></Link></li>
                                                        <li><Link pathname="/shop/product?t=group"><span>Single Product Group</span></Link></li>
                                                        <li><Link pathname="/shop/product?t=affiliate"><span>Single Product Affiliate</span></Link></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-item"><a href="#/" className="mega-title"><span>Others Pages</span></a>
                                                    <ul>
                                                        <li><Link pathname="/shop-cart"><span>Shopping Cart</span></Link></li>
                                                        <li><Link pathname="/checkout"><span>Checkout</span></Link></li>
                                                        <li><Link pathname="/wishlist"><span>Wishlist</span></Link></li>
                                                        <li><Link pathname="/compare"><span>Compare</span></Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><Link pathname={''}>Blog</Link>
                                            <ul className="submenu-nav submenu-nav-mega">
                                                <li className="mega-menu-item">
                                                    <Link pathname={''} className="mega-title">Blog Layout</Link>
                                                    <ul>
                                                        <li><Link pathname={'/blog-layout'}>Blog Grid</Link></li>
                                                        <li><Link pathname={'/blog-layout/sidebar'}>Blog Sidebar</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-item"><a href="#/" className="mega-title">Single Blog</a>
                                                    <ul>
                                                        <li><Link pathname={'/blog/detail'}>Blog Details</Link></li>
                                                        <li><Link pathname={'/blog/detail-left'}>Blog Details Sidebar</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="active"><Link pathname={'/contact-us'}>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

function AsideDrawer() {
    const [state, setState] = React.useState(false);
    return (
        <React.Fragment>
            <div className="shopping-search">
                <button className="shopping-search-btn pt-2" onClick={() => setState(true)} type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasSearch" aria-controls="AsideOffcanvasSearch"><i className="fa fa-magnifying-glass fa-xs"></i></button>
            </div>
            <aside className={`aside-search-box-wrapper offcanvas offcanvas-top ${state ? 'show' : ''}`} id="AsideOffcanvasSearch" aria-labelledby="offcanvasTopLabel" aria-modal="true" role="dialog">
                <div className="offcanvas-header">
                    <h5 className="d-none" id="offcanvasTopLabel">Aside Search</h5>
                    <button onClick={() => setState(false)} type="button" className="btn-close flex items-center justify-center" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark fa-xs"></i></button>
                </div>
                <div className="offcanvas-body">
                    <div className="container pt--0 pb--0">
                        <div className="search-box-form-wrap">
                            <div className="search-note">
                                <p>Start typing and press Enter to search</p>
                            </div>
                            <form action="#" method="post">
                                <div className="search-form position-relative">
                                    <label className="visually-hidden">Search</label>
                                    <input id="search-input" type="search" className="form-control" placeholder="Search entire store…" />
                                    <button className="search-button"><i className="fa fa-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </aside>
        </React.Fragment>
    )
}

function LsideDrawer() {
    const [state, setState] = React.useState(false);
    return (
        <React.Fragment>
            <button className="btn-menu" type="button" onClick={() => setState(true)} data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasMenu" aria-controls="AsideOffcanvasMenu">
                <i className="fa-solid fa-bars"></i>
            </button>
            <div className={`off-canvas-wrapper offcanvas offcanvas-start ${state ? 'show' : ''}`} id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel" aria-modal="true" role="dialog">
                <div className="offcanvas-header">
                    <h1 id="offcanvasExampleLabel"></h1>
                    <button className="btn-menu-close" data-bs-dismiss="offcanvas" aria-label="Close">menu <i onClick={() => setState(false)} className="fa fa-chevron-left"></i></button>
                </div>
                <div className="offcanvas-body">
                    <div className="info-items">
                        <ul>
                            <li className="number"><Link pathname="tel://0123456789"><i className="fa fa-phone"></i>+00 123 456 789</Link></li>
                            <li className="email"><Link pathname="mailto://demo@example.com"><i className="fa fa-envelope"></i>demo@example.com</Link></li>
                            <li className="account"><Link pathname="/account"><i className="fa fa-user"></i>Account</Link></li>
                        </ul>
                    </div>
                    {/* <!-- Mobile Menu Start --> */}
                    <MobileHeader />
                    {/* <!-- Mobile Menu End --> */}
                </div>
            </div>
        </React.Fragment>
    )
}