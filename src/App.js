import "./App.css";
import HeroSection from "./components/Hero Section/HeroSection";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";

function App() {
    return (
        <div className="App">
            <HeroSection />
            <Programs />
            <Reasons />
            <Plans />
        </div>
    );
}

export default App;
