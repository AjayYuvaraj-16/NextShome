import ProductCard from '@/components/Products/ProdCard';
import ProductCardDetail from '@/components/Products/ProdCardDetail';
import Pagination from '@/components/Shop/Pagination';
import ShopTopBar from '@/components/Shop/TopBar';
import { PRODUCT_JSON } from '@/json/productJson';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const ShopColumnFour = () => {
    const [tabSwitch, setTabSwitch] = React.useState(false);
    return (
        <MainLayout breadcrumb='Shop 4 Column'>
            <section className="product-area product-default-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ShopTopBar setTabSwitch={setTabSwitch} tabSwitch={tabSwitch} />
                        </div>
                        <div className="col-12">
                            <div className="tab-content" id="nav-tabContent">
                                <div className={`tab-pane fade ${!tabSwitch ? 'show active' : ''}`} id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                                    <div className="row">
                                        {PRODUCT_JSON?.map((products,index) => {
                                            return (
                                                <div key={index} className="col-sm-6 col-xl-3">
                                                    <ProductCard imgUrl={products?.image} categories={products?.category}
                                                        discount={products?.discount} key={products?.id} priceNew={`$${products?.price}`}
                                                        priceOld={products?.oldPrice ? `$${products?.oldPrice}` : null} title={products?.title} />
                                                </div>
                                            )
                                        })}
                                        <div className="col-12">
                                            <Pagination />
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane fade ${tabSwitch ? 'show active' : ''}`} id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                                    <div className="row">
                                        {PRODUCT_JSON?.map((product, index) => {
                                            return (
                                                <>
                                                    <div className="col-md-12">
                                                        <ProductCardDetail imgUrl={product?.image} categories={product?.category}
                                                            discount={product?.discount} key={product?.id} priceNew={`$${product?.price}`}
                                                            priceOld={product?.oldPrice ? `$${product?.oldPrice}` : null} title={product?.title} description={product?.description} />
                                                    </div>
                                                    {index % 3 === 2 && <div className="col-12"><hr /></div>}
                                                </>
                                            )
                                        })}
                                        <div className="col-12">
                                            <Pagination />
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

export default ShopColumnFour;