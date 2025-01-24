import React from 'react';
import Link from '../Link';

const ShopSideBar = () => {
    return (
        <div className="shop-sidebar">
            <div className="shop-sidebar-category">
                <h4 className="sidebar-title">Top Categories</h4>
                <div className="sidebar-category">
                    <ul className="category-list mb--0">
                        <li><Link pathname="/shop/left-sidebar">Shoes <span>(6)</span></Link></li>
                        <li><Link pathname="/shop/left-sidebar">Computer <span>(4)</span></Link></li>
                        <li><Link pathname="/shop/left-sidebar">Covid-19 <span>(2)</span></Link></li>
                        <li><Link pathname="/shop/left-sidebar">Electronics <span>(6)</span></Link></li>
                        <li><Link pathname="/shop/left-sidebar">Frame Sunglasses <span>(12)</span></Link></li>
                        <li><Link pathname="/shop/left-sidebar">Furniture <span>(7)</span></Link></li>
                        <li><Link pathname="/shop/left-sidebar">Genuine Leather <span>(9)</span></Link></li>
                    </ul>
                </div>
            </div>

            <div className="shop-sidebar-price-range">
                <h4 className="sidebar-title">Price Filter</h4>
                <div className="sidebar-price-range">
                    <div id="price-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" style={{ left: "4.57143%", width: "81.1429%" }}></div><span className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: "4.57143%" }}><span>$16</span></span><span className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: "85.7143%" }}><span>$300</span></span></div>
                </div>
            </div>

            <div className="shop-sidebar-color">
                <h4 className="sidebar-title">Color</h4>
                <div className="sidebar-color">
                    <ul className="color-list">
                        <li data-bg-color="#39ed8c" className="active" style={{ backgroundColor: "rgb(57, 237, 140)" }}></li>
                        <li data-bg-color="#a6ed42" style={{ backgroundColor: "rgb(166, 237, 66)" }}></li>
                        <li data-bg-color="#daed39" style={{ backgroundColor: "rgb(218, 237, 57)" }}></li>
                        <li data-bg-color="#eed739" style={{ backgroundColor: "rgb(238, 215, 57)" }}></li>
                        <li data-bg-color="#eca23a" style={{ backgroundColor: "rgb(236, 162, 58)" }}></li>
                        <li data-bg-color="#f36768" style={{ backgroundColor: "rgb(243, 103, 104)" }}></li>
                        <li data-bg-color="#e14755" style={{ backgroundColor: "rgb(225, 71, 85)" }}></li>
                        <li data-bg-color="#dc83a3" style={{ backgroundColor: "rgb(220, 131, 163)" }}></li>
                        <li data-bg-color="#dc82da" style={{ backgroundColor: "rgb(220, 130, 218)" }}></li>
                        <li data-bg-color="#9a82dd" style={{ backgroundColor: "rgb(154, 130, 221)" }}></li>
                        <li data-bg-color="#82c2db" style={{ backgroundColor: "rgb(130, 194, 219)" }}></li>
                        <li data-bg-color="#6bd6b0" style={{ backgroundColor: "rgb(107, 214, 176)" }}></li>
                        <li data-bg-color="#9ed76b" style={{ backgroundColor: "rgb(158, 215, 107)" }}></li>
                        <li data-bg-color="#c8c289" style={{ backgroundColor: "rgb(200, 194, 137)" }}></li>
                    </ul>
                </div>
            </div>

            <div className="shop-sidebar-size">
                <h4 className="sidebar-title">Size</h4>
                <div className="sidebar-size">
                    <ul className="size-list">
                        <li><Link pathname="/shop/left-sidebar">S <span>(6)</span></Link></li>
                        <li><Link pathname="/shop/left-sidebar">M <span>(4)</span></Link></li>
                        <li><Link pathname="/shop/left-sidebar">L <span>(2)</span></Link></li>
                        <li><Link pathname="/shop/left-sidebar">XL <span>(6)</span></Link></li>
                        <li><Link pathname="/shop/left-sidebar">XXL <span>(12)</span></Link></li>
                    </ul>
                </div>
            </div>

            <div className="shop-sidebar-brand">
                <h4 className="sidebar-title">Brand</h4>
                <div className="sidebar-brand">
                    <ul className="brand-list mb--0">
                        <li><Link pathname="/shop/left-sidebar">Lakmeetao <span>(6)</span></Link></li>
                        <li><Link pathname="/shop/left-sidebar">Beautifill <span>(4)</span></Link></li>
                        <li><Link pathname="/shop/left-sidebar">Made In GD <span>(2)</span></Link></li>
                        <li><Link pathname="/shop/left-sidebar">Pecifico <span>(6)</span></Link></li>
                        <li><Link pathname="/shop/left-sidebar">Xlovgtir <span>(12)</span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShopSideBar;