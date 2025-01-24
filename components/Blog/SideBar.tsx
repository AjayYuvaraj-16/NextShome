import { SIDE_BAR_POST } from '@/json/blogJson';
import React from 'react';
import SideBardPost from './SideBarBlog';
import Link from '../Link';

const SideBar = () => {
    return (
        <div className="blog-sidebar">
            <div className="blog-sidebar-search">
                <div className="sidebar-search-form">
                    <form action="#">
                        <input type="search" placeholder="Search" />
                        <button><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>

            <div className="blog-sidebar-wrap">
                <div className="blog-sidebar-category">
                    <h4 className="sidebar-title" data-margin-bottom="23" style={{ marginBottom: '23px' }}>Categories</h4>
                    <div className="sidebar-category">
                        <ul className="category-list">
                            <li><Link pathname='/shop/column4'>Accesasories<span> (6)</span></Link></li>
                            <li><Link pathname='/shop/column4'>Computer<span> (4)</span></Link></li>
                            <li><Link pathname='/shop/column4'>Covid-19<span> (2)</span></Link></li>
                            <li><Link pathname='/shop/column4'>Electronics<span> (6)</span></Link></li>
                            <li><Link pathname='/shop/column4'>Frame Sunglasses<span> (12)</span></Link></li>
                            <li><Link pathname='/shop/column4'>Furniture<span> (7)</span></Link></li>
                            <li><Link pathname='/shop/column4'>Genuine Leather<span> (9)</span></Link></li>
                        </ul>
                    </div>
                </div>

                <div className="blog-sidebar-post">
                    <h4 className="sidebar-title">Recent Post</h4>
                    <div className="sidebar-post">
                        {SIDE_BAR_POST?.map((singlePost, index) => {
                            return (
                                <SideBardPost key={index} singlePost={singlePost} />
                            )
                        })}
                    </div>
                </div>

                <div className="blog-sidebar-category-sub-menu">
                    <h4 className="sidebar-title" data-margin-bottom="23" style={{ marginBottom: '23px' }}>Archives</h4>
                    <div className="sidebar-category-sub-menu">
                        <ul className="sub-menu-list">
                            <li><Link pathname='/shop/column4'>March 2018</Link></li>
                            <li><Link pathname='/shop/column4'>February 2018</Link></li>
                            <li><Link pathname='/shop/column4'>January 2021</Link></li>
                            <li><Link pathname='/shop/column4'>September 2019</Link></li>
                            <li><Link pathname='/shop/column4'>March 2018</Link></li>
                            <li><Link pathname='/shop/column4'>July 2021</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="blog-sidebar-tags">
                    <h4 className="sidebar-title">Tages</h4>
                    <div className="sidebar-tags">
                        <ul className="tags-list mb--0">
                            <li><Link pathname='/blog/detail'>Mobile</Link></li>
                            <li><Link pathname='/blog/detail'>Laptop</Link></li>
                            <li><Link pathname='/blog/detail'>Smart TV</Link></li>
                            <li><Link pathname='/blog/detail'>Pendrive</Link></li>
                            <li><Link pathname='/blog/detail'>Smartwatch</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;