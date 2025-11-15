import FeatureCards from "./temps/FeatureCards";
import Footer from "./temps/Footer";
import Hero from "./temps/Hero";
import Navigation from "./temps/Navigation";
import Pricing from "./temps/Pricing";
import Services from "./temps/Services";
import Testimonials from "./temps/Testimonials";

const App = () => {
  return (
    <div className="w-full lg:w-[1060px] min-h-screen m-auto relative">
      <div className="w-px h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-20"></div>
      <div className="w-px h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-20"></div>
      <Navigation />
      <Hero />
      <FeatureCards />
      <Testimonials />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
};
export default App;
