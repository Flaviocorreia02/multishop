import '../../lib/animate/animate.min.css';
import '../../lib/owlcarousel/assets/owl.carousel.min.css';
import '../../css/style.css';


import './Contact.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ContentContact } from '../../components/ContentContact';



function App() {

    return (
        <div className="App">
            <Header/>
            <ContentContact/>
            <Footer/>
        </div>
    );
}

export default App;