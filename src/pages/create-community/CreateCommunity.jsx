import  { useState } from "react";
import Footer from "../../components/footer/Footer";
import axios from 'axios';
import useRegStudent from "../../hooks/useRegStudent";

const CreateCommunity = () => {
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file

  const registar = useRegStudent();
  const onChange = () => {
    setChecked(!checked);
  };

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
      registar(tx.image);


    } catch (error) {
      console.log("Pinata API Error:", error);
      setIsLoading(false)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative w-[100vw] h-[100vh]">
      <section className="w-screen h-full">
        
          <div className='grid place-items-center mt-20'>
            <form className=" mx-20 md:28 mt-8 w-1/2" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label
                  className="block text-[#331000] text-base font-bold mb-2"
                  
                >
                  Community Name
                </label>
                <input
                  className="bg-white border-[#331000] border-2 rounded w-full py-2 px-3 text-[#331000] leading-tight focus:outline-none focus:shadow-outline"
                  id="emailaddress"
                  type="email"
                  placeholder="Add your email address"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-[#331000] text-base font-bold mb-2"
                  
                >
                  Short Description
                </label>
                <input
                  className="bg-white border-[#331000] border-2 rounded w-full py-2 px-3 text-[#331000] leading-tight focus:outline-none focus:shadow-outline"
                  id="text"
                  type="text"
                  placeholder="describe your community briefly"
                  required
                />
              </div>
              
              <div className="mb-2">
                <label
                  className="block mb-2 text-base font-bold  text-[#331000] dark:text-[#331000]"
                  
                >
                  Community Display Picture
                </label>

                <input
                  className="block w-full text-base text-[#331000] border border-[#331000] rounded-lg cursor-pointer bg-white focus:outline-none focus:shadow-outline"
                  id="large_size"
                  type="file"
                  onChange={handleSelectFile} // Call handleSelectFile when file selected
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-[#331000] text-base font-bold mb-2"
                  
                >
                  Preferred location
                </label>
                <input
                  className="bg-white border-[#331000] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="text"
                  type="text"
                  placeholder="e.g Nigeria, across the globe"
                  required
                />
              </div>
              
              {/* Checkbox */}
              <div className="flex items-center">
                <input id="link-checkbox" type="checkbox" value={checked} className="w-4 h-4 text-[#331000] bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                  onChange={onChange} />
                <label  className="ms-2 text-sm font-medium text-[#331000] dark:text-gray-300">I agree to StudentChain’s <a href="/terms" className="text-[#331000] dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
               </div>
              {/* Submit Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#FF5100] hover:bg-[#130701]"
                  disabled={!checked || !selectedFile || isLoading} // Disable button if checkbox not checked or no file selected or loading
                >
                  {isLoading ? "Loading..." : "Create Community"}
                </button>
              </div>
            </form>
          </div>
       
      </section>
      <Footer />
    </main>
  );
};

export default CreateCommunity;
