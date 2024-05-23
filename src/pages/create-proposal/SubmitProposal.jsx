import { useState } from "react";
import Footer from "../../components/footer/Footer";
import useCreateProposal from "../../hooks/useCreateProposal";
import axios from 'axios';
// title, description, amount, imageIPFSHash, mail
const SubmitProposal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [mail, setMail] = useState();



  const proposal = useCreateProposal();

  const handleSelectFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
            pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_API_KEY,
          },
        }
      );
      const fileUrl = response.data.IpfsHash;
      const tx = {
        image: fileUrl,
      };

      // Call the registar function with the file URL
      proposal(title, description, amount, tx.image, mail);


    } catch (error) {
      console.log("Pinata API Error:", error);
      setIsLoading(false)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative w-[100vw] h-[105vh]">
      <section className="w-screen h-full">
        <div className="grid grid-cols-2 mt-4 md:flex md:flex-row sm:flex sm:flex-row">
          <div className="bg-[#DADADA] w-1/2">
            <div className="mt-48 mx-20">
              <h1 className="text-[#331000] font-extrabold text-4xl leading-10">
                Let’s begin your
                <br />
                journey
              </h1>
              <h2 className="text-[#331000] font-normal text-base">
                Please ensure that it is directly related
                <br />
                to your educational needs.
              </h2>
              <div className=" bg-white border-[#FF5100]  rounded-full w-3/4 h-2 mt-2 ">
                <div className=" bg-[#FF5100] border-[#FF5100]  rounded-full w-3/4 h-2 "></div>
              </div>
              <h3 className="text-[#331000] font-normal text-base mt-2">
                Step 2 of 2
              </h3>
            </div>
          </div>
          <div>
            <form className=" mx-20 mt-8 w-3/4" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label
                  className="block text-[#331000] text-sm font-bold mb-2"
                  
                >
                  Why are you seeking funding?
                </label>
                <input
                  className="bg-white border-[#331000] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="fund"
                  type="text"
                  placeholder="E.g to pay my tuition fee"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-[#331000] text-sm font-bold mb-2"
                >
                  Give a description why you need funding
                </label>
                <input
                  className="bg-white border-[#331000] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="This should be a detail description"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-[#331000] text-base font-bold mb-2"
                >
                  Amount needed in USDT or e-naira
                </label>
                <input
                  className="bg-white border-[#331000] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="amount"
                  type="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="How much do you need ?"
                  required
                />
              </div>

              <div className="mb-2">
                <label
                  className="block text-[#331000] text-base font-bold mb-2"
                  
                >
                  National Identity Number (this will not be made public)
                </label>
                <input
                  className="bg-white border-[#331000] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="nin"
                  type="number"
                  placeholder="Enter your NIN"
                />
              </div>
              <div className="mb-2">
                <label
                  className="block mb-2 text-base font-medium text-[#331000] dark:text-[#06214A]"

                >
                  Evidence of why you are seeking the fund
                </label>
                <input
                  className="block w-full text-lg text-[#331000] border border-[#06214A] rounded-lg cursor-pointer bg-white dark:text-[#020C17] focus:outline-none dark:bg-white dark:border-gray-600 dark:placeholder-gray-400"
                  id="large_size"
                  type="file"
                  onChange={handleSelectFile} // Call handleSelectFile when file selected
                  placeholder="Add a picture"
                />
              </div>
              <p className="text-[#331000] text-base">
                E.g For tuition fee (an invoice)
                <br />A broken laptop (add a picture)
                <br />
                Please note that this will be displayed on the landing page
              </p>
              <div className="mb-2">
                <label
                  className="block text-[#331000] text-base font-medium mb-2"
                  
                >
                  Email of an authority for confirmation
                </label>
                <input
                  className="bg-white border-[#331000] border rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  placeholder="The email could be that of HOD, Admin office, etc"
                  required
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#FF5100] hover:bg-[#130701]"
                  disabled={!selectedFile || isLoading}
                >
                  {isLoading ? "Loading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SubmitProposal;