import { useState, useEffect } from "react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { readOnlyProvider } from "../utils/constants/providers";
import { getStudentChainContract } from "../utils/constants/contracts";

const useIsStudent = () => {

    const [reg, setReg] = useState(false);
    const { address } = useWeb3ModalAccount()



    useEffect(() => {
        const contract = getStudentChainContract(readOnlyProvider);

        contract
            .isStudent(address)
            .then((res) => {
                console.log(res);
                setReg(
                    res
                );
            })
            .catch((err) => {
                console.error("error fetching registration status: ", err);
                setReg(false);
            });
    }, [address]);

    return reg;
}

export default useIsStudent;
