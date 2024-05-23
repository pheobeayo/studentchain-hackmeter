import heroimage1 from "../../assets/heroimage1.svg";
import heroimage2 from "../../assets/heroimage2.svg";
import stud from "../../assets/stud.svg";
import { Link } from "react-router-dom";
import useIsStudent from "../../hooks/useIsStudent";

const Hero = () => {
  const isReg = useIsStudent();

  return (
    <div className="w-100 md:w-[100%]">
      <div className="flex flex-col items-center gap-4">
        <img src={stud} alt="stud" className="w-1/4 mt-10 flex items-center" />
        <h1 className="text-[40px] md:text-[40px] font-serif font-extrabold capitalize text-center  text-[#091913]">
          Fueling Education's Next Frontier
        </h1>
        <h3 className="text-[20px] md:text-[18px] font-serif text-center font-semibold text-[#091913]">
          Where Boundaries Blur and Innovations Thrive:
          <br />
          Transforming Education Through Blockchain
        </h3>
        <div className="flex items-center gap-8">
          <Link
            to={isReg ? "/login" : "/create-proposal"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="bg-[#FF5100] hover:bg-[#030352] text-white font-bold py-2 px-4  rounded">
              Submit Proposal
            </button>
          </Link>
          <Link
            to="/proposals"
            style={{ textDecoration: "none", color: "#427142" }}
          >
            {" "}
            <button className="bg-[#030352] hover:bg-[#FF5100] text-[#ffffff] font-bold py-2 px-4 border border-[#030352] rounded">
              Fund a Proposal{" "}
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-0 md:flex md:flex-row">
        <div className="mt-44 mx-32">
          <img src={heroimage2} alt="heroimage1" />
        </div>
        <div className="mt-20">
          <img src={heroimage1} alt="heroimage2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
