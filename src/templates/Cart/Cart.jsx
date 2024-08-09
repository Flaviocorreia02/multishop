import '../../lib/animate/animate.min.css';
import '../../lib/owlcarousel/assets/owl.carousel.min.css';
import '../../css/style.css';


import './Cart.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ContentCart } from '../../components/ContentCart';



function App() {

    return (
        <div className="App">
            <Header/>
            <ContentCart/>
            <Footer/>
        </div>
    );
}

export default App;