import React, { useRef, } from 'react'
import Link from '../Link';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';

import SwiperCore from 'swiper';

import { FreeMode, EffectFade, Thumbs, Navigation } from 'swiper/modules';
import Image from 'next/image';

const imageList = [
    {
        id: 1,
        thumbnailUrl: "assets/img/slider/slider-01.webp",
        imgUrl: "assets/img/slider/slider-01.webp",
    },
    {
        id: 2,
        thumbnailUrl: "assets/img/slider/slider-03.webp",
        imgUrl: "assets/img/slider/slider-03.webp",
    },
]

const Banner = ({ breadcrumb }: { breadcrumb: string }) => {
    return (
        <div className="page-header-area" data-bg-img="/assets/img/photos/bg3.webp" style={{ backgroundImage: `url('/assets/img/photos/bg3.webp')` }}>
            <div className="container pt--0 pb--0">
                <div className="row">
                    <div className="col-12">
                        <div className="page-header-content">
                            <h2 className="title" data-aos="fade-down" data-aos-duration="1000">{breadcrumb}</h2>
                            <nav className="breadcrumb-area" data-aos="fade-down" data-aos-duration="1200">
                                <ul className="breadcrumb">
                                    <li><Link pathname="/">Home</Link></li>
                                    <li className="breadcrumb-sep">{"//"}</li>
                                    <li>{breadcrumb}</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;

export const HomeSlider = () => {

    const swiperRef = useRef<SwiperCore | null>(null);

    const handleNext = () => {
        swiperRef.current?.slideNext();
    };

    const handlePrev = () => {
        swiperRef.current?.slidePrev();
    };

    return (
        <section className="home-slider-area">
            <Swiper
                className='home-slider-container default-slider-container'
                spaceBetween={10}
                navigation={true}
                loop={true}
                effect={'fade'}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                watchSlidesProgress={true}
                wrapperClass="swiper-wrapper home-slider-wrapper slider-default"
                modules={[FreeMode, Navigation, Thumbs, EffectFade]}>
                {imageList?.map((each, index) => {
                    return (
                        <SwiperSlide className='swiper-slide-duplicate' key={each?.id} tabIndex={index}>
                            <div className="slider-content-area" data-bg-img="assets/img/shape/1.webp" style={{ backgroundImage: "url('/assets/img/shape/1.webp')" }}>
                                <div className="container">
                                    <div className="slider-container">
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-sm-6 col-md-5">
                                                <div className="slider-content">
                                                    <div className="content">
                                                        <div className="title-box">
                                                            <h2 className="title">Exclusive New Shoes</h2>
                                                        </div>
                                                        <div className="desc-box">
                                                            <p className="desc">Up To 30% Off All Shoes &amp; Products</p>
                                                        </div>
                                                        <div className="btn-box">
                                                            <a className="btn-slider" href="shop.html">Shop Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-6">
                                                <div className="slider-thumb">
                                                    <div className="thumb scene" style={{ transform: "translate3d(0px, 0px, 0px)", transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}>
                                                        <span className="scene-layer" data-depth=".3" style={{ transform: "translate3d(-2.97099%, -1.39002%, 0px)", transformStyle: "preserve-3d", backfaceVisibility: "hidden", position: "relative", display: "block", height: "100%", width: "100%", left: "0px", top: "0px" }}><Image src={each?.imgUrl} width="548" height="649" alt="Image-HasTech" /></span>
                                                    </div>
                                                    <div className="shape-group mousemove">
                                                        <div className="shape-group-one mousemove-layer" data-speed=".8" data-bg-img="/assets/img/shape/2.webp" style={{ backgroundImage: "url('/assets/img/shape/2.webp')", transform: "translateX(2.108px) translateY(2.658px);" }}></div>
                                                        <div className="shape-group-two scene" style={{ transform: "translate3d(0px, 0px, 0px)", transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}><span className="scene-layer" data-depth=".6" style={{ transform: "translate3d(-5.94197%, -2.78003%, 0px)", transformStyle: "preserve-3d", backfaceVisibility: "hidden", position: "relative", display: "block", height: "100%", width: "100%", left: "0px", top: "0px" }}><Image src="/assets/img/shape/3.webp" width="471" height="462" alt="Image-HasTech" /></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="slider-text-shape">NEW 2022</h2>
                            </div>
                        </SwiperSlide>
                    )
                })}
                <div className="swiper-btn-wrap">
                    <div onClick={handlePrev} className="swiper-btn-prev" role="button" aria-label="Previous slide" aria-disabled="true">
                        <i className="fa fa-arrow-left"></i>
                    </div>
                    <div onClick={handleNext} className="swiper-btn-next" role="button" aria-label="Next slide" aria-disabled="false">
                        <i className="fa fa-arrow-right"></i>
                    </div>
                </div>
            </Swiper>
        </section>
    )
}


