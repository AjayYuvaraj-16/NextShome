import Link from '@/components/Link';
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import React from 'react';

const Compare = () => {
    return (
        <MainLayout breadcrumb='Shop Compare'>
            <section className="shopping-compare-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shopping-compare-form table-responsive">

                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th className="fz-13">Product Info</th>
                                            <td>
                                                <div className="product-remove">
                                                    <Link pathname="/"><i className="fa fa-times"></i>Remove</Link>
                                                </div>
                                                <div className="product-thumb">
                                                    <Link pathname="/shop/product?t=normal">
                                                        <Image src="assets/img/shop/product-mini/1.webp" width="90" height="110" alt="Image-HasTech" />
                                                    </Link>
                                                </div>
                                                <div className="product-name">
                                                    <h4 className="title"><Link pathname="/shop/product?t=normal">Leather Mens Slipper</Link></h4>
                                                </div>
                                                <Link className="btn-cart" pathname="/shop-cart">Add to cart</Link>
                                            </td>
                                            <td>
                                                <div className="product-remove">
                                                    <Link pathname="#/"><i className="fa fa-times"></i>Remove</Link>
                                                </div>
                                                <div className="product-thumb">
                                                    <Link pathname="/shop/product?t=normal">
                                                        <Image src="assets/img/shop/product-mini/2.webp" width="90" height="110" alt="Image-HasTech" />
                                                    </Link>
                                                </div>
                                                <div className="product-name">
                                                    <h4 className="title"><Link pathname="/shop/product?t=normal">Quickiin Mens shoes</Link></h4>
                                                </div>
                                                <Link className="btn-cart" pathname="/shop-cart">Add to cart</Link>
                                            </td>
                                            <td>
                                                <div className="product-remove">
                                                    <Link pathname="#/"><i className="fa fa-times"></i>Remove</Link>
                                                </div>
                                                <div className="product-thumb">
                                                    <Link pathname="/shop/product?t=normal">
                                                        <Image src="assets/img/shop/product-mini/3.webp" width="90" height="110" alt="Image-HasTech" />
                                                    </Link>
                                                </div>
                                                <div className="product-name">
                                                    <h4 className="title"><Link pathname="/shop/product?t=normal">Rexpo Womens shoes</Link></h4>
                                                </div>
                                                <Link className="btn-cart" pathname="/shop-cart">Add to cart</Link>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>Price</th>
                                            <td className="price">£69.99</td>
                                            <td className="price">£69.99</td>
                                            <td className="price">£69.99</td>
                                        </tr>

                                        <tr>
                                            <th>Sku</th>
                                            <td className="product-sku">REF. LA-791</td>
                                            <td className="product-sku">REF. LA-779</td>
                                            <td className="product-sku">REF. LA-788</td>
                                        </tr>

                                        <tr>
                                            <th>Description</th>
                                            <td className="product-desc">Class aptent taciti sociosqu ad litora torquent per conubia nostra,…</td>
                                            <td className="product-desc">Class aptent taciti sociosqu ad litora torquent per conubia nostra,…</td>
                                            <td className="product-desc">Class aptent taciti sociosqu ad litora torquent per conubia nostra,…</td>
                                        </tr>

                                        <tr>
                                            <th>Availability</th>
                                            <td><span className="product-stock">In stock</span></td>
                                            <td><span className="product-stock">In stock</span></td>
                                            <td><span className="product-stock">In stock</span></td>
                                        </tr>

                                        <tr>
                                            <th>Weight</th>
                                            <td className="product-weight">N/A</td>
                                            <td className="product-weight">N/A</td>
                                            <td className="product-weight">N/A</td>
                                        </tr>

                                        <tr>
                                            <th>Dimensions</th>
                                            <td className="product-dimensions">N/A</td>
                                            <td className="product-dimensions">N/A</td>
                                            <td className="product-dimensions">N/A</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Compare;