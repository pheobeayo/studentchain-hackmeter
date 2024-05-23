import { useCallback } from "react";
import { useWeb3ModalProvider} from "@web3modal/ethers/react";
import { getProvider } from "../utils/constants/providers";
import { getStudentChainContract } from "../utils/constants/contracts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useRegStudent = () => {
    const { walletProvider } = useWeb3ModalProvider();
  
    const navigate = useNavigate();


    return useCallback(async (imageIPFSHash) => {
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getStudentChainContract(signer);

        try {
            const transaction = await contract.registerStudent(imageIPFSHash);
            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                toast.success("registered successfully!");

                // Redirect to the next page
                return navigate("/login");
            }

            toast.error("registration failed!");
        } catch (error) {
            console.log("error :", error);
            let errorCase
            if (error.reason === "Student is already registered") {
                errorCase = "Student is already registered!"
            } else {
                errorCase = "error in registration!"
            }
            toast.error(errorCase);
        }
    }, [navigate, walletProvider]);
}

export default useRegStudent;
