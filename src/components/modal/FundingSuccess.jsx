import { useState } from "react";
import useFund from "../../hooks/useFund";
import { useParams } from "react-router-dom";

const FundingSuccessPage = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState(null)
  const fund = useFund()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fund(amount, id)

  }
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[#FF5100]">
        <div className="absolute z-10 w-[70%] bg-white rounded-xl md:rounded-2xl h-[40vh] md:h-[50vh] md:w-[40%] border shadow-xl "></div>
        <div className="z-20 md:w-[30%] mt-12 md:mt-0">
          <div className="flex flex-col">
            <form onSubmit={handleSubmit}>
              <div className='mt-8'>
                <h2 className="text-xl font-bold text-[#331000] text-center mx-2">
                  Fund in
                </h2>
                <span>
                  <select
                    id="currency"
                    className="bg-white border-[#331000] border-2 rounded w-full py-2 px-3 text-[#331000] leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option selected>Funding currency</option>
                    <option value="US">USDT</option>
                    <option value="E">E NARIA</option>

                  </select>
                </span>
              </div>
              <div className="mb-2">
                <label
                  className="block text-[#331000] text-base font-bold mb-2"
                  
                >
                  Price
                </label>
                <input
                  className="bg-white border-[#FF5100] border-2 rounded w-full py-2 px-3 text-[#331000] leading-tight focus:outline-none focus:shadow-outline"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="amount"
                  placeholder="Enter the amount you want Donate"
                  required
                />
              </div>
              <button className="bg-[#FF5100] hover:bg-[#FF5100] text-white font-bold py-2 px-4 border border-[#FF5100] rounded w-full  mb-4">
                Fund
              </button>
              <button className="bg-white hover:bg-[#FF5100] text-[#331000] font-bold py-2 px-4 border border-[#331000] rounded w-full  mb-4">
                Cancel
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundingSuccessPage;
