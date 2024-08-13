import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Menu } from '../../components/Menu';
import { ProductList1 } from '../../components/ProductList1';
import { ProductList2 } from '../../components/ProductList2';
import { Pagination } from '../../components/Pagination';
import { Link } from 'react-router-dom';


export const ContentShop = () => {

    const [APIData1, setAPIData1] = useState([]);
    const [APIData2, setAPIData2] = useState([]);
    const [filteredProduct1, setFilteredProduct1] = useState(APIData1);
    const [filteredProduct2, setFilteredProduct2] = useState(APIData2);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);

    useEffect(() => {
        axios.get(process.env.REACT_APP_URL_API_FORNECEDOR1)
            .then((response1) => {
                setAPIData1(response1.data);
                setFilteredProduct1(response1.data);

            });
        axios.get(process.env.REACT_APP_URL_API_FORNECEDOR2)
            .then((response2) => {
                setAPIData2(response2.data);
                setFilteredProduct2(filteredProduct2.concat(response2.data));
            });
    }, []);

    const [searchItem, setSearchItem] = useState('')
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts1 = filteredProduct1.slice(firstPostIndex, lastPostIndex);
    const currentPosts2 = filteredProduct2.slice(firstPostIndex, lastPostIndex);
    const total_currentPosts = (filteredProduct1.length + filteredProduct2.length) / 2;


    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)

        const filteredItems1 = APIData1.filter((nome) =>
            nome.nome.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const filteredItems2 = APIData2.filter((name) =>
            name.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredProduct1(filteredItems1);
        setFilteredProduct2(filteredItems2);

    }
    const handlePriceChangeall = (e) => {

        const filteredItems1 = APIData1.filter((preco) =>
            parseFloat(preco.preco) >= 0
        );
        const filteredItems2 = APIData2.filter((price) =>
            parseFloat(price.price) >= 0
        );

        setFilteredProduct1(filteredItems1);
        setFilteredProduct2(filteredItems2);

    }
    const handlePriceChange100 = (e) => {

        const filteredItems1 = APIData1.filter((preco) =>
            parseFloat(preco.preco) <= 100
        );
        const filteredItems2 = APIData2.filter((price) =>
            parseFloat(price.price) <= 100
        );

        setFilteredProduct1(filteredItems1);
        setFilteredProduct2(filteredItems2);

    }
    const handlePriceChange200 = (e) => {

        const filteredItems1 = APIData1.filter((preco) =>
            (parseFloat(preco.preco) >= 100 && parseFloat(preco.preco) <= 200)
        );
        const filteredItems2 = APIData2.filter((price) =>
            (parseFloat(price.price) >= 100 && parseFloat(price.price) <= 200)
        );

        setFilteredProduct1(filteredItems1);
        setFilteredProduct2(filteredItems2);

    }
    const handlePriceChange300 = (e) => {

        const filteredItems1 = APIData1.filter((preco) =>
            (parseFloat(preco.preco) >= 200 && parseFloat(preco.preco) <= 300)
        );
        const filteredItems2 = APIData2.filter((price) =>
            (parseFloat(price.price) >= 200 && parseFloat(price.price) <= 300)
        );

        setFilteredProduct1(filteredItems1);
        setFilteredProduct2(filteredItems2);

    }
    const handlePriceChange400 = (e) => {

        const filteredItems1 = APIData1.filter((preco) =>
            (parseFloat(preco.preco) >= 300 && parseFloat(preco.preco) <= 400)
        );
        const filteredItems2 = APIData2.filter((price) =>
            (parseFloat(price.price) >= 300 && parseFloat(price.price) <= 400)
        );

        setFilteredProduct1(filteredItems1);
        setFilteredProduct2(filteredItems2);

    }
    const handlePriceChange500 = (e) => {

        const filteredItems1 = APIData1.filter((preco) =>
            (parseFloat(preco.preco) >= 400 && parseFloat(preco.preco) <= 500)
        );
        const filteredItems2 = APIData2.filter((price) =>
            (parseFloat(price.price) >= 400 && parseFloat(price.price) <= 500)
        );

        setFilteredProduct1(filteredItems1);
        setFilteredProduct2(filteredItems2);

    }
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-secondary py-1 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center h-100">
                            <a className="text-body mr-3" href="">About</a>
                            <a className="text-body mr-3" href="">Contact</a>
                            <a className="text-body mr-3" href="">Help</a>
                            <a className="text-body mr-3" href="">FAQs</a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">Sign in</button>
                                    <button className="dropdown-item" type="button">Sign up</button>
                                </div>
                            </div>
                            <div className="btn-group mx-2">
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">EUR</button>
                                    <button className="dropdown-item" type="button">GBP</button>
                                    <button className="dropdown-item" type="button">CAD</button>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">FR</button>
                                    <button className="dropdown-item" type="button">AR</button>
                                    <button className="dropdown-item" type="button">RU</button>
                                </div>
                            </div>
                        </div>
                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <a href="" className="btn px-0 ml-2">
                                <i className="fas fa-heart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: "2px" }}>0</span>
                            </a>
                            <a href="" className="btn px-0 ml-2">
                                <i className="fas fa-shopping-cart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: "2px" }}>0</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <Link className="text-decoration-none" to="/">
                            <span className="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
                            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={searchItem}
                                    onChange={handleInputChange}
                                    placeholder='Search for products'
                                />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-6 text-right">
                        <p className="m-0">Customer Service</p>
                        <h5 className="m-0">+012 345 6789</h5>
                    </div>
                </div>
            </div>
            {/*<!-- Topbar End -->*/}


            {/*<!-- Navbar Start -->*/}
            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: "65px", padding: "0 30px" }}>
                            <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </a>
                        <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{ width: "calc(100% - 30px)", zIndex: "999" }}>
                            <div className="navbar-nav w-100">
                                <div className="nav-item dropdown dropright">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dresses <i className="fa fa-angle-right float-right mt-1"></i></a>
                                    <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                        <a href="" className="dropdown-item">Men's Dresses</a>
                                        <a href="" className="dropdown-item">Women's Dresses</a>
                                        <a href="" className="dropdown-item">Baby's Dresses</a>
                                    </div>
                                </div>
                                <a href="" className="nav-item nav-link">Shirts</a>
                                <a href="" className="nav-item nav-link">Jeans</a>
                                <a href="" className="nav-item nav-link">Swimwear</a>
                                <a href="" className="nav-item nav-link">Sleepwear</a>
                                <a href="" className="nav-item nav-link">Sportswear</a>
                                <a href="" className="nav-item nav-link">Jumpsuits</a>
                                <a href="" className="nav-item nav-link">Blazers</a>
                                <a href="" className="nav-item nav-link">Jackets</a>
                                <a href="" className="nav-item nav-link">Shoes</a>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <Menu />
                    </div>
                </div>
            </div>
            {/*<!-- Breadcrumb Start -->*/}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <a className="breadcrumb-item text-dark" href="#">Home</a>
                            <a className="breadcrumb-item text-dark" href="#">Shop</a>
                            <span className="breadcrumb-item active">Shop List</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/*<!-- Breadcrumb End -->*/}


            {/*<!-- Shop Start -->*/}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    {/*<!-- Shop Sidebar Start -->*/}
                    <div className="col-lg-3 col-md-4">
                        {/*<!-- Price Start -->*/}
                        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by price</span></h5>
                        <div className="bg-light p-4 mb-30">
                            <form>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="url" className="custom-control-input" onClick={handlePriceChangeall} checked id="price-all" />
                                    <label className="custom-control-label" for="price-all">All Price</label>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="url" className="custom-control-input" onClick={handlePriceChange100} id="price-1" />
                                    <label className="custom-control-label" for="price-1">$0 - $100</label>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="url" className="custom-control-input" onClick={handlePriceChange200} id="price-2" />
                                    <label className="custom-control-label" for="price-2">$100 - $200</label>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="url" className="custom-control-input" onClick={handlePriceChange300} id="price-3" />
                                    <label className="custom-control-label" for="price-3">$200 - $300</label>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="url" className="custom-control-input" onClick={handlePriceChange400} id="price-4" />
                                    <label className="custom-control-label" for="price-4">$300 - $400</label>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                    <input type="url" className="custom-control-input" onClick={handlePriceChange500} id="price-5" />
                                    <label className="custom-control-label" for="price-5">$400 - $500</label>
                                </div>
                            </form>
                        </div>
                        {/*<!-- Price End -->*/}

                    </div>
                    {/*<!-- Shop Sidebar End -->*/}


                    {/*<!-- Shop Product Start -->*/}
                    <div className="col-lg-9 col-md-8">
                        <div className="row pb-3">
                            <div className="col-12 pb-1">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div>
                                        <button className="btn btn-sm btn-light"><i className="fa fa-th-large"></i></button>
                                        <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars"></i></button>
                                    </div>
                                    <div className="ml-2">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Latest</a>
                                                <a className="dropdown-item" href="#">Popularity</a>
                                                <a className="dropdown-item" href="#">Best Rating</a>
                                            </div>
                                        </div>
                                        <div className="btn-group ml-2">
                                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">10</a>
                                                <a className="dropdown-item" href="#">20</a>
                                                <a className="dropdown-item" href="#">30</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ProductList1 Data={currentPosts1} />
                            <ProductList2 Data={currentPosts2} />
                            <Pagination
                                totalPosts={total_currentPosts}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                </div>
                {/*<!-- Shop Product End -->*/}
            </div>
        </>

    );
};
