import Link from '@/components/Link';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Register = () => {
    return (
        <MainLayout breadcrumb='Register'>
            <section className="account-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 m-auto">
                            <div className="section-title text-center">
                                <h2 className="title">Register</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="register-form-content">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Username <span className="required">*</span></label>
                                                <input id="username" className="form-control" type="email" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Email address <span className="required">*</span></label>
                                                <input id="email" className="form-control" type="email" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Password <span className="required">*</span></label>
                                                <input id="password" className="form-control" type="password" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group mb--0">
                                                <Link className="btn-register" pathname="/shop">Register</Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Register;