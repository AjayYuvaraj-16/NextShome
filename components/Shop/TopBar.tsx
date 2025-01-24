import React from 'react';
import Link from '../Link';

interface TopBarProps {
    tabSwitch: boolean
    setTabSwitch: React.Dispatch<React.SetStateAction<boolean>>
}
const ShopTopBar: React.FC<TopBarProps> = ({ tabSwitch, setTabSwitch }) => {
    return (
        <div className="shop-top-bar">
            <div className="shop-top-left">
                <p className="pagination-line"><Link pathname="/shop/left-sidebar">12</Link> Product Found of <Link pathname="/shop/left-sidebar">30</Link></p>
            </div>
            <div className="shop-top-center">
                <nav className="product-nav">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button onClick={() => setTabSwitch(false)} className={`nav-link ${!tabSwitch ? 'active' : ''}`} id="nav-grid-tab" data-bs-toggle="tab" data-bs-target="#nav-grid" type="button" role="tab" aria-controls="nav-grid" aria-selected="true"><i className="fa fa-th"></i></button>
                        <button onClick={() => setTabSwitch(true)} className={`nav-link ${tabSwitch ? 'active' : ''}`} id="nav-list-tab" data-bs-toggle="tab" data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-list" aria-selected="false"><i className="fa fa-list"></i></button>
                    </div>
                </nav>
            </div>
            <div className="shop-top-right">
                <div className="shop-sort">
                    <span>Sort By :</span>
                    <select className="form-select" aria-label="Sort select example">
                        <option selected>Default</option>
                        <option value="1">Popularity</option>
                        <option value="2">Average Rating</option>
                        <option value="3">Newsness</option>
                        <option value="4">Price Low to High</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ShopTopBar;