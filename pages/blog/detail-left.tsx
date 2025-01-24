import SideBar from '@/components/Blog/SideBar';
import Link from '@/components/Link';
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import React from 'react';

const BlogDetailLeftSideBar = () => {
    return (
        <MainLayout breadcrumb='Blog Detail Sidebar'>
            <section className="blog-details-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-8 order-0 order-xl-2 aos-init aos-animate" data-aos="fade-left">
                            <div className="blog-details-content-wrap details-left">
                                <div className="blog-details-item">
                                    <div className="blog-details-thumb">
                                        <Image src="/assets/img/blog/details1.webp" width="750" height="459" alt="Image-HasTech" />
                                    </div>
                                    <div className="blog-meta-post">
                                        <ul>
                                            <li className="post-date"><i className="fa fa-calendar"></i><Link pathname="/blog/column4">22,Jun 2022</Link></li>
                                            <li className="author-info"><i className="fa fa-user"></i><Link pathname="/blog/column4">Hector Lovett</Link></li>
                                        </ul>
                                    </div>
                                    <h3 className="main-title">Lorem ipsum dolor sit amet conse adipisi elit sed do eiusmod tempor.</h3>
                                    <div className="details-wrapper details-wrapper-style1" data-margin-bottom="38" style={{ marginBottom: '38px' }}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eto dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcol laboris nisi ut aliquipp ex ea commodo consequat. Duis aute irure dolor in reprehenderit inloifk voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaec cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <blockquote>
                                            <div className="inner-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisici elit sed do eiusmod tempor incididunt ut</p>
                                                <span className="user-name">Rachel Leonard</span>
                                                <Image className="inner-shape" src="/assets/img/icons/quote2.webp" width="82" height="59" alt="Image-HasTech" />
                                            </div>
                                        </blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eto dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcol laboris nisi ut aliquipp ex ea commodo consequat. Duis aute irure dolor in reprehenderit inloifk voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                    <div className="details-wrapper details-wrapper-style2">
                                        <p><Image className="p-image-right" src="/assets/img/blog/details2.webp" width="370" height="400" alt="Image-HasTech" /><span>Lorem ipsum dolor sit amet, consec adipisic elit, sed do eius tempor incididu ut labore et dolore ma aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nil ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat velit esse cillum dolore</span></p>
                                        <p className="mb-25"> leu fugiat nulla pariatur. Excepteur sintocca cupidatat non proident, sunt in culpa qui off deserunt mollit anim id est laborum. Sed utl perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eto dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcol laboris nisi ut aliquipp ex ea commodo consequat. Duis aute irure dolor in reprehenderit inloifk voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                    <div className="blog-details-footer">
                                        <div className="tage-list">
                                            <span>Tages:</span>
                                            <Link pathname="/blog/column4">Mobile</Link>,
                                            <Link pathname="/blog/column4">Laptop</Link>,
                                            <Link pathname="/blog/column4">Smart</Link>,
                                            <Link pathname="/blog/column4">TV</Link>
                                        </div>
                                        <div className="social-icons">
                                            <span>Share:</span>
                                            <Link pathname="#/"><i className="fa fa-facebook"></i></Link>
                                            <Link pathname="#/"><i className="fa fa-dribbble"></i></Link>
                                            <Link pathname="#/"><i className="fa fa-pinterest-p"></i></Link>
                                            <Link pathname="#/"><i className="fa fa-twitter"></i></Link>
                                        </div>
                                    </div>
                                    <div className="article-next-previous">
                                        <div className="arrow-item previous">
                                            <div className="arrow-thumb">
                                                <Link pathname="/blog/detail"><Image src="/assets/img/blog/s4.webp" width="98" height="101" alt="" /></Link>
                                                <Link className="overlay" pathname="/blog/detail"><i className="fa fa-angle-left"></i></Link>
                                            </div>
                                            <div className="arrow-content">
                                                <span className="date"><Link pathname="/blog/column4"><i className="fa fa-calendar"></i>26 March, 2022</Link></span>
                                                <h6 className="title"><Link pathname="/blog/detail">Lorem ipsum dolorl amet conse adip</Link></h6>
                                            </div>
                                        </div>
                                        <div className="arrow-item next">
                                            <div className="arrow-thumb">
                                                <Link pathname="/blog/detail"><Image src="/assets/img/blog/s1.webp" width="98" height="101" alt="" /></Link>
                                                <Link className="overlay" pathname="/blog/detail"><i className="fa fa-angle-right"></i></Link>
                                            </div>
                                            <div className="arrow-content">
                                                <span className="date"><Link pathname="/blog/column4">25 March, 2022<i className="fa fa-calendar"></i></Link></span>
                                                <h6 className="title"><Link pathname="/blog/detail">Lorem ipsum dolorl amet conse adip</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--== Start Comment View Item ==--> */}
                                <div className="comment-view-area">
                                    <h4 className="title-main">Comments</h4>
                                    <div className="comment-view-content">
                                        <div className="single-comment">
                                            <div className="author-pic">
                                                <Link pathname="/blog/column4"><Image src="/assets/img/blog/author1.webp" width="101" height="118" alt="Image-HasTech" /></Link>
                                            </div>
                                            <div className="author-info">
                                                <h4 className="title">
                                                    <Link pathname="/blog/column4">Marie Jensen</Link>
                                                    <span> - </span>
                                                    <Link className="comment-date" pathname="/blog/column4">22 August, 2022</Link>
                                                </h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp labore et dol magna aliqua. Ut enim ad minim veniam.</p>
                                                <div className="author-info-footer">
                                                    <Link className="comment-reply" pathname="#/">Reply</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-comment reply-comment">
                                            <div className="author-pic">
                                                <Link pathname="/blog/column4"><Image src="/assets/img/blog/author2.webp" width="101" height="118" alt="Image-HasTech" /></Link>
                                            </div>
                                            <div className="author-info">
                                                <h4 className="title">
                                                    <Link pathname="/blog/column4">Rachel Leonard</Link>
                                                    <span> - </span>
                                                    <Link className="comment-date" pathname="/blog/column4">22 August, 2022</Link>
                                                </h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedd labore et dol magna aliqua. Ut enim ad.</p>
                                                <div className="author-info-footer">
                                                    <Link className="comment-reply" pathname="#/">Reply</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-comment">
                                            <div className="author-pic">
                                                <Link pathname="/blog/column4"><Image src="/assets/img/blog/author3.webp" width="101" height="118" alt="Image-HasTech" /></Link>
                                            </div>
                                            <div className="author-info">
                                                <h4 className="title">
                                                    <Link pathname="/blog/column4">Amilia Luna</Link>
                                                    <span> - </span>
                                                    <Link className="comment-date" pathname="/blog/column4">22 August, 2022</Link>
                                                </h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp labore et dol magna aliqua. Ut enim ad minim veniam.</p>
                                                <div className="author-info-footer">
                                                    <Link className="comment-reply" pathname="#/">Reply</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--== End Comment View Item ==--> */}

                                {/* <!--== Start Comment Item ==--> */}
                                <div className="comment-form-area">
                                    <h4 className="title-main">Leave Link Comments</h4>
                                    <div className="comment-form-content">
                                        <form action="#">
                                            <div className="row ">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Name *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="email" placeholder="Email *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Subject (Optinal)" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb--0">
                                                        <textarea className="form-control" placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb--0">
                                                        <button type="submit" className="btn-theme">Send Link Comment</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* <!--== End Comment Item ==--> */}
                            </div>
                        </div>
                        <div className="col-xl-4 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-right">
                            <SideBar />
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default BlogDetailLeftSideBar;