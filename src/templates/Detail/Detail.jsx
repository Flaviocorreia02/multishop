import '../../lib/animate/animate.min.css';
import '../../lib/owlcarousel/assets/owl.carousel.min.css';
import '../../css/style.css';


import './Detail.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ContentDetail } from '../../components/ContentDetail';



function App() {

    return (
        <div className="App">
            <Header/>
            <ContentDetail/>
            <Footer/>
        </div>
    );
}

export default App;