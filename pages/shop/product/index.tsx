import RelatedProducts from '@/components/Products/RelatedProds';
import ReviewDescription from '@/components/Products/Review';
import React, { useEffect } from 'react';

import ProductDetailImage from '@/components/Products/ProductImage';
import MainLayout from '@/layouts/MainLayout';
import ProdDescription from '@/components/Products/ProdDescription';
import { useRouter } from 'next/router';

const SingleProduct = () => {
    const router = useRouter();
    const { t } = router.query;
    useEffect(() => {
        if (!t) {
            router.push('/shop/product?t=normal');
        }
    }, [])
    return (
        <MainLayout breadcrumb='Product Detail'>
            <section className="product-area product-single-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product-single-item">
                                <div className="row">
                                    <div className="col-xl-6 d-md-flex d-xl-block justify-content-center">
                                        <ProductDetailImage type={t as string} />
                                    </div>
                                    <div className='col-xl-6'>
                                        <ProdDescription type={t as string} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ReviewDescription />
                        </div>
                    </div>
                </div>
            </section>
            <RelatedProducts />
        </MainLayout>
    )
}

export default SingleProduct;