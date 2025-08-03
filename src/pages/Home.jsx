const Home = () => {
    return (
        <div className="hero min-h-screen pt-[110px] px-10 md:px-20 lg:px-44 ">
            {/* Main Content */}

            {/* Hero Typography and Image */}
            <div className="relative max-w-6xl mx-auto">
                {/* Large Typography */}
                {/* <div className="text-center mb-16 relative">
                    <h1 className="text-xl md:text-xl">
                        Portfolio
                    </h1> */}
                <div className="text-center mb-16 relative">
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#916BBF] leading-none mb-4">
                        Portfolio
                    </h2>
                    <div className="relative">
                        <h3 className="text-4xl md:text-6xl lg:text-9xl font-light text-white leading-none">
                            Raihan Alvian
                        </h3>
                        
                        {/* Profile Image - positioned over the text
                        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[30rem] lg:h-[30rem] rounded overflow-hidden">
                                <img src="./assets/foto.png" alt="Front-End Developer" className="w-full h-full object-cover    "
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* </div> */}

                {/* Location */}
                
            </div>
            <div className="absolute bottom-5 text-left left-8">
                    <p className="text-sm text-white">Based in Depok, Indonesia</p>
                </div>
        </div>
    );
};

export default Home;