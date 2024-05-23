import howimage from "../../assets/howimage.svg";


const How = () => {
    return (
        <div className="bg-white ">
            <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
                <h1 className="text-[#331000] text-3xl font-bold md:mx-96 md:px-12 mt-4">
                    How to Navigate
                </h1>
                <h2 className="text-[#331000] text-2xl font-normal mb-2 mt-2">
                    Welcome to StudentChain
                </h2>
                <h3 className="text-[#331000] text-3xl font-bold">
                    How to Navigate StudentChain
                </h3>
                <div className="bg-white grid-cols-4 gap-4 md:flex md:flex-row">
                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10 md:mx-10 shadow-md">
                        <img src={howimage} alt="howimage" />
                        <div className="w-full h-1/2">
                            <h3 className="text-[#331000] text-xl font-bold leading-loose ">
                                Connect Wallet
                            </h3>
                            <p className="text-[#331000] text-sm font-normal pb-2 text-justify">
                                Whether you are looking forward to
                                <br />
                                fund or to secure funding, the first
                                <br />
                                step is to connect your wallet to get started
                                <br />
                            </p>
                        </div>

                    </div>



                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10 shadow-md">
                        <img src={howimage} alt="howimage" />
                        <div className="w-full h-1/2 p-1">
                            <h3 className="text-[#331000] text-xl font-bold leading-loose">
                                Submit a Proposal
                            </h3>
                            <p className="text-[#331000] text-sm font-normal text-justify">
                                If you are looking forward to secure
                                <br />
                                funding for your education, click
                                <br />
                                on the submit a proposal button to proceed
                            </p>
                        </div>
                    </div>

                    <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8 mt-10 shadow-md md:mx-8">
                        <img src={howimage} alt="howimage" />
                        <div className="w-full h-1/2 p-1">
                            <h3 className="text-[#331000] text-xl font-bold leading-loose">
                                Fund
                            </h3>
                            <p className="text-[#331000] text-sm font-normal pb-4 text-justify">
                                GreenRewards makes sustainability
                                <br />
                                accessible and engaging. Embrace
                                <br />
                                the future of sustainability.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default How;
