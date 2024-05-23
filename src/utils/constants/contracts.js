import { ethers } from "ethers";
import Abi from "./StudentChain.json";
import Abi2 from "./fundStudent.json";
import Abi3 from "./tokenAbi.json";


export const getStudentChainContract = (providerOrSigner) =>
    new ethers.Contract(
        process.env.REACT_APP_STUDENT_CHAIN_CONTRACT,
        Abi,
        providerOrSigner
    );

export const getFunderNft = (providerOrSigner) =>
    new ethers.Contract(
        process.env.REACT_APP_FUNDERNFT_CONTRACT,
        Abi2,
        providerOrSigner
    );
    
export const getTOKEN = (providerOrSigner) =>
        new ethers.Contract(
            process.env.REACT_APP_ERC20_CONTRACT,
            Abi3,
            providerOrSigner
        );
    