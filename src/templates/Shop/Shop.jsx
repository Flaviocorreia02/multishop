import '../../lib/animate/animate.min.css';
import '../../lib/owlcarousel/assets/owl.carousel.min.css';
import '../../css/style.css';


import './Shop.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ContentShop } from '../../components/ContentShop';



function App() {

    return (
        <div className="App">
            <Header/>
            <ContentShop/>
            <Footer/>
        </div>
    );
}

export default App;