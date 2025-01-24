import React, { useState } from 'react';
const ReviewDescription = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);
    function handleClick(event: React.MouseEvent<HTMLAnchorElement>, index: number) {
        event.preventDefault(); // Prevent default browser navigation
        setTabIndex(index)
        setTimeout(() => {
            setSelectedTab(index);
        }, 200)
    }
    const reviewCount = 6;
    return (
        <div className="row">
            <div className="col-12">
                <div className="product-review-tabs-content">
                    <ul className="nav product-tab-nav" id="ReviewTab" role="tablist">
                        {["Information", "Description", "Review"]?.map((each, index) => {
                            return (
                                <li role="presentation" key={index}>
                                    <a onClick={(event) => handleClick(event, index)} className={tabIndex === index ? "active" : ""} id="information-tab" data-bs-toggle="pill" href="" role="tab" aria-controls="information" aria-selected="true">{each}{(reviewCount && index === 2) ? <span>({reviewCount})</span> : null}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="tab-content product-tab-content" id="ReviewTabContent">
                        <div className={`tab-pane fade ${tabIndex == 0 && selectedTab === 0 ? "active show" : tabIndex == 0 ? "active" : ""}`} id="information" role="tabpanel" aria-labelledby="information-tab">
                            <div className="product-information">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adlo minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in tun tuni reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rel aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${tabIndex == 1 && selectedTab === 1 ? "active show" : tabIndex == 1 ? "active" : ""}`} id="description" role="tabpanel" aria-labelledby="description-tab">
                            <div className="product-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adlo minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in tun tuni reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rel aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                            </div>
                        </div>
                        <div className={`tab-pane fade  ${tabIndex == 2 && selectedTab === 2 ? "active show" : tabIndex == 2 ? "active" : ""}`} id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                            <div className="product-review-content">
                                <div className="review-content-header">
                                    <h3>Customer Reviews</h3>
                                    <div className="review-info">
                                        <ul className="review-rating">
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star-o"></li>
                                        </ul>
                                        <span className="review-caption">Based on 5 reviews</span>
                                        <span className="review-write-btn">Write a review</span>
                                    </div>
                                </div>

                                {/* <!--== Start Reviews Form Item ==--> */}
                                <div className="reviews-form-area">
                                    <h4 className="title">Write a review</h4>
                                    <div className="reviews-form-content">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input id="for_name" className="form-control" type="text" placeholder="Enter your name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input id="for_email" className="form-control" type="email" placeholder="john.smith@example.com" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <span className="title">Rating</span>
                                                        <ul className="review-rating">
                                                            <li className="fa fa-star-o"></li>
                                                            <li className="fa fa-star-o"></li>
                                                            <li className="fa fa-star-o"></li>
                                                            <li className="fa fa-star-o"></li>
                                                            <li className="fa fa-star-o"></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Review Title</label>
                                                        <input id="for_review-title" className="form-control" type="text" placeholder="Give your review a title" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Body of Review (1500)</label>
                                                        <textarea id="for_comment" className="form-control" placeholder="Write your comments here"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-submit-btn">
                                                        <button type="submit" className="btn-submit">Post comment</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* <!--== End Reviews Form Item ==--> */}

                                <div className="reviews-content-body">
                                    {/* <!--== Start Reviews Content Item ==--> */}
                                    <div className="review-item">
                                        <ul className="review-rating">
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                        </ul>
                                        <h3 className="title">Awesome shipping service!</h3>
                                        <h5 className="sub-title"><span>Nantu Nayal</span> no <span>Sep 30, 2022</span></h5>
                                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <a href="#/">Report as Inappropriate</a>
                                    </div>
                                    {/* <!--== End Reviews Content Item ==--> */}

                                    {/* <!--== Start Reviews Content Item ==--> */}
                                    <div className="review-item">
                                        <ul className="review-rating">
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star-o"></li>
                                            <li className="fa fa-star-o"></li>
                                            <li className="fa fa-star-o"></li>
                                            <li className="fa fa-star-o"></li>
                                        </ul>
                                        <h3 className="title">Low Quality</h3>
                                        <h5 className="sub-title"><span>Oliv hala</span> no <span>Sep 30, 2022</span></h5>
                                        <p>My Favorite White Sneakers From Splurge To Save the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                        <a href="#/">Report as Inappropriate</a>
                                    </div>
                                    {/* <!--== End Reviews Content Item ==--> */}

                                    {/* <!--== Start Reviews Content Item ==--> */}
                                    <div className="review-item">
                                        <ul className="review-rating">
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                        </ul>
                                        <h3 className="title">Excellent services!</h3>
                                        <h5 className="sub-title"><span>Halk Marron</span> no <span>Sep 30, 2022</span></h5>
                                        <p>The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>
                                        <a href="#/">Report as Inappropriate</a>
                                    </div>
                                    {/* <!--== End Reviews Content Item ==--> */}

                                    {/* <!--== Start Reviews Content Item ==--> */}
                                    <div className="review-item">
                                        <ul className="review-rating">
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star-o"></li>
                                            <li className="fa fa-star-o"></li>
                                        </ul>
                                        <h3 className="title">Price is very high</h3>
                                        <h5 className="sub-title"><span>Musa</span> no <span>Sep 30, 2022</span></h5>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                        <a href="#/">Report as Inappropriate</a>
                                    </div>
                                    {/* <!--== End Reviews Content Item ==--> */}

                                    {/* <!--== Start Reviews Content Item ==--> */}
                                    <div className="review-item">
                                        <ul className="review-rating">
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star"></li>
                                            <li className="fa fa-star-o"></li>
                                        </ul>
                                        <h3 className="title">Normal</h3>
                                        <h5 className="sub-title"><span>Muhammad</span> no <span>Sep 30, 2022</span></h5>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                        <a href="#/">Report as Inappropriate</a>
                                    </div>
                                    {/* <!--== End Reviews Content Item ==--> */}
                                </div>

                                {/* <!--== Start Reviews Pagination Item ==--> */}
                                <div className="review-pagination">
                                    <span className="pagination-pag">1</span>
                                    <span className="pagination-pag">2</span>
                                    <span className="pagination-next">Next »</span>
                                </div>
                                {/* <!--== End Reviews Pagination Item ==--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewDescription;