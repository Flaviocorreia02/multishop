import '../../lib/animate/animate.min.css';
import '../../lib/owlcarousel/assets/owl.carousel.min.css';
import '../../css/style.css';


import './Checkout.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ContentCheckout } from '../../components/ContentCheckout';



function App() {

    return (
        <div className="App">
            <Header/>
            <ContentCheckout/>
            <Footer/>
        </div>
    );
}

export default App;