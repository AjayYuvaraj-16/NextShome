import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Link from '@/components/Link';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <MainLayout breadcrumb={'About Us'}>
            <AboutArea />
            <DividerAreaWrapper />
            <TeamArea />
            <TestimonialArea />
            <LatestBlogArea />
        </MainLayout>
    )
}

export default AboutUs;


const AboutArea = () => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
            // Calculate mouse position relative to window center
            const x = (window.innerWidth / 2 - e.clientX) / 100;
            const y = (window.innerHeight / 2 - e.clientY) / 100;

            setPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <section className="about-area about-default-wrapper">
            <div className="container">
                <div className="about-item position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-thumb">
                                <div className="shape-one scene" style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0px)`, transformStyle: "preserve-3d", backfaceVisibility: "hidden", position: "relative" }}>
                                    <span className="scene-layer" data-depth=".2" style={{
                                        transform: "translate3d(-1.98874%, -1.19026%, 0px)", transformStyle: "preserve-3d", backfaceVisibility: "hidden", position: "relative", display: "block", height:
                                            "100%", width: "100%", left: "0px", top: "0px"
                                    }}>
                                        <Image src="/assets/img/about/1.webp" width="570" height="368" alt="Image-HasTech" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h4 className="sub-title">Smart Life</h4>
                                <h3 className="title">With Smart Shoes</h3>
                                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmol tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minivel quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata non proident, sunt in culpa qui officia.</p>
                                <Link className="btn-theme" pathname="/contact-us">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const DividerAreaWrapper = () => {
    return (
        <section className="bg-color-f2 position-relative z-index-1">
            <div className="container pt--0 pb--0">
                <div className="row divider-wrap divider-style1">
                    <div className="col-lg-6">
                        <div className="divider-content" data-title="NEW">
                            <h4 className="sub-title">Saving 50%</h4>
                            <h2 className="title">All Online Store</h2>
                            <p className="desc">Offer Available All Shoes &amp; Products</p>
                            <Link className="btn-theme" pathname="/shop/column4">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-layer-wrap">
                <div className="bg-layer-style z-index--1 parallax" data-speed="1.05" data-bg-img="/assets/img/photos/bg1.webp" style={{ backgroundImage: "none" }} data-jarallax-original-styles={{ backgroundImage: "url(assets/img/photos/bg1.webp)" }}><div id="jarallax-container-0" style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none", zIndex: "-100" }}><div style={{ backgroundPosition: "50% 50%", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: 'url(https://htmldemo.net/shome/shome/assets/img/photos/bg1.webp)', position: "absolute", top: '28px', left: '0px', width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', marginTop: '108.164px', transform: 'translate3d(0px, -136.063px, 0px)' }}></div></div></div>
            </div>
        </section>
    )
}

const TeamArea = () => {
    return (
        <section className="team-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="title">Our Team</h3>
                            <div className="desc">
                                <p>There are many variations of passages of Lorem Ipsum available</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        {/* <!--== Start Team Item ==--> */}
                        <div className="team-item">
                            <div className="inner-content">
                                <div className="thumb">
                                    <Link pathname='/about-us'><Image src="/assets/img/team/1.webp" width="270" height="270" alt="Image-HasTech" /></Link>
                                    <div className="member-icons">
                                        <Link pathname="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></Link>
                                        <Link pathname="https://dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></Link>
                                        <Link pathname="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest-p"></i></Link>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link pathname='/about-us'>Jander Durham</Link></h4>
                                    <p>Team Member</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--== End Team Item ==--> */}
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        {/* <!--== Start Team Item ==--> */}
                        <div className="team-item">
                            <div className="inner-content">
                                <div className="thumb">
                                    <Link pathname='/about-us'><Image src="/assets/img/team/2.webp" width="270" height="270" alt="Image-HasTech" /></Link>
                                    <div className="member-icons">
                                        <Link pathname="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></Link>
                                        <Link pathname="https://dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></Link>
                                        <Link pathname="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest-p"></i></Link>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link pathname='/about-us'>Jaren Hammer</Link></h4>
                                    <p>Team Member</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--== End Team Item ==--> */}
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        {/* <!--== Start Team Item ==--> */}
                        <div className="team-item">
                            <div className="inner-content">
                                <div className="thumb">
                                    <Link pathname='/about-us'><Image src="/assets/img/team/3.webp" width="270" height="270" alt="Image-HasTech" /></Link>
                                    <div className="member-icons">
                                        <Link pathname="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></Link>
                                        <Link pathname="https://dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></Link>
                                        <Link pathname="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest-p"></i></Link>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link pathname='/about-us'>Nurdan Denkel</Link></h4>
                                    <p>Team Member</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--== End Team Item ==--> */}
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        {/* <!--== Start Team Item ==--> */}
                        <div className="team-item">
                            <div className="inner-content">
                                <div className="thumb">
                                    <Link pathname='/about-us'><Image src="/assets/img/team/4.webp" width="270" height="270" alt="Image-HasTech" /></Link>
                                    <div className="member-icons">
                                        <Link pathname="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></Link>
                                        <Link pathname="https://dribbble.com/" target="_blank"><i className="fa fa-dribbble"></i></Link>
                                        <Link pathname="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest-p"></i></Link>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link pathname='/about-us'>Monroe Bond</Link></h4>
                                    <p>Team Member</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--== End Team Item ==--> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

const TestimonialArea = () => {
    return (
        <section className="testimonial-area bg-color-f2 position-relative z-index-1">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="title">Client Feedback</h3>
                            <div className="desc">
                                <p>There are many variations of passages of Lorem Ipsum available</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                            }}>
                            <SwiperSlide>
                                {/* <!--== Start Testimonial Item ==--> */}
                                <div className="testimonial-item">
                                    <div className="testi-inner-content">
                                        <div className="testi-thumb">
                                            <Image src="/assets/img/testimonial/1.webp" width="90" height="90" alt="Image-HasTech" />
                                        </div>
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna.</p>
                                            <div className="testi-author">
                                                <div className="testi-info">
                                                    <span className="name"><Link pathname='/about-us'>Jaren Hammer</Link></span>
                                                </div>
                                            </div>
                                            <div className="testi-quote"><Image src="/assets/img/icons/quote1.webp" width="62" height="44" alt="Image-HasTech" /></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--== End Testimonial Item ==--> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/* <!--== Start Testimonial Item ==--> */}
                                <div className="testimonial-item">
                                    <div className="testi-inner-content">
                                        <div className="testi-thumb">
                                            <Image src="/assets/img/testimonial/2.webp" width="90" height="90" alt="Image-HasTech" />
                                        </div>
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna.</p>
                                            <div className="testi-author">
                                                <div className="testi-info">
                                                    <span className="name"><Link pathname='/about-us'>Dorian Cordova</Link></span>
                                                </div>
                                            </div>
                                            <div className="testi-quote"><Image src="/assets/img/icons/quote1.webp" width="62" height="44" alt="Image-HasTech" /></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--== End Testimonial Item ==--> */}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="shape-group-style3">
                <div className="shape-group-one"><Image src="/assets/img/shape/10.webp" width="274" height="121" alt="Image-HasTech" /></div>
                <div className="shape-group-two"><Image src="/assets/img/shape/11.webp" width="215" height="183" alt="Image-HasTech" /></div>
                <div className="shape-group-three"><Image src="/assets/img/shape/12.webp" width="288" height="166" alt="Image-HasTech" /></div>
                <div className="shape-group-four"><Image src="/assets/img/shape/17.webp" width="493" height="340" alt="Image-HasTech" /></div>
            </div>
        </section>
    )
}

export const LatestBlogArea = () => {
    return (
        <section className="blog-area blog-default-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="title">Latest Blog</h3>
                            <div className="desc">
                                <p>There are many variations of passages of Lorem Ipsum available</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        {/* <!--== Start Blog Item ==--> */}
                        <div className="post-item">
                            <div className="inner-content">
                                <div className="thumb">
                                    <Link pathname='/blog/detail'><Image src="/assets/img/blog/1.webp" width="370" height="260" alt="Image-HasTech" /></Link>
                                </div>
                                <div className="content">
                                    <div className="meta-post">
                                        <ul>
                                            <li className="post-date"><i className="fa fa-calendar"></i><Link pathname='/blog/column3'>27,Jun 2030</Link></li>
                                            <li className="author-info"><i className="fa fa-user"></i><Link pathname='/blog/column3'>Oaklee Odom</Link></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><Link pathname="/blog/detail">Lorem ipsum dolor ametcons adipisicing elit sed</Link></h4>
                                    <Link pathname='/blog/column3' className="post-btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--== End Blog Item ==--> */}
                    </div>
                    <div className="col-md-6 col-lg-4">
                        {/* <!--== Start Blog Item ==--> */}
                        <div className="post-item">
                            <div className="inner-content">
                                <div className="thumb">
                                    <Link pathname="/blog/details"><Image src="/assets/img/blog/2.webp" width="370" height="260" alt="Image-HasTech" /></Link>
                                </div>
                                <div className="content">
                                    <div className="meta-post">
                                        <ul>
                                            <li className="post-date"><i className="fa fa-calendar"></i><Link pathname='/blog/column3'>27,Jun 2030</Link></li>
                                            <li className="author-info"><i className="fa fa-user"></i><Link pathname='/blog/column3'>Oaklee Odom</Link></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><Link pathname="/blog/detail">Celebrity Daughter Opens About Upto Having Her Eye</Link></h4>
                                    <Link className="post-btn" pathname="/blog">Read More</Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--== End Blog Item ==--> */}
                    </div>
                    <div className="col-md-6 col-lg-4">
                        {/* <!--== Start Blog Item ==--> */}
                        <div className="post-item">
                            <div className="inner-content">
                                <div className="thumb">
                                    <Link pathname="blog/detail"><Image src="/assets/img/blog/3.webp" width="370" height="260" alt="Image-HasTech" /></Link>
                                </div>
                                <div className="content">
                                    <div className="meta-post">
                                        <ul>
                                            <li className="post-date"><i className="fa fa-calendar"></i><Link pathname='/blog/column3'>27,Jun 2030</Link></li>
                                            <li className="author-info"><i className="fa fa-user"></i><Link pathname='/blog/column3'>Oaklee Odom</Link></li>
                                        </ul>
                                    </div>
                                    <h4 className="title"><Link pathname="/blog/details">Romantic Love Stories Of Hollywood Popular Celebrities</Link></h4>
                                    <Link className="post-btn" pathname="/blog">Read More</Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--== End Blog Item ==--> */}
                    </div>
                </div>
            </div>
        </section>
    )
}