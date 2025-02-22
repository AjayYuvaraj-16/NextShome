import Link from '@/components/Link';
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import React, { useState } from 'react';

const Checkout = () => {
    const [accordion, setAccordion] = useState({ acc1: false, acc2: false })
    return (
        <MainLayout breadcrumb='Checkout'>
            <section className="shopping-checkout-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="checkout-page-login-wrap">
                                {/* <!--== Start Checkout Login Accordion ==--> */}
                                <div className="login-accordion" id="LoginAccordion">
                                    <div className="card">
                                        <h3>
                                            <i className="fa fa-info-circle"></i>
                                            Returning customer?
                                            <a onClick={() => setAccordion({ ...accordion, acc1: !accordion?.acc1 })}> Click here to login</a>
                                        </h3>
                                        <div id="loginaccordion" className={`collapse ${accordion?.acc1 ? 'show' : ''}`} data-bs-parent="#LoginAccordion">
                                            <div className="card-body">
                                                <div className="login-wrap">
                                                    <p>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
                                                    <form action="#" method="post">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label >Username or email <span className="required">*</span></label>
                                                                    <input id="logEmail" className="form-control" type="email" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group left-m">
                                                                    <label >Password <span className="required">*</span></label>
                                                                    <input id="logPass" className="form-control" type="password" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group mt-30">
                                                                    <button className="btn-login">Login</button>
                                                                    <div className="rememberme-account">
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input visually-hidden" id="remembermePass" />
                                                                            <label className="custom-control-label" >Remember me</label>
                                                                        </div>
                                                                    </div>
                                                                    <a className="lost-password" href="#">Lost your password?</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--== End Checkout Login Accordion ==--> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="checkout-page-coupon-wrap">
                                {/* <!--== Start Checkout Coupon Accordion ==--> */}
                                <div className="coupon-accordion" id="CouponAccordion">
                                    <div className="card">
                                        <h3>
                                            <i className="fa fa-info-circle"></i>
                                            Have a Coupon?
                                            <a onClick={() => setAccordion({ ...accordion, acc2: !accordion?.acc2 })}> Click here to enter your code</a>
                                        </h3>
                                        <div id="couponaccordion" className={`collapse ${accordion?.acc2 ? 'show' : ''}`} data-bs-parent="#CouponAccordion">
                                            <div className="card-body">
                                                <div className="apply-coupon-wrap">
                                                    <p>If you have a coupon code, please apply it below.</p>
                                                    <form action="#" method="post">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <input className="form-control" type="text" placeholder="Coupon code" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <button className="btn-coupon">Apply coupon</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--== End Checkout Coupon Accordion ==--> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            {/* <!--== Start Billing Accordion ==--> */}
                            <div className="checkout-billing-details-wrap">
                                <h2 className="title">Billing details</h2>
                                <div className="billing-form-wrap">
                                    <form action="#" method="post">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label >First name <abbr className="required" title="required">*</abbr></label>
                                                    <input id="f_name" type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label >Last name <abbr className="required" title="required">*</abbr></label>
                                                    <input id="l_name" type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label >Company name (optional)</label>
                                                    <input id="com_name" type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label >Country <abbr className="required" title="required">*</abbr></label>
                                                    <select id="country" className="form-control">
                                                        <option>Bangladesh</option>
                                                        <option>Afghanistan</option>
                                                        <option>Albania</option>
                                                        <option>Algeria</option>
                                                        <option>Armenia</option>
                                                        <option>India</option>
                                                        <option>Pakistan</option>
                                                        <option>England</option>
                                                        <option>London</option>
                                                        <option>London</option>
                                                        <option>China</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Street address <abbr className="required" title="required">*</abbr></label>
                                                    <input id="street-address" type="text" className="form-control" placeholder="House number and street name" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="visually-hidden">Street address 2 <abbr className="required" title="required">*</abbr></label>
                                                    <input id="street-address2" type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label >Town / City <abbr className="required" title="required">*</abbr></label>
                                                    <input id="town" type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label >District <abbr className="required" title="required">*</abbr></label>
                                                    <select id="district" className="form-control">
                                                        <option>Afghanistan</option>
                                                        <option>Albania</option>
                                                        <option>Algeria</option>
                                                        <option>Armenia</option>
                                                        <option>India</option>
                                                        <option>Pakistan</option>
                                                        <option>England</option>
                                                        <option>London</option>
                                                        <option>London</option>
                                                        <option>China</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Postcode / ZIP (optional)</label>
                                                    <input id="pz-code" type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label >Phone (optional)</label>
                                                    <input id="phone" type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group" data-margin-bottom="30" style={{ marginBottom: "30px" }}>
                                                    <label >Email address <abbr className="required" title="required">*</abbr></label>
                                                    <input id="email" type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div id="CheckoutBillingAccordion" className="col-md-12">
                                                <div className="checkout-box" data-margin-bottom="25" data-bs-toggle="collapse" data-bs-target="#CheckoutOne" role="toolbar" style={{ marginBottom: "25px" }}>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input visually-hidden" id="CreateAccount" />
                                                        <label className="custom-control-label" >Create an account?</label>
                                                    </div>
                                                </div>
                                                <div id="CheckoutOne" className="collapse" data-margin-top="30" data-bs-parent="#CheckoutBillingAccordion" style={{ marginBottom: "30px" }}>
                                                    <div className="form-group">
                                                        <label >Create account password <abbr className="required" title="required">*</abbr></label>
                                                        <input id="password" type="password" className="form-control" placeholder="Password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="CheckoutBillingAccordion2" className="col-md-12">
                                                <div className="checkout-box" data-margin-bottom="25" data-bs-toggle="collapse" data-bs-target="#CheckoutTwo" role="toolbar" style={{ marginBottom: "25px" }}>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input visually-hidden" id="ship-to-different-address" />
                                                        <label className="custom-control-label" >Ship to a different address?</label>
                                                    </div>
                                                </div>
                                                <div id="CheckoutTwo" className="collapse" data-margin-top="30" data-bs-parent="#CheckoutBillingAccordion2" style={{ marginBottom: "30px" }}>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label >First name <abbr className="required" title="required">*</abbr></label>
                                                                <input id="f_name2" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label >Last name <abbr className="required" title="required">*</abbr></label>
                                                                <input id="l_name2" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label >Company name (optional)</label>
                                                                <input id="com_name2" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label >Country <abbr className="required" title="required">*</abbr></label>
                                                                <select id="country2" className="form-control">
                                                                    <option>Bangladesh</option>
                                                                    <option>Afghanistan</option>
                                                                    <option>Albania</option>
                                                                    <option>Algeria</option>
                                                                    <option>Armenia</option>
                                                                    <option>India</option>
                                                                    <option>Pakistan</option>
                                                                    <option>England</option>
                                                                    <option>London</option>
                                                                    <option>London</option>
                                                                    <option>China</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label>Street address <abbr className="required" title="required">*</abbr></label>
                                                                <input id="street-address2-3" type="text" className="form-control" placeholder="House number and street name" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="visually-hidden">Street address 2 <abbr className="required" title="required">*</abbr></label>
                                                                <input id="street-address2-2" type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label >Town / City <abbr className="required" title="required">*</abbr></label>
                                                                <input id="town3" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label >District <abbr className="required" title="required">*</abbr></label>
                                                                <select id="district2" className="form-control">
                                                                    <option>Afghanistan</option>
                                                                    <option>Albania</option>
                                                                    <option>Algeria</option>
                                                                    <option>Armenia</option>
                                                                    <option>India</option>
                                                                    <option>Pakistan</option>
                                                                    <option>England</option>
                                                                    <option>London</option>
                                                                    <option>London</option>
                                                                    <option>China</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label>Postcode / ZIP (optional)</label>
                                                                <input id="pz-code2" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb--0">
                                                    <label>Order notes (optional)</label>
                                                    <textarea id="order-notes" className="form-control" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <!--== End Billing Accordion ==--> */}
                        </div>
                        <div className="col-lg-6">
                            {/* <!--== Start Order Details Accordion ==--> */}
                            <div className="checkout-order-details-wrap">
                                <div className="order-details-table-wrap table-responsive">
                                    <h2 className="title mb-25">Your order</h2>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-name">Product</th>
                                                <th className="product-total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table-body">
                                            <tr className="cart-item">
                                                <td className="product-name">Satin gown <span className="product-quantity">× 1</span></td>
                                                <td className="product-total">£69.99</td>
                                            </tr>
                                            <tr className="cart-item">
                                                <td className="product-name">Printed cotton t-shirt <span className="product-quantity">× 1</span></td>
                                                <td className="product-total">£20.00</td>
                                            </tr>
                                        </tbody>
                                        <tfoot className="table-foot">
                                            <tr className="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td>£89.99</td>
                                            </tr>
                                            <tr className="shipping">
                                                <th>Shipping</th>
                                                <td>Flat rate: £2.00</td>
                                            </tr>
                                            <tr className="order-total">
                                                <th>Total </th>
                                                <td>£91.99</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <div className="shop-payment-method">
                                        <div id="PaymentMethodAccordion">
                                            <div className="card">
                                                <div className="card-header" id="check_payments">
                                                    <h5 className="title" data-bs-toggle="collapse" data-bs-target="#itemOne" aria-controls="itemOne">Direct bank transfer</h5>
                                                </div>
                                                <div id="itemOne" className="collapse show" aria-labelledby="check_payments" data-bs-parent="#PaymentMethodAccordion">
                                                    <div className="card-body">
                                                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="check_payments2">
                                                    <h5 className="title" data-bs-toggle="collapse" data-bs-target="#itemTwo" aria-controls="itemTwo">Check payments</h5>
                                                </div>
                                                <div id="itemTwo" className="collapse" aria-labelledby="check_payments2" data-bs-parent="#PaymentMethodAccordion">
                                                    <div className="card-body">
                                                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="check_payments3">
                                                    <h5 className="title" data-bs-toggle="collapse" data-bs-target="#itemThree" aria-controls="itemTwo">Cash on delivery</h5>
                                                </div>
                                                <div id="itemThree" className="collapse" aria-labelledby="check_payments3" data-bs-parent="#PaymentMethodAccordion">
                                                    <div className="card-body">
                                                        <p>Pay with cash upon delivery.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="check_payments4">
                                                    <h5 className="title d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#itemFour" aria-controls="itemTwo">
                                                        <span>PayPal Express Checkout</span>
                                                        <Image src="/assets/img/photos/paypal2.webp" width="40" height="26" alt="Image-HasTech" />
                                                    </h5>
                                                </div>
                                                <div id="itemFour" className="collapse" aria-labelledby="check_payments4" data-bs-parent="#PaymentMethodAccordion">
                                                    <div className="card-body">
                                                        <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="p-text">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#/">privacy policy.</a></p>
                                        <div className="agree-policy">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" id="privacy" className="custom-control-input visually-hidden" />
                                                <label className="custom-control-label">I have read and agree to the website terms and conditions <span className="required">*</span></label>
                                            </div>
                                        </div>
                                        <Link className="btn-theme" pathname='/login'>Place order</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!--== End Order Details Accordion ==--> */}
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Checkout;