import product1 from '../../img/product-1.jpg';
import product2 from '../../img/product-2.jpg';
import product3 from '../../img/product-3.jpg';
import product4 from '../../img/product-4.jpg';
import product5 from '../../img/product-5.jpg';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const ContentCart = () => {

    const [cart, setCart] = useState([]);
    const location = useLocation()
    const [Quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const [dataCart, setDataCart] = useState([]);
    const [subTotal, setSubtotal] = useState(0);

    useEffect(() => {
        let subT = 0;
        axios.get(process.env.REACT_APP_URL_API_CART)
            .then((response) => {
                setDataCart(response.data);
                response.data.map((item) => {
                    if (item.email == localStorage.getItem('user-email')) {
                        subT = subT + (parseInt(item.quantity) * parseInt(item.price));
                        setSubtotal(subT);
                    }
                })
            });
    }, []);


    return (
        <>
            {/*<!-- Breadcrumb Start -->*/}
            <div class="container-fluid">
                <div class="row px-xl-5">
                    <div class="col-12">
                        <nav class="breadcrumb bg-light mb-30">
                            <a class="breadcrumb-item text-dark" href="#">Home</a>
                            <a class="breadcrumb-item text-dark" href="#">Shop</a>
                            <span class="breadcrumb-item active">Shopping Cart</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/*<!-- Breadcrumb End -->*/}


            {/*<!-- Cart Start -->*/}
            <div class="container-fluid">
                <div class="row px-xl-5">
                    <div class="col-lg-8 table-responsive mb-5">
                        <table class="table table-light table-borderless table-hover text-center mb-0">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody class="align-middle">
                                {dataCart.map((item) => {
                                    return item.email == localStorage.getItem('user-email') ?
                                        <tr>
                                            <td class="align-middle">{item.product_name}</td>
                                            <td class="align-middle">{item.price}</td>
                                            <td class="align-middle">
                                                <div class="input-group quantity mx-auto" style={{ width: "100px" }}>
                                                    <div class="input-group-btn">
                                                        <button class="btn btn-sm btn-primary btn-minus" onClick={() => {
                                                            const Qty = parseInt(item.quantity) - 1;

                                                            axios.put(process.env.REACT_APP_URL_API_CART + '/' + item.id, { product_name: item.product_name, price: item.price, quantity: Qty.toString(), email: localStorage.getItem('user-email') })
                                                                .then((response) => {
                                                                    window.location.reload();
                                                                });
                                                        }}>
                                                            <i class="fa fa-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value={item.quantity} />
                                                    <div class="input-group-btn">
                                                        <button class="btn btn-sm btn-primary btn-plus" onClick={() => {
                                                            const Qty = parseInt(item.quantity) + 1;

                                                            axios.put(process.env.REACT_APP_URL_API_CART + '/' + item.id, { product_name: item.product_name, price: item.price, quantity: Qty.toString(), email: localStorage.getItem('user-email') })
                                                                .then((response) => {
                                                                    window.location.reload();
                                                                });
                                                        }}>
                                                            <i class="fa fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="align-middle">{parseInt(item.quantity) * parseInt(item.price)}</td>
                                            <td class="align-middle"><button class="btn btn-sm btn-danger" onClick={() => {
                                                const Qty = parseInt(item.quantity) + 1;

                                                axios.delete(process.env.REACT_APP_URL_API_CART + '/' + item.id)
                                                    .then((response) => {
                                                        window.location.reload();
                                                    });
                                            }}><i class="fa fa-times"></i></button></td>
                                        </tr>
                                        :
                                        <tr></tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-4">
                        <form class="mb-30" action="">
                            <div class="input-group">
                                <input type="text" class="form-control border-0 p-4" placeholder="Coupon Code" />
                                <div class="input-group-append">
                                    <button class="btn btn-primary">Apply Coupon</button>
                                </div>
                            </div>
                        </form>
                        <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Cart Summary</span></h5>
                        <div class="bg-light p-30 mb-5">
                            <div class="border-bottom pb-2">
                                <div class="d-flex justify-content-between mb-3">
                                    <h6>Subtotal</h6>
                                    <h6>${subTotal}</h6>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <h6 class="font-weight-medium">Shipping</h6>
                                    <h6 class="font-weight-medium">$10</h6>
                                </div>
                            </div>
                            <div class="pt-2">
                                <div class="d-flex justify-content-between mt-2">
                                    <h5>Total</h5>
                                    <h5>${subTotal + 10}</h5>
                                </div>
                                <Link className="btn btn-block btn-primary font-weight-bold my-3 py-3" to="/checkout">
                                    Proceed To Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- Cart End -->*/}
        </>

    );
};
