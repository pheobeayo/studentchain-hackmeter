import How from "../../components/how/How";
// import Proposal from "../../components/proposal/Proposal";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <main className="bg-white h-screen">
      <section className="w-[100vw] md:w-[100%] bg-white">
      <div className="container mx-auto h-full">
        <Hero />
        <How />
        {/* <Proposal /> */}
        <About />
         <Footer />
      
      </div>
      </section>
    </main>
  );
};

export default Home;
