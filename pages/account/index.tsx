import Link from '@/components/Link';
import MainLayout from '@/layouts/MainLayout';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const MyAccount = () => {
    const router = useRouter();

    const [tabIndex, setTabIndex] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);
    function handleClick(index: number) {
        if (index === 6) {
            router.push('/login')
        } else {
            setTabIndex(index)
            setTimeout(() => {
                setSelectedTab(index);
            }, 200)
        }
    }

    return (
        <MainLayout breadcrumb='Account'>
            <section className="my-account-area">
                <div className="container pt--0 pb--0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="myaccount-page-wrapper">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4">
                                        <nav>
                                            <div className="myaccount-tab-menu nav nav-tabs" id="nav-tab" role="tablist">
                                                {['Dashboard', 'Orders', 'Download', 'Payment Method', 'Address', 'Account Details', 'Logout']?.map((each, index) => {
                                                    return (
                                                        <button key={index} onClick={() => handleClick(index)} className={`nav-link ${index === selectedTab ? 'active' : ''}`} id={`nav-tab-${index}-tab`} data-bs-toggle="tab" role="tab" aria-controls={`nav-tab-${index}`} aria-selected={index === selectedTab}>
                                                            {each}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="col-lg-9 col-md-8">
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className={`tab-pane fade ${tabIndex == 0 && selectedTab === 0 ? "active show" : tabIndex == 0 ? "active" : ""}`} id="dashboad" role="tabpanel" aria-labelledby="dashboad-tab">
                                                <div className="myaccount-content">
                                                    <h3>Dashboard</h3>
                                                    <div className="welcome">
                                                        <p>Hello, <strong>Alex Tuntuni</strong> (If Not <strong>Tuntuni !</strong><Link pathname="/login" className="logout">Logout</Link>)</p>
                                                    </div>
                                                    <p>From your account dashboard. you can easily check &amp; view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
                                                </div>
                                            </div>
                                            <div className={`tab-pane fade ${tabIndex == 1 && selectedTab === 1 ? "active show" : tabIndex == 1 ? "active" : ""}`} id="orders" role="tabpanel" aria-labelledby="orders-tab">
                                                <div className="myaccount-content">
                                                    <h3>Orders</h3>
                                                    <div className="myaccount-table table-responsive text-center">
                                                        <table className="table table-bordered">
                                                            <thead className="thead-light">
                                                                <tr>
                                                                    <th>Order</th>
                                                                    <th>Date</th>
                                                                    <th>Status</th>
                                                                    <th>Total</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Aug 22, 2022</td>
                                                                    <td>Pending</td>
                                                                    <td>$3000</td>
                                                                    <td><Link pathname='/shop-cart' className='check-btn sqr-btn'>View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>July 22, 2022</td>
                                                                    <td>Approved</td>
                                                                    <td>$200</td>
                                                                    <td><Link pathname='/shop-cart' className='check-btn sqr-btn'>View</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>June 12, 2022</td>
                                                                    <td>On Hold</td>
                                                                    <td>$990</td>
                                                                    <td><Link pathname='/shop-cart' className='check-btn sqr-btn'>View</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`tab-pane fade ${tabIndex == 2 && selectedTab === 2 ? "active show" : tabIndex == 2 ? "active" : ""}`} id="download" role="tabpanel" aria-labelledby="download-tab">
                                                <div className="myaccount-content">
                                                    <h3>Downloads</h3>
                                                    <div className="myaccount-table table-responsive text-center">
                                                        <table className="table table-bordered">
                                                            <thead className="thead-light">
                                                                <tr>
                                                                    <th>Product</th>
                                                                    <th>Date</th>
                                                                    <th>Expire</th>
                                                                    <th>Download</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Haven - Free Real Estate PSD Template</td>
                                                                    <td>Aug 22, 2022</td>
                                                                    <td>Yes</td>
                                                                    <td><a href="#/" className="check-btn sqr-btn"><i className="fa fa-cloud-download"></i> Download File</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>HasTech - Profolio Business Template</td>
                                                                    <td>Sep 12, 2022</td>
                                                                    <td>Never</td>
                                                                    <td><a href="#/" className="check-btn sqr-btn"><i className="fa fa-cloud-download"></i> Download File</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`tab-pane fade ${tabIndex == 3 && selectedTab === 3 ? "active show" : tabIndex == 3 ? "active" : ""}`} id="payment-method" role="tabpanel" aria-labelledby="payment-method-tab">
                                                <div className="myaccount-content">
                                                    <h3>Payment Method</h3>
                                                    <p className="saved-message">You Can&apos;t Saved Your Payment Method yet.</p>
                                                </div>
                                            </div>
                                            <div className={`tab-pane fade ${tabIndex == 4 && selectedTab === 4 ? "active show" : tabIndex == 4 ? "active" : ""}`} id="address-edit" role="tabpanel" aria-labelledby="address-edit-tab">
                                                <div className="myaccount-content">
                                                    <h3>Billing Address</h3>
                                                    <address>
                                                        <p><strong>Alex Tuntuni</strong></p>
                                                        <p>1355 Market St, Suite 900 <br />
                                                            San Francisco, CA 94103</p>
                                                        <p>Mobile: (123) 456-7890</p>
                                                    </address>
                                                    <a href="#/" className="check-btn sqr-btn"><i className="fa fa-edit"></i> Edit Address</a>
                                                </div>
                                            </div>
                                            <div className={`tab-pane fade ${tabIndex == 5 && selectedTab === 5 ? "active show" : tabIndex == 5 ? "active" : ""}`} id="account-info" role="tabpanel" aria-labelledby="account-info-tab">
                                                <div className="myaccount-content">
                                                    <h3>Account Details</h3>
                                                    <div className="account-details-form">
                                                        <form action="#">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <div className="single-input-item">
                                                                        <label className="required">First Name</label>
                                                                        <input type="text" id="first-name" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="single-input-item">
                                                                        <label className="required">Last Name</label>
                                                                        <input type="text" id="last-name" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-input-item">
                                                                <label className="required">Display Name</label>
                                                                <input type="text" id="display-name" />
                                                            </div>
                                                            <div className="single-input-item">
                                                                <label className="required">Email Addres</label>
                                                                <input type="email" id="email" />
                                                            </div>
                                                            <fieldset>
                                                                <legend>Password change</legend>
                                                                <div className="single-input-item">
                                                                    <label className="required">Current Password</label>
                                                                    <input type="password" id="current-pwd" />
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="single-input-item">
                                                                            <label className="required">New Password</label>
                                                                            <input type="password" id="new-pwd" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="single-input-item">
                                                                            <label className="required">Confirm Password</label>
                                                                            <input type="password" id="confirm-pwd" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </fieldset>
                                                            <div className="single-input-item">
                                                                <button className="check-btn sqr-btn">Save Changes</button>
                                                            </div>
                                                        </form>
                                                    </div>
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

export default MyAccount;