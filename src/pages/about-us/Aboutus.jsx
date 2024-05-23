import Footer from "../../components/footer/Footer";
import About from "../../components/about/About";

const Aboutus = () => {
  return (
    <main className="w-[100vw] h-[120vh]">
      <section className="w-screen h-full mt-20">
        <About/>
      </section>

      <Footer />
    </main>
  );
};

export default Aboutus;
