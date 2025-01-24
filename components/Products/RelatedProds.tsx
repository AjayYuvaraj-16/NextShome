import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { PRODUCT_JSON } from '@/json/productJson';
import ProductCard from './ProdCard';

import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';

const RelatedProducts = () => {
    const swiperRef = useRef<SwiperCore | null>(null);

    const handleNext = () => {
        swiperRef.current?.slideNext();
    };

    const handlePrev = () => {
        swiperRef.current?.slidePrev();
    };
    return (
        <section className="product-area product-best-seller-area">
            <div className="container pt--0">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="title">Related Products</h3>
                            <div className="desc">
                                <p>There are many variations of passages of Lorem Ipsum available</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="product-slider-wrap">
                            <Swiper spaceBetween={10} slidesPerView={1}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1200: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                }} modules={[Navigation]}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                className='product-slider-col4-container'>
                                {PRODUCT_JSON?.map((each, index) => {
                                    return (
                                        <SwiperSlide tabIndex={index} key={each?.id}>
                                            <ProductCard imgUrl={each?.image} title={each?.title}
                                                categories={each?.category} discount={each?.discount}
                                                key={each?.id} priceNew={`$${each?.price}`}
                                                priceOld={each?.oldPrice ? `$${each?.oldPrice}` : null} />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            {/* <!--== Add Swiper Arrows ==--> */}
                            <div className="product-swiper-btn-wrap">
                                <div onClick={handlePrev} className="product-swiper-btn-prev swiper-button-disabled" role="button" aria-label="Previous slide" aria-disabled="true">
                                    <i className="fa fa-arrow-left"></i>
                                </div>
                                <div onClick={handleNext} className="product-swiper-btn-next" role="button" aria-label="Next slide" aria-disabled="false">
                                    <i className="fa fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default RelatedProducts;