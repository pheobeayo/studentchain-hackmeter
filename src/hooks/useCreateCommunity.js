import { useCallback } from "react";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { getProvider } from "../utils/constants/providers";
import { getStudentChainContract } from "../utils/constants/contracts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useCreateCommunity = () => {
    const { walletProvider } = useWeb3ModalProvider();
    const navigate = useNavigate();


    return useCallback(async (title, description, location, imageIPFSHash) => {
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getStudentChainContract(signer);

        try {
            const transaction = await contract.createCommunity(title, description, location, imageIPFSHash);
            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                toast.success("community created!");

                // Redirect to the community
                return navigate("/community");
            }

            toast.error("community creation failed!");
        } catch (error) {
            console.log("error :", error);
            let errorCase
            if (error.reason === "You are revoked due to offence") {
                errorCase = "You are revoked due to offence";
            } else {
                errorCase = "error in creating community!"
            }
            toast.error(errorCase);
        }
    }, [navigate, walletProvider]);
}

export default useCreateCommunity;
