import React, { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';

import SwiperCore from 'swiper';

import { FreeMode, EffectFade, Thumbs } from 'swiper/modules';
import Fancybox from '../Common/FancyBox';
import Link from '../Link';
import Image from 'next/image';

const imageList = [
    {
        id: 1,
        thumbnailUrl: "/assets/img/shop/product-single/1.webp",
        imgUrl: "/assets/img/shop/product-single/nav-1.webp",
    },
    {
        id: 2,
        thumbnailUrl: "/assets/img/shop/product-single/2.webp",
        imgUrl: "/assets/img/shop/product-single/nav-2.webp",
    },
    {
        id: 3,
        thumbnailUrl: "/assets/img/shop/product-single/3.webp",
        imgUrl: "/assets/img/shop/product-single/nav-3.webp"
    },
    {
        id: 4,
        thumbnailUrl: "/assets/img/shop/product-single/4.webp",
        imgUrl: "/assets/img/shop/product-single/nav-4.webp"
    },
    {
        id: 5,
        thumbnailUrl: "/assets/img/shop/product-single/5.webp",
        imgUrl: "/assets/img/shop/product-single/nav-5.webp"
    },
]
const ProductDetailImage = ({ type }: { type?: string }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

    return (
        <div className="product-single-thumb">
            <Fancybox
                options={{
                    Carousel: {
                        infinite: false,
                    },
                }}
            >
                <Swiper
                    effect={'fade'}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, EffectFade, Thumbs]}
                    className='single-product-thumb single-product-thumb-slider'>
                    {imageList?.map((each, index) => {
                        return (
                            <SwiperSlide key={each?.id} tabIndex={index}>
                                <Link className="lightbox-image" data-fancybox="gallery" pathname={each?.thumbnailUrl}>
                                    <Image src={each?.thumbnailUrl} width="127" height="127" alt="Image-HasTech" />
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Fancybox>
            {type !== 'normal' &&
                <Swiper
                    onSwiper={setThumbsSwiper}
                    className='single-product-nav single-product-nav-slider'
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}>
                    {imageList?.map((each, index) => {
                        return (
                            <SwiperSlide key={each?.id} tabIndex={index}>
                                <Image src={each?.imgUrl} width="127" height="127" alt="Image-HasTech" />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            }
        </div>
    )
}

export default ProductDetailImage;