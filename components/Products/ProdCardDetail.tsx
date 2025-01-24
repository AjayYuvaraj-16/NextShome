import React from 'react';
import Link from '../Link';
import Image from 'next/image';

interface Categories {
    catUrl: string;
    catName: string;
}

interface ProductCardProps {
    title: string;
    description: string;
    imgUrl: string;
    discount?: string;
    categories?: Categories[];
    priceOld?: string | null;
    priceNew?: string;
}
const ProductCardDetail: React.FC<ProductCardProps> = ({ title, description, imgUrl, discount, categories, priceOld, priceNew }) => {
    return (
        <div className="product-item product-list-item">
            <div className="inner-content">
                <div className="product-thumb">
                    <Link pathname='/shop/product?t=normal'>
                        <Image src={imgUrl} width="322" height="360" alt="Image-HasTech" />
                    </Link>
                    {discount && <div className="product-flag">
                        <ul>
                            <li className="discount">{discount}</li>
                        </ul>
                    </div>}
                    <div className="product-action">
                        <Link className="btn-product-wishlist" pathname="/wishlist"><i className="fa fa-heart"></i></Link>
                        <Link className="btn-product-cart" pathname="/shop-cart"><i className="fa fa-shopping-cart"></i></Link>
                        <button type="button" className="btn-product-quick-view-open">
                            <i className="fa fa-arrows"></i>
                        </button>
                        <Link className="btn-product-compare" pathname="/compare"><i className="fa fa-random"></i></Link>
                    </div>
                    <Link className="banner-link-overlay" pathname="/shop">Shop</Link>
                </div>
                <div className="product-info">
                    <div className="category">
                        <ul>
                            {categories?.map((category, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <li key={index}><Link pathname={category?.catUrl}>{" "}{category?.catName}</Link></li>
                                        {(index != categories?.length - 1) && <li>/</li>}
                                    </React.Fragment>
                                );
                            })}
                        </ul>
                    </div>
                    <h4 className="title"><Link pathname='/shop/product?t=normal'>{title}</Link></h4>
                    <div className="prices">
                        {priceOld &&
                            <>
                                <span className="price-old">{priceOld}</span>
                                <span className="sep">-</span>
                            </>}
                        <span className="price">{priceNew}</span>
                    </div>
                    <p>{description}</p>
                    <Link className="btn-theme btn-sm" pathname="/shop-cart">Add To Cart</Link>
                </div>
            </div>
        </div>
    )
}
export default ProductCardDetail;