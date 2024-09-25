import { useState } from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import PartnerSection from "./Components/PartnerSection";
import Stats from "./Components/Stats";
import FeaturesSection from "./Components/FeaturesComponets";
import DigitalToday from "./Components/DigitalToday";
import Portfolio from "./Components/Portfolio";
import FinalCTASection from "./Components/FinalCta";
import Footer from "./Components/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header/>
    <HeroSection/>
    <PartnerSection/>
    <Stats/>
    <FeaturesSection/>
    <DigitalToday/>
    <Portfolio/>
    <FinalCTASection/>
    <Footer/>
    </>
  );
}

export default App;
