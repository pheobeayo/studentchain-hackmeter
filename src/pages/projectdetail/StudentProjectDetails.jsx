
import Footer from "../../components/footer/Footer";
import useGetProposal from "../../hooks/useGetProposal";

const StudentProjectDetails = () => {
  const { loading, data: proposal } = useGetProposal();

  const proposalData = proposal;

  return (
    <main className="relative w-full min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <h4>Loading...</h4>
        ) : proposalData.length > 0 ? (
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mx-6 md:w-2/3">
              <img src={`https://green-rational-prawn-874.mypinata.cloud/ipfs/${proposalData[6]}`} alt="laptop" className="w-full max-h-96 object-contain mb-4" />


              <p className="text-[#331000] text-base font-normal mt-4">
                Descriptions: {proposalData[2]}.
              </p>
              <h1 className="text-[#331000] text-base font-bold">
                Referee: {proposalData[4]}
              </h1>
              <h1 className="text-[#331000] text-base font-bold">
                School Name: Obafemi Awolowo University{" "}
              </h1>
              <h1 className="text-[#331000] text-base font-bold">
                National Identity Number: 348870927432{" "}
              </h1>
              <h1 className="text-[#331000] text-base font-bold">
                Wallet Address: {proposalData[1]}
              </h1>
            </div>
            <div className="mx-6 md:w-1/3">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={`https://green-rational-prawn-874.mypinata.cloud/ipfs/${proposalData[7]}`} alt="urgent" className="w-full h-auto mb-2" />
                <h3 className="font-bold text-[#091913] text-sm mx-4">
                  {proposalData[3]}
                </h3>
                <div className="mx-4 my-2">
                  <h1 className="text-[#331000] text-justify font-bold text-xs">
                    {Number(proposalData[8])} USDT<span className="mx-2">-</span>30
                  </h1>
                  <h1 className="text-[#331000] text-justify font-normal text-xs">
                    Goal<span className="mx-2">Funders</span>Days left
                  </h1>
                  <div className=" bg-white border-[#FF5100]  rounded-full w-3/4 h-2 my-2 ">
                    <div className=" bg-[#FF5100] border-[#FF5100]  rounded-full w-1/2 h-2 "></div>
                  </div>
                  <h2 className="text-[#331000] text-justify font-normal text-sm">
                    {Number(proposalData[8])} USDT Amount needed
                    <br />
                    {proposalData[10] ? "Status: Approved For Disbursement" : "Status: Pending"}
                  </h2>
                  <button className="bg-[#FF5100] hover:bg-[#FF5100] text-white font-bold py-2 px-4 border border-[#AAAAAA] rounded w-full mt-4">
                    {proposalData[11] ? "Check Your Wallet" : "Pending Payments"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h4 className="text-[#331000] font-bold">Could not get proposal!!</h4>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default StudentProjectDetails;
