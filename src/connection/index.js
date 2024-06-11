import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";


export const SUPPORTED_CHAIN = 82;

const meter = {
    chainId: SUPPORTED_CHAIN,
    name: "Meter Testnet",
    currency: "MTR",
    explorerUrl: "https://scan-warringstakes.meter.io/",
    rpcUrl: process.env.REACT_APP_RPC_URL,
};

const metadata = {
    name: "StudentChain",
    description: "A blockchain app for supporting students",
    url: "https://studentchain.vercel.app/", // origin must match your domain & subdomain
    icons: ["https://studentchain.vercel.app/"],
};

export const configureWeb3Modal = () =>
    createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }),
        chains: [meter],
        projectId: process.env.REACT_APP_PROJECTID,
        enableAnalytics: false, // Optional - defaults to your Cloud configuration
        themeVariables: {
            '--w3m-accent': '#FF5100',
            '--w3m-color-mix': '#331000',
            '--w3m-color-mix-strength': 20
        },
    });
