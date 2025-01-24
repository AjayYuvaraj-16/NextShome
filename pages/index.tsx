import MainLayout from "@/layouts/MainLayout";
import { DividerAreaWrapper, LatestBlogArea } from "./about-us";
import RelatedProducts from "@/components/Products/RelatedProds";
import Link from "@/components/Link";
import Image from "next/image";
export default function Home() {
  return (
    <MainLayout breadcrumb="Home">
      <CollectionArea />
      <FeaturedItems />
      <DividerAreaWrapper />
      <div className="my-10">
        <RelatedProducts />
      </div>
      <ShopNow />
      <LatestBlogArea />
    </MainLayout>
  );
}
const CollectionArea = () => {
  return (
    <section className="product-area product-collection-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="product-collection">
              <div className="inner-content">
                <div className="product-collection-content">
                  <div className="content">
                    <h3 className="title"><Link pathname="/shop">Sports Shoes</Link></h3>
                    <h4 className="price">From $95.00</h4>
                  </div>
                </div>
                <div className="product-collection-thumb" data-bg-img="/assets/img/shop/collection/1.webp" style={{ backgroundImage: `url('/assets/img/shop/collection/1.webp')` }}></div>
                <Link className="banner-link-overlay" pathname="/shop"></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product-collection">
              <div className="inner-content">
                <div className="product-collection-content">
                  <div className="content">
                    <h3 className="title"><Link pathname="/shop">Latest Shoes</Link></h3>
                    <h4 className="price">From $90.00</h4>
                  </div>
                </div>
                <div className="product-collection-thumb" data-bg-img="/assets/img/shop/collection/2.webp" style={{ backgroundImage: `url('/assets/img/shop/collection/2.webp')` }}></div>
                <Link className="banner-link-overlay" pathname="/shop"></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="product-collection">
              <div className="inner-content">
                <div className="product-collection-content">
                  <div className="content">
                    <h3 className="title"><Link pathname="/shop">Office Shoes</Link></h3>
                    <h4 className="price">From $82.00</h4>
                  </div>
                </div>
                <div className="product-collection-thumb" data-bg-img="/assets/img/shop/collection/3.webp" style={{ backgroundImage: `url('/assets/img/shop/collection/3.webp')` }}></div>
                <Link className="banner-link-overlay" pathname="/shop"></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const FeaturedItems = () => {
  return (
    <section className="product-area product-default-area">
      <div className="container pt--0">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 className="title">Featured Items</h3>
              <div className="desc">
                <p>There are many variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="inner-content">
                <div className="product-thumb">
                  <Link pathname="/shop/product?t=normal">
                    <Image src="/assets/img/shop/1.webp" width="270" height="274" alt="Image-HasTech" />
                  </Link>
                  <div className="product-flag">
                    <ul>
                      <li className="discount">-10%</li>
                    </ul>
                  </div>
                  <div className="product-action">
                    <Link className="btn-product-wishlist" pathname="/wishlist">
                      <i className="fa fa-heart"></i>
                    </Link>
                    <Link className="btn-product-cart" pathname="/shop-cart"><i className="fa fa-shopping-cart"></i></Link>
                    <button type="button" className="btn-product-quick-view-open">
                      <i className="fa fa-arrows"></i>
                    </button>
                    <Link className="btn-product-compare" pathname="/compare"><i className="fa fa-random"></i></Link>
                  </div>
                  <Link className="banner-link-overlay" pathname="/shop"></Link>
                </div>
                <div className="product-info">
                  <div className="category">
                    <ul>
                      <li><Link pathname="/shop">Men</Link></li>
                      <li className="sep">/</li>
                      <li><Link pathname="/shop">Women</Link></li>
                    </ul>
                  </div>
                  <h4 className="title"><Link pathname="/shop/product?t=normal">Leather Mens Slipper</Link></h4>
                  <div className="prices">
                    <span className="price-old">$100</span>
                    <span className="sep">-</span>
                    <span className="price">$240.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="inner-content">
                <div className="product-thumb">
                  <Link pathname="/shop/product?t=normal">
                    <Image src="/assets/img/shop/2.webp" width="270" height="274" alt="Image-HasTech" />
                  </Link>
                  <div className="product-action">
                    <Link className="btn-product-wishlist" pathname="/wishlist"><i className="fa fa-heart"></i></Link>
                    <Link className="btn-product-cart" pathname="/shop-cart"><i className="fa fa-shopping-cart"></i></Link>
                    <button type="button" className="btn-product-quick-view-open">
                      <i className="fa fa-arrows"></i>
                    </button>
                    <Link className="btn-product-compare" pathname="/compare"><i className="fa fa-random"></i></Link>
                  </div>
                  <Link className="banner-link-overlay" pathname="/shop"></Link>
                </div>
                <div className="product-info">
                  <div className="category">
                    <ul>
                      <li><Link pathname="/shop">Men</Link></li>
                      <li className="sep">/</li>
                      <li><Link pathname="/shop">Women</Link></li>
                    </ul>
                  </div>
                  <h4 className="title"><Link pathname="/shop/product?t=normal">Quickiin Mens shoes</Link></h4>
                  <div className="prices">
                    <span className="price">$140.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="inner-content">
                <div className="product-thumb">
                  <Link pathname="/shop/product?t=normal">
                    <Image src="/assets/img/shop/3.webp" width="270" height="274" alt="Image-HasTech" />
                  </Link>
                  <div className="product-flag">
                    <ul>
                      <li className="discount">-10%</li>
                    </ul>
                  </div>
                  <div className="product-action">
                    <Link className="btn-product-wishlist" pathname="/wishlist"><i className="fa fa-heart"></i></Link>
                    <Link className="btn-product-cart" pathname="/shop-cart"><i className="fa fa-shopping-cart"></i></Link>
                    <button type="button" className="btn-product-quick-view-open">
                      <i className="fa fa-arrows"></i>
                    </button>
                    <Link className="btn-product-compare" pathname="/compare"><i className="fa fa-random"></i></Link>
                  </div>
                  <Link className="banner-link-overlay" pathname="/shop"></Link>
                </div>
                <div className="product-info">
                  <div className="category">
                    <ul>
                      <li><Link pathname="/shop">Men</Link></li>
                      <li className="sep">/</li>
                      <li><Link pathname="/shop">Women</Link></li>
                    </ul>
                  </div>
                  <h4 className="title"><Link pathname="/shop/product?t=normal">Rexpo Womens shoes</Link></h4>
                  <div className="prices">
                    <span className="price-old">$60</span>
                    <span className="sep">-</span>
                    <span className="price">$260.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="inner-content">
                <div className="product-thumb">
                  <Link pathname="/shop/product?t=normal">
                    <Image src="/assets/img/shop/4.webp" width="270" height="274" alt="Image-HasTech" />
                  </Link>
                  <div className="product-action">
                    <Link className="btn-product-wishlist" pathname="/wishlist"><i className="fa fa-heart"></i></Link>
                    <Link className="btn-product-cart" pathname="/shop-cart"><i className="fa fa-shopping-cart"></i></Link>
                    <button type="button" className="btn-product-quick-view-open">
                      <i className="fa fa-arrows"></i>
                    </button>
                    <Link className="btn-product-compare" pathname="/compare"><i className="fa fa-random"></i></Link>
                  </div>
                  <Link className="banner-link-overlay" pathname="/shop"></Link>
                </div>
                <div className="product-info">
                  <div className="category">
                    <ul>
                      <li><Link pathname="/shop">Men</Link></li>
                      <li className="sep">/</li>
                      <li><Link pathname="/shop">Women</Link></li>
                    </ul>
                  </div>
                  <h4 className="title"><Link pathname="/shop/product?t=normal">Hollister V-Neck Knit</Link></h4>
                  <div className="prices">
                    <span className="price">$880.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="inner-content">
                <div className="product-thumb">
                  <Link pathname="/shop/product?t=normal">
                    <Image src="/assets/img/shop/5.webp" width="270" height="274" alt="Image-HasTech" />
                  </Link>
                  <div className="product-action">
                    <Link className="btn-product-wishlist" pathname="/wishlist"><i className="fa fa-heart"></i></Link>
                    <Link className="btn-product-cart" pathname="/shop-cart"><i className="fa fa-shopping-cart"></i></Link>
                    <button type="button" className="btn-product-quick-view-open">
                      <i className="fa fa-arrows"></i>
                    </button>
                    <Link className="btn-product-compare" pathname="/compare"><i className="fa fa-random"></i></Link>
                  </div>
                  <Link className="banner-link-overlay" pathname="/shop"></Link>
                </div>
                <div className="product-info">
                  <div className="category">
                    <ul>
                      <li><Link pathname="/shop">Men</Link></li>
                      <li className="sep">/</li>
                      <li><Link pathname="/shop">Women</Link></li>
                    </ul>
                  </div>
                  <h4 className="title"><Link pathname="/shop/product?t=normal">Primitive Mens shoes</Link></h4>
                  <div className="prices">
                    <span className="price">$500.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="inner-content">
                <div className="product-thumb">
                  <Link pathname="/shop/product?t=normal">
                    <Image src="/assets/img/shop/6.webp" width="270" height="274" alt="Image-HasTech" />
                  </Link>
                  <div className="product-flag">
                    <ul>
                      <li className="discount">-10%</li>
                    </ul>
                  </div>
                  <div className="product-action">
                    <Link className="btn-product-wishlist" pathname="/wishlist"><i className="fa fa-heart"></i></Link>
                    <Link className="btn-product-cart" pathname="/shop-cart"><i className="fa fa-shopping-cart"></i></Link>
                    <button type="button" className="btn-product-quick-view-open">
                      <i className="fa fa-arrows"></i>
                    </button>
                    <Link className="btn-product-compare" pathname="/compare"><i className="fa fa-random"></i></Link>
                  </div>
                  <Link className="banner-link-overlay" pathname="/shop"></Link>
                </div>
                <div className="product-info">
                  <div className="category">
                    <ul>
                      <li><Link pathname="/shop">Men</Link></li>
                      <li className="sep">/</li>
                      <li><Link pathname="/shop">Women</Link></li>
                    </ul>
                  </div>
                  <h4 className="title"><Link pathname="/shop/product?t=normal">New Womens High Hills</Link></h4>
                  <div className="prices">
                    <span className="price-old">$300</span>
                    <span className="sep">-</span>
                    <span className="price">$333.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="inner-content">
                <div className="product-thumb">
                  <Link pathname="/shop/product?t=normal">
                    <Image src="/assets/img/shop/7.webp" width="270" height="274" alt="Image-HasTech" />
                  </Link>
                  <div className="product-action">
                    <Link className="btn-product-wishlist" pathname="/wishlist"><i className="fa fa-heart"></i></Link>
                    <Link className="btn-product-cart" pathname="/shop-cart"><i className="fa fa-shopping-cart"></i></Link>
                    <button type="button" className="btn-product-quick-view-open">
                      <i className="fa fa-arrows"></i>
                    </button>
                    <Link className="btn-product-compare" pathname="/compare"><i className="fa fa-random"></i></Link>
                  </div>
                  <Link className="banner-link-overlay" pathname="/shop"></Link>
                </div>
                <div className="product-info">
                  <div className="category">
                    <ul>
                      <li><Link pathname="/shop">Men</Link></li>
                      <li className="sep">/</li>
                      <li><Link pathname="/shop">Women</Link></li>
                    </ul>
                  </div>
                  <h4 className="title"><Link pathname="/shop/product?t=normal">Simple Fabric Shoe</Link></h4>
                  <div className="prices">
                    <span className="price">$133.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="product-item">
              <div className="inner-content">
                <div className="product-thumb">
                  <Link pathname="/shop/product?t=normal">
                    <Image src="/assets/img/shop/8.webp" width="270" height="274" alt="Image-HasTech" />
                  </Link>
                  <div className="product-flag">
                    <ul>
                      <li className="discount">-10%</li>
                    </ul>
                  </div>
                  <div className="product-action">
                    <Link className="btn-product-wishlist" pathname="/wishlist"><i className="fa fa-heart"></i></Link>
                    <Link className="btn-product-cart" pathname="/shop-cart"><i className="fa fa-shopping-cart"></i></Link>
                    <button type="button" className="btn-product-quick-view-open">
                      <i className="fa fa-arrows"></i>
                    </button>
                    <Link className="btn-product-compare" pathname="/compare"><i className="fa fa-random"></i></Link>
                  </div>
                  <Link className="banner-link-overlay" pathname="/shop"></Link>
                </div>
                <div className="product-info">
                  <div className="category">
                    <ul>
                      <li><Link pathname="/shop">Men</Link></li>
                      <li className="sep">/</li>
                      <li><Link pathname="/shop">Women</Link></li>
                    </ul>
                  </div>
                  <h4 className="title"><Link pathname="/shop/product?t=normal">exclusive mens shoe</Link></h4>
                  <div className="prices">
                    <span className="price-old">$300</span>
                    <span className="sep">-</span>
                    <span className="price">$420.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ShopNow = () => {
  return (
    <section>
      <div className="container pt--0 pb--0">
        <div className="row flex-md-row-reverse justify-content-between divider-wrap divider-style2">
          <div className="col-lg-6">
            <div className="divider-thumb-content">
              <div className="thumb">
                <Link pathname="/shop">
                  <Image src="/assets/img/shop/banner/1.webp" width="570" height="350" alt="Image-HasTech" />
                </Link>
              </div>
              <div className="content">
                <h2 className="title">Sports Shoes</h2>
                <p className="desc">Up To 30% Off All Shoes &amp; Products</p>
                <Link className="btn-theme" pathname="/shop">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="divider-thumb-content">
              <div className="thumb">
                <Link pathname="/shop">
                  <Image src="/assets/img/shop/banner/2.webp" width="570" height="700" alt="Image-HasTech" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}