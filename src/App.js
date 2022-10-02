import "./App.css";
import HeroSection from "./components/Hero Section/HeroSection";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./Testimonials/Testimonials";

function App() {
    return (
        <div className="App">
            <HeroSection />
            <Programs />
            <Reasons />
            <Plans />
            <Testimonials />
        </div>
    );
}

export default App;
