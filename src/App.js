import "./App.css";
import HeroSection from "./components/Hero Section/HeroSection";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";

function App() {
    return (
        <div className="App">
            <HeroSection />
            <Programs />
            <Reasons />
        </div>
    );
}

export default App;
