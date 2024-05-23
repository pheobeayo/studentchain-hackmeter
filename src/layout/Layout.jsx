
import Navbar from "../components/Header/Navbar";



const Layout = ({children}) => {
  return (
    <>
    <div className="relative ">
      <header className="w-full bg-white mx-8 pt-16 2xl:mt-4">
        <Navbar />
      </header>
      <div className='mt-4'>
        <main >{children} </main>
      </div>
      
    </div>
    </>
  );
};

export default Layout;
