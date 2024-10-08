
import cartCheck from '../../img/cart.png';
export const ContentCheckout = () => {
    return (
        <>
            {/*<!-- Breadcrumb Start -->*/}
            <div class="container-fluid">
                <div class="row px-xl-5">
                    <div class="col-12">
                        <nav class="breadcrumb bg-light mb-30">
                            <a class="breadcrumb-item text-dark" href="#">Home</a>
                            <a class="breadcrumb-item text-dark" href="#">Shop</a>
                            <span class="breadcrumb-item active">Checkout</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/*<!-- Breadcrumb End -->*/}


            {/*<!-- Checkout Start -->*/}
            <div class="container-fluid">
                <div class="row px-xl-5">
                    <div class="col-lg-2 mx-auto">
                    <img className="img-fluid w-100" src={cartCheck} alt="" />
                    </div>
                </div>

            </div>
            {/*<!-- Checkout End -->*/}
        </>

    );
};