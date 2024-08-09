import '../../lib/animate/animate.min.css';
import '../../lib/owlcarousel/assets/owl.carousel.min.css';
import '../../css/style.css';


import './Home.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ContentHome } from '../../components/ContentHome';



function App() {

    return (
        <div className="App">
            
            <Header/>
            <ContentHome/>
            <Footer/>
        </div>
    );
}

export default App;
