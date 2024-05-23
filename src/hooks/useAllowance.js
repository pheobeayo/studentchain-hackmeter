import { useState, useEffect } from "react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { readOnlyProvider } from "../utils/constants/providers";
import { getTOKEN } from "../utils/constants/contracts";

const useAllowance = () => {
    const [val, setVal] = useState(0);
    const { address } = useWeb3ModalAccount()



    useEffect(() => {
        const contract = getTOKEN(readOnlyProvider);

        contract
            .allowance(address, process.env.REACT_APP_STUDENT_CHAIN_CONTRACT)
            .then((res) => {
                console.log("RESPONSESSSS", res);
                setVal(Number(res))
            })
            .catch((err) => {
                console.error("error fetching registration status: ", err);
                setVal(0);
            });
    }, [address]);

    return val;
}

export default useAllowance;
