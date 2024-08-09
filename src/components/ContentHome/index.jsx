import carousel1 from '../../img/carousel-1.jpg';
import carousel2 from '../../img/carousel-2.jpg';
import carousel3 from '../../img/carousel-3.jpg';
import offer1 from '../../img/offer-1.jpg';
import offer2 from '../../img/offer-2.jpg';
import cat1 from '../../img/cat-1.jpg';
import cat2 from '../../img/cat-2.jpg';
import cat3 from '../../img/cat-3.jpg';
import cat4 from '../../img/cat-4.jpg';
import product1 from '../../img/product-1.jpg';
import product2 from '../../img/product-2.jpg';
import product3 from '../../img/product-3.jpg';
import product4 from '../../img/product-4.jpg';
import product5 from '../../img/product-5.jpg';
import product6 from '../../img/product-6.jpg';
import product7 from '../../img/product-7.jpg';
import product8 from '../../img/product-8.jpg';
import vendor1 from '../../img/vendor-1.jpg';
import vendor2 from '../../img/vendor-2.jpg';
import vendor3 from '../../img/vendor-3.jpg';
import vendor4 from '../../img/vendor-4.jpg';
import vendor5 from '../../img/vendor-5.jpg';
import vendor6 from '../../img/vendor-6.jpg';
import vendor7 from '../../img/vendor-7.jpg';
import vendor8 from '../../img/vendor-8.jpg';

export const ContentHome = () => {
    return (
        <>
            {/*<!-- Carousel Start -->*/}
            <div className="container-fluid mb-3">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                                <li data-target="#header-carousel" data-slide-to="1"></li>
                                <li data-target="#header-carousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item position-relative active" style={{ height: "430px" }}>
                                    <img className="position-absolute w-100 h-100" src={carousel1} style={{ objectFit: "cover" }} />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: "700px" }}>
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item position-relative" style={{ height: "430px" }}>
                                    <img className="position-absolute w-100 h-100" src={carousel2} style={{ objectFit: "cover" }} />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: "700px" }}>
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item position-relative" style={{ height: "430px" }}>
                                    <img className="position-absolute w-100 h-100" src={carousel3} style={{ objectFit: "cover" }} />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: "700px" }}>
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-offer mb-30" style={{ height: "200px" }}>
                            <img className="img-fluid" src={offer1} alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                        <div className="product-offer mb-30" style={{ height: "200px" }}>
                            <img className="img-fluid" src={offer2} alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- Carousel End -->*/}


            {/*<!-- Featured Start -->*/}
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
                            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- Featured End -->*/}


            {/*<!-- Categories Start -->*/}
            <div className="container-fluid pt-5">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                    <img className="img-fluid" src={cat1} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                    <img className="img-fluid" src={cat2} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                    <img className="img-fluid" src={cat3} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                    <img className="img-fluid" src={cat4} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                    <img className="img-fluid" src={cat4} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                    <img className="img-fluid" src={cat3} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                    <img className="img-fluid" src={cat2} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                    <img className="img-fluid" src={cat1} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                    <img className="img-fluid" src={cat2} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                    <img className="img-fluid" src={cat1} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                    <img className="img-fluid" src={cat4} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                    <img className="img-fluid" src={cat3} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {/*<!-- Categories End -->*/}


            {/*<!-- Products Start -->*/}
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
                <div className="row px-xl-5">
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product1} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product2} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product3} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product4} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product5} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product6} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product7} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product8} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- Products End -->*/}


            {/*<!-- Offer Start -->*/}
            <div className="container-fluid pt-5 pb-3">
                <div className="row px-xl-5">
                    <div className="col-md-6">
                        <div className="product-offer mb-30" style={{ height: "300px" }}>
                            <img className="img-fluid" src={offer1} alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-offer mb-30" style={{ height: "300px" }}>
                            <img className="img-fluid" src={offer2} alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- Offer End -->*/}


            {/*<!-- Products Start -->*/}
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Recent Products</span></h2>
                <div className="row px-xl-5">
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product1} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product2} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product3} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product4} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product5} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product6} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product7} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product8} alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- Products End -->*/}


            {/*<!-- Vendor Start -->*/}
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="owl-carousel vendor-carousel">
                            <div className="bg-light p-4">
                                <img src={vendor1} alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src={vendor2} alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src={vendor3} alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src={vendor4} alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src={vendor5} alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src={vendor6} alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src={vendor7} alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src={vendor8} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- Vendor End -->*/}
        </>

    );
};