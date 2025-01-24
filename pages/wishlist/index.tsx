import Link from '@/components/Link';
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import React from 'react';

const WishList = () => {
    return (
        <MainLayout breadcrumb='Wishlist'>
            <section className="shopping-wishlist-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shopping-wishlist-table table-responsive">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th className="product-remove">&nbsp;</th>
                                            <th className="product-thumb">&nbsp;</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-stock-status">Stock Status</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-action">&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="cart-wishlist-item">
                                            <td className="product-remove">
                                                <Link pathname="#/"><i className="fa fa-trash-o"></i></Link>
                                            </td>
                                            <td className="product-thumb">
                                                <Link pathname="/shop/product?t=normal">
                                                    <Image src="assets/img/shop/product-mini/1.webp" width="90" height="110" alt="Image-HasTech" />
                                                </Link>
                                            </td>
                                            <td className="product-name">
                                                <h4 className="title"><Link pathname="/shop/product?t=normal">Leather Mens Slipper</Link></h4>
                                            </td>
                                            <td className="product-stock-status">
                                                <span className="stock">In Stock</span>
                                            </td>
                                            <td className="product-price">
                                                <span className="price">£25.99</span>
                                            </td>
                                            <td className="product-action">
                                                <Link className="btn-cart" pathname="/shop-cart">Add to cart</Link>
                                            </td>
                                        </tr>
                                        <tr className="cart-wishlist-item">
                                            <td className="product-remove">
                                                <Link pathname="#/"><i className="fa fa-trash-o"></i></Link>
                                            </td>
                                            <td className="product-thumb">
                                                <Link pathname="/shop/product?t=normal">
                                                    <Image src="assets/img/shop/product-mini/2.webp" width="90" height="110" alt="Image-HasTech" />
                                                </Link>
                                            </td>
                                            <td className="product-name">
                                                <h4 className="title"><Link pathname="/shop/product?t=normal">Quickiin Mens shoes</Link></h4>
                                            </td>
                                            <td className="product-stock-status">
                                                <span className="stock">In Stock</span>
                                            </td>
                                            <td className="product-price">
                                                <span className="price">£69.99</span>
                                            </td>
                                            <td className="product-action">
                                                <Link className="btn-cart" pathname="/shop-cart">Add to cart</Link>
                                            </td>
                                        </tr>
                                        <tr className="cart-wishlist-item">
                                            <td className="product-remove">
                                                <Link pathname="#/"><i className="fa fa-trash-o"></i></Link>
                                            </td>
                                            <td className="product-thumb">
                                                <Link pathname="/shop/product?t=normal">
                                                    <Image src="assets/img/shop/product-mini/3.webp" width="90" height="110" alt="Image-HasTech" />
                                                </Link>
                                            </td>
                                            <td className="product-name">
                                                <h4 className="title"><Link pathname="/shop/product?t=normal">Rexpo Womens shoes</Link></h4>
                                            </td>
                                            <td className="product-stock-status">
                                                <span className="stock">In Stock</span>
                                            </td>
                                            <td className="product-price">
                                                <span className="price">£39.99</span>
                                            </td>
                                            <td className="product-action">
                                                <Link className="btn-cart" pathname="/shop-cart">Add to cart</Link>
                                            </td>
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

export default WishList;