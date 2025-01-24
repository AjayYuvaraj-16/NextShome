import Link from '@/components/Link';
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import React from 'react';

const ShoppingCart = () => {
    return (
        <MainLayout breadcrumb='Shopping Cart'>
            <section className="shopping-cart-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shopping-cart-form table-responsive">
                                <form action="#" method="post">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className="product-remove">&nbsp;</th>
                                                <th className="product-thumb">&nbsp;</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="cart-product-item">
                                                <td className="product-remove">
                                                    <Link pathname="/"><i className="fa fa-trash-o"></i></Link>
                                                </td>
                                                <td className="product-thumb">
                                                    <Link pathname="/shop/product?t=normal">
                                                        <Image src="assets/img/shop/product-mini/1.webp" width="90" height="110" alt="Image-HasTech" />
                                                    </Link>
                                                </td>
                                                <td className="product-name">
                                                    <h4 className="title"><Link pathname="/shop/product?t=normal">Leather Mens Slipper</Link></h4>
                                                </td>
                                                <td className="product-price">
                                                    <span className="price">£69.99</span>
                                                </td>
                                                <td className="product-quantity">
                                                    <div className="pro-qty">
                                                        <input type="text" className="quantity" title="Quantity" value="1" />
                                                        <div className="dec qty-btn">-</div><div className="inc qty-btn">+</div></div>
                                                </td>
                                                <td className="product-subtotal">
                                                    <span className="price">£69.99</span>
                                                </td>
                                            </tr>
                                            <tr className="cart-product-item">
                                                <td className="product-remove">
                                                    <Link pathname="/"><i className="fa fa-trash-o"></i></Link>
                                                </td>
                                                <td className="product-thumb">
                                                    <Link pathname="/shop/product?t=normal">
                                                        <Image src="assets/img/shop/product-mini/2.webp" width="90" height="110" alt="Image-HasTech" />
                                                    </Link>
                                                </td>
                                                <td className="product-name">
                                                    <h4 className="title"><Link pathname="/shop/product?t=normal">Quickiin Mens shoes</Link></h4>
                                                </td>
                                                <td className="product-price">
                                                    <span className="price">£20.00</span>
                                                </td>
                                                <td className="product-quantity">
                                                    <div className="pro-qty">
                                                        <input type="text" className="quantity" title="Quantity" value="1" />
                                                        <div className="dec qty-btn">-</div><div className="inc qty-btn">+</div></div>
                                                </td>
                                                <td className="product-subtotal">
                                                    <span className="price">£20.00</span>
                                                </td>
                                            </tr>
                                            <tr className="cart-product-item">
                                                <td className="product-remove">
                                                    <Link pathname="/"><i className="fa fa-trash-o"></i></Link>
                                                </td>
                                                <td className="product-thumb">
                                                    <Link pathname="/shop/product?t=normal">
                                                        <Image src="assets/img/shop/product-mini/3.webp" width="90" height="110" alt="Image-HasTech" />
                                                    </Link>
                                                </td>
                                                <td className="product-name">
                                                    <h4 className="title"><Link pathname="/shop/product?t=normal">Rexpo Womens shoes</Link></h4>
                                                </td>
                                                <td className="product-price">
                                                    <span className="price">£39.00</span>
                                                </td>
                                                <td className="product-quantity">
                                                    <div className="pro-qty">
                                                        <input type="text" className="quantity" title="Quantity" value="1" />
                                                        <div className="dec qty-btn">-</div><div className="inc qty-btn">+</div></div>
                                                </td>
                                                <td className="product-subtotal">
                                                    <span className="price">£39.00</span>
                                                </td>
                                            </tr>
                                            <tr className="actions">
                                                <td className="border-0" colSpan={6}>
                                                    <button type="submit" className="update-cart" disabled>Update cart</button>
                                                    <button type="submit" className="clear-cart">Clear Cart</button>
                                                    <Link className="btn-theme btn-flat" pathname='/shop'>Continue Shopping</Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row row-gutter-50">
                        <div className="col-md-6 col-lg-4">
                            <div id="CategoriesAccordion" className="shipping-form-calculate">
                                <div className="section-title-cart">
                                    <h5 className="title">Calculate Shipping</h5>
                                    <div className="desc">
                                        <p>Estimate your shipping fee *</p>
                                    </div>
                                </div>
                                <span data-bs-toggle="collapse" data-bs-target="#CategoriesTwo" aria-expanded="true" role="button">Calculate shipping</span>
                                <div id="CategoriesTwo" className="collapse show" data-bs-parent="#CategoriesAccordion">
                                    <form action="#" method="post">
                                        <div className="row row-gutter-50">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="visually-hidden" >State</label>
                                                    <select id="FormCountry" className="form-control">
                                                        <option selected>Select Link country…</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="visually-hidden">State / County</label>
                                                    <input type="text" id="stateCounty" className="form-control" placeholder="State / County" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="visually-hidden">Town / City</label>
                                                    <input type="text" id="townCity" className="form-control" placeholder="Town / City" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="visually-hidden">Postcode / ZIP</label>
                                                    <input type="text" id="postcodeZip" className="form-control" placeholder="Postcode / ZIP" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <button type="submit" className="update-totals">Update totals</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="shipping-form-coupon">
                                <div className="section-title-cart">
                                    <h5 className="title">Coupon Code</h5>
                                    <div className="desc">
                                        <p>Enter your coupon code if you have one.</p>
                                    </div>
                                </div>
                                <form action="#" method="post">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="visually-hidden">Coupon Code</label>
                                                <input type="text" id="couponCode" className="form-control" placeholder="Enter your coupon code.." />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <button type="submit" className="coupon-btn">Apply coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="shipping-form-cart-totals">
                                <div className="section-title-cart">
                                    <h5 className="title">Cart totals</h5>
                                </div>
                                <div className="cart-total-table">
                                    <table className="table">
                                        <tbody>
                                            <tr className="cart-subtotal">
                                                <td>
                                                    <p className="value">Subtotal</p>
                                                </td>
                                                <td>
                                                    <p className="price">£128.00</p>
                                                </td>
                                            </tr>
                                            <tr className="shipping">
                                                <td>
                                                    <p className="value">Shipping</p>
                                                </td>
                                                <td>
                                                    <ul className="shipping-list">
                                                        <li className="radio">
                                                            <input type="radio" name="shipping" id="radio1" checked />
                                                            <label><span></span> Flat Rate</label>
                                                        </li>
                                                        <li className="radio">
                                                            <input type="radio" name="shipping" id="radio2" />
                                                            <label><span></span> Free Shipping</label>
                                                        </li>
                                                        <li className="radio">
                                                            <input type="radio" name="shipping" id="radio3" />
                                                            <label><span></span> Local Pickup</label>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr className="order-total">
                                                <td>
                                                    <p className="value">Total</p>
                                                </td>
                                                <td>
                                                    <p className="price">£128.00</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <Link className="btn-theme btn-flat" pathname="/checkout">Proceed to checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default ShoppingCart;