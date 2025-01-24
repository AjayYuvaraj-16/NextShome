import Link from '@/components/Link';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Login = () => {
    return (
        <MainLayout breadcrumb='Log in'>
            <section className="account-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 m-auto">
                            <div className="section-title text-center">
                                <h2 className="title">Login</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="login-form-content">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label >Username or email address <span className="required">*</span></label>
                                                <input id="username" className="form-control" type="email" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label >Password <span className="required">*</span></label>
                                                <input id="password" className="form-control" type="password" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <Link className="btn-login" pathname='/account'>Login</Link>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group account-info-group mb--0">
                                                <div className="rememberme-account">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                        <label className="form-check-label" >Remember me</label>
                                                    </div>
                                                </div>
                                                <a className="lost-password" href="#/">Lost your password?</a>
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

export default Login;