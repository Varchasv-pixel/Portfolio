import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Gmail from "./components/Gmail";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <div className="z-10 fixed w-full top-0 left-0">
        <Navbar />
      </div>

      <div className="flex flex-col gap-[120px] w-full px-10 md:px-20 mt-[150px]">
        <Hero />
        <Services />
        <Projects />
        <Gmail />
      </div>
      <div className="w-full h-[2px] bg-black"></div>
      <div className="flex justify-center items-center w-full px-10 md:px-20 pb-[50px]">
        <Footer />
      </div>
    </div>
  );
};

export default App;