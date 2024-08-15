import '../../lib/animate/animate.min.css';
import '../../lib/owlcarousel/assets/owl.carousel.min.css';
import '../../css/style.css';


import './Signup.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ContentSignup } from '../../components/ContentSignup';



function App() {

    return (
        <div className="App">
            <Header/>
            <ContentSignup/>
            <Footer/>
        </div>
    );
}

export default App;