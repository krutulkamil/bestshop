import Header from "./components/header";
import MainContent from "./components/main";
import Opening from "./components/opening";
import Statistics from "./components/statistics";
import Benefits from "./components/benefits";
import Pricing from "./components/pricing";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App = () => {
    return (
        <>
            <Header/>
            <MainContent>
                <Opening />
                <Statistics />
                <Benefits />
                <Pricing />
                <Contact />
            </MainContent>
            <Footer />
        </>
    );
}

export default App;
