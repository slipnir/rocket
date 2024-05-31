import './App.css'
import Header from "./components/Header/Header.jsx";
import Basket from "./components/Basket/Basket.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

    return (
        <div className="bg-primary bg-[url('/public/bg.png')] bg-no-repeat">
            <Header />
            <Basket />
            <Footer />
        </div>
    )
}

export default App
