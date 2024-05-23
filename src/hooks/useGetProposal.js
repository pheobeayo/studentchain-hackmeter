import { useState, useEffect } from "react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { readOnlyProvider } from "../utils/constants/providers";
import { getStudentChainContract } from "../utils/constants/contracts";

const useGetProposal = () => {
    const [reg, setReg] = useState({
        loading: true,
        data: [],
    });
    const { address } = useWeb3ModalAccount()



    useEffect(() => {
        const contract = getStudentChainContract(readOnlyProvider);

        contract
            .proposalByAddress(address)
            .then((res) => {
                // console.log(res);
                setReg({
                    loading: false,
                    data: res
                })
            })
            .catch((err) => {
                console.error("error fetching registration status: ", err);
                setReg([]);
            });
    }, [address]);

    return reg;
}

export default useGetProposal;
