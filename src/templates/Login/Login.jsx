import '../../lib/animate/animate.min.css';
import '../../lib/owlcarousel/assets/owl.carousel.min.css';
import '../../css/style.css';


import './Login.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ContentLogin } from '../../components/ContentLogin';



function App() {

    return (
        <div className="App">
            <Header/>
            <ContentLogin/>
            <Footer/>
        </div>
    );
}

export default App;