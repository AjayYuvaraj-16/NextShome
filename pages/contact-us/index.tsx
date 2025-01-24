import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import React, { useState } from 'react';

const ContactUs = () => {
    const [showErr, setShowErr] = useState(false);
    return (
        <MainLayout breadcrumb={'Contact Us'}>
            <section className="contact-area contact-page-area">
                <div className="container">
                    <div className="row contact-page-wrapper">
                        <div className="col-xl-9">
                            <div className="contact-form-wrap aos-init aos-animate" data-aos="fade-right">
                                <div className="contact-form-title">
                                    <h2 className="title">We Are Here! <br />Please Send A Quest</h2>
                                </div>
                                {/* <!--== Start Contact Form ==--> */}
                                {/* <!-- Replace with your own PHP mailer script and place it to action --> */}
                                {/* https://whizthemes.com/mail-php/raju/arden/mail.php */}
                                <div className="contact-form">
                                    <form id="contact-form" action="" method="POST">
                                        <div className="row row-gutter-20">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" name="con_name" placeholder="Name *" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="email" name="con_email" placeholder="Email *" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Subject (Optinal)" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb--0">
                                                    <textarea className="form-control" name="con_message" placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb--0">
                                                    <button className="btn-theme" type="submit" onClick={() => setShowErr(true)}>Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* <!--== End Contact Form ==--> */}

                                {/* <!--== Message Notification ==--> */}
                                {showErr && <div className={`form-message alert alert-danger fade ${showErr ? 'show' : ''}`}>Oops! An error occurred and your message could not be sent.</div>}
                                <div className="shape-group-style2">
                                    <div className="shape-group-one"><Image src="assets/img/shape/13.webp" width="193" height="168" alt="Image-HasTech" /></div>
                                    <div className="shape-group-two"><Image src="assets/img/shape/15.webp" width="221" height="113" alt="Image-HasTech" /></div>
                                    <div className="shape-group-three"><Image src="assets/img/shape/16.webp" width="129" height="147" alt="Image-HasTech" /></div>
                                    <div className="shape-group-four"><Image src="assets/img/shape/17.webp" width="493" height="340" alt="Image-HasTech" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="contact-info-wrap">
                                <div className="contact-info">
                                    <div className="row">
                                        <div className="col-lg-4 col-xl-12">
                                            <div className="info-item aos-init" data-aos="fade-left">
                                                <div className="icon">
                                                    <Image src="assets/img/icons/c1.webp" width="69" height="65" alt="Image-HasTech" />
                                                </div>
                                                <div className="info">
                                                    <h5 className="title">Address</h5>
                                                    <p>Your address goes here. 123 Your Location</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-12">
                                            <div className="info-item aos-init" data-aos="fade-left" data-aos-delay="60">
                                                <div className="icon">
                                                    <Image src="assets/img/icons/c2.webp" width="65" height="65" alt="Image-HasTech" />
                                                </div>
                                                <div className="info">
                                                    <h5 className="title">Phone No</h5>
                                                    <p>
                                                        <a href="tel://+00123456789">+00123456789</a><br />
                                                        <a href="tel://+00123456789">+00123456789</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-12">
                                            <div className="info-item aos-init" data-aos="fade-left" data-aos-delay="120">
                                                <div className="icon">
                                                    <Image src="assets/img/icons/c3.webp" width="65" height="65" alt="Image-HasTech" />
                                                </div>
                                                <div className="info">
                                                    <h5 className="title">Email / Web</h5>
                                                    <p>
                                                        <a href="mailto://demo@example.com">demo@example.com</a><br />
                                                        <a href="mailto://www.example.com">www.example.com</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default ContactUs;