import React from 'react';
import Link from '../Link';
import Image from 'next/image';

interface ProdDescriptionProps {
    type?: string;
}
const ProdDescription: React.FC<ProdDescriptionProps> = ({ type }) => {
    return (
        <div className="product-single-info">
            <h3 className="main-title">Leather Mens Slipper</h3>
            <div className="prices">
                <span className="price">$20.19</span>
            </div>
            <div className="rating-box-wrap">
                <div className="rating-box">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <div className="review-status">
                    <Link pathname="/">(5 Customer Review)</Link>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmll tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mill veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exet commodo consequat. Duis aute irure dolor</p>
            <div style={{ display: type === 'affiliate' ? 'contents' : 'none' }} className="product-quick-action">
                <Link className="btn-theme ml--0" pathname="/checkout">Buy Now</Link>
            </div>
            <div style={{ display: type === 'group' ? 'contents' : 'none' }} className="group-product-list">
                <span className="info-text">Buy this bundle and get off to <span className="text-primary">25%</span> of all prices.</span>
                <table>
                    <tbody>
                        <tr>
                            <td className="choose"><input type="checkbox" checked disabled /></td>
                            <td className="quantity"></td>
                            <td className="thumb"><Image src="/assets/img/shop/product-single/group1.webp" alt="Image" /></td>
                            <td className="title"><span>Leather Mens Slipper</span></td>
                            <td className="price"><span className="pro-price"><span>£100</span></span></td>
                        </tr>
                        <tr>
                            <td className="choose"><input type="checkbox" /></td>
                            <td className="quantity">1</td>
                            <td className="thumb"><Image src="/assets/img/shop/product-single/group2.webp" alt="Image" /></td>
                            <td className="title"><Link pathname='/shop/product?t=normal'>Modern Smart Shoes</Link></td>
                            <td className="price"><span className="pro-price"><span className="old">£120.00</span><span className="new">£96.00</span></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{ display: (type === 'variable') ? 'flex' : 'none' }} className="product-color">
                <h6 className="title">Color</h6>
                <ul className="color-list">
                    <li data-bg-color="#586882" style={{ backgroundColor: "rgb(88, 104, 130)" }}></li>
                    <li className="active" data-bg-color="#505050" style={{ backgroundColor: "rgb(80, 80, 80)" }}></li>
                    <li data-bg-color="#73707a" style={{ backgroundColor: "rgb(115, 112, 122)" }}></li>
                    <li data-bg-color="#c7bb9b" style={{ backgroundColor: "rgb(199, 187, 155)" }}></li>
                </ul>
            </div>
            <div style={{ display: (type === 'variable') ? 'flex' : 'none' }} className="product-size">
                <h6 className="title">Size</h6>
                <ul className="size-list">
                    <li>S</li>
                    <li className="active">M</li>
                    <li>L</li>
                    <li>XL</li>
                </ul>
            </div>
            <div style={{ display: (type === 'group' || type === 'normal' || type === 'variable') ? 'flex' : 'none' }} className="product-quick-action">
                <div className="qty-wrap">
                    <div className="pro-qty">
                        <input type="text" title="Quantity" value="1" />
                        <div className="dec qty-btn">-</div><div className="inc qty-btn">+</div></div>
                </div>
                <Link className="btn-theme" pathname="/shop-cart">Add To Cart</Link>
            </div>
            <div className="product-wishlist-compare">
                <Link pathname="/wishlist"><i className="fa-regular fa-heart fa-sm"></i>Add to Wishlist</Link>
                <Link pathname="/compare"><i className="fa-solid fa-shuffle"></i>Add to Compare</Link>
            </div>
            <div className="product-info-footer">
                <h6 className="code"><span>Code :</span>Ch-256xl</h6>
                <div className="social-icons">
                    <span>Share</span>
                    <a href="#/"><i className="fa fa-facebook"></i></a>
                    <a href="#/"><i className="fa fa-dribbble"></i></a>
                    <a href="#/"><i className="fa fa-pinterest-p"></i></a>
                </div>
            </div>
        </div>
    )
}

export default ProdDescription;