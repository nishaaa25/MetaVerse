import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExploreSection from "./components/ExploreSection";
import GuideSection from "./components/GuideSection";
import WhatsNewSection from "./components/WhatsNewSection";
import TrackSection from "./components/TrackSection";
import InsightSection from "./components/InsightSection";
import FounderSection from "./components/FounderSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-primary-black w-[100%] relative text-white overflow-hidden">
      <div className="w-full px-[5%] md:px-[8%] lg:px-[4%] xl:px-0 xl:w-[1280px] mx-auto relative">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExploreSection />
        <GuideSection />
        <WhatsNewSection />
        <TrackSection />
        <InsightSection />
        <FounderSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
