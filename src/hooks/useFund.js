import { useCallback } from "react";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { getProvider } from "../utils/constants/providers";
import { getStudentChainContract, getTOKEN } from "../utils/constants/contracts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MaxUint256 } from "ethers";
import useAllowance from "./useAllowance";

const useFund = () => {
    const { walletProvider } = useWeb3ModalProvider();
    const navigate = useNavigate();
    const val = useAllowance()


    return useCallback(async (amount, id) => {
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract1 = getTOKEN(signer);
        console.log("contract Token", contract1);
        const contract = getStudentChainContract(signer);

        if (val === 0) {
            try {
                const amount1 = MaxUint256
                const transaction1 = await contract1.approve(process.env.REACT_APP_STUDENT_CHAIN_CONTRACT, amount1
                );
                console.log("transaction: ", transaction1);
                const receipt1 = await transaction1.wait();
                console.log("receipt: ", receipt1);
                if (receipt1.status) {
                    const transaction = await contract.donate(amount, id);
                    console.log("transaction: ", transaction);
                    const receipt = await transaction.wait();

                    console.log("receipt: ", receipt);

                    if (receipt.status) {
                        toast.success("funded successfully!");
                        return navigate("/");
                    } toast.error("funding failed!");
                } toast.error("approval failed!");
            } catch (error) {
                console.log("error :", error);
                let errorCase
                if (error.reason === "Amount must be greater than zero") {
                    errorCase = "Amount must be greater than zero";

                }
                if (error.reason === "Insufficient balance") {
                    errorCase = "Address insufficient balance";

                }
                if (error.reason === "Token transfer failed") {
                    errorCase = "Token transfer failed";

                }
                toast.error(errorCase);
            }
        } else {
            try {
                const transaction = await contract.donate(amount, id);
                console.log("transaction: ", transaction);
                const receipt = await transaction.wait();

                console.log("receipt: ", receipt);

                if (receipt.status) {
                    toast.success("funded successfully!");
                    return navigate("/");
                } toast.error("funding failed!");

            } catch (error) {
                console.log("error :", error);
                let errorCase
                if (error.reason === "Amount must be greater than zero") {
                    errorCase = "Amount must be greater than zero";

                }
                if (error.reason === "Insufficient balance") {
                    errorCase = "Address insufficient balance";

                }
                if (error.reason === "Token transfer failed") {
                    errorCase = "Token transfer failed";

                }
                toast.error(errorCase);
            }
        }


    }, [navigate, val, walletProvider]);
}

export default useFund;
