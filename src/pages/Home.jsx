import CardSwap, { Card } from '../components/effects/CardSwap.jsx';


const Home = () => {
    return (
        <div className="hero pt-28 pb-16 px-6 md:px-12 lg:px-20 relative min-h-screen">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8 lg:gap-12">

                {/* Left Side - Text Content */}
                <div className="flex-1 z-10 text-center lg:text-left mb-6 lg:mb-0 max-w-2xl">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-black dark:text-white leading-tight mb-2 transition-colors duration-300">
                        Portfolio
                    </h1>
                    <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white leading-tight mb-2 transition-colors duration-300">
                        {/* From <u>Student</u> to <u>Front-End Developer</u> <br /> */}Proses Pengerjaan hingga selesai
                    </h2>
                    <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-6 lg:mb-8 transition-colors duration-300">
                        Just look at it go!
                    </p>
                </div>

                {/* Mobile CardSwap - positioned below text */}
                <div className="block md:hidden w-full flex justify-center mt-8">
                    <CardSwap
                        width={320}
                        height={260}
                        cardDistance={35}
                        verticalDistance={45}
                        delay={5000}
                        pauseOnHover={false}
                    >
                        <Card>
                            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-5 h-full flex flex-col shadow-2xl transition-colors duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3.5 h-3.5 bg-[#FF5F56] rounded-full"></div>
                                    <span className="text-black dark:text-white font-bold text-lg transition-colors duration-300">Customizable</span>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-xl shadow-lg relative overflow-hidden">
                                    <img 
                                        src="/assets/profile-2.jpg" 
                                        alt="Customizable feature" 
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                    <div className="absolute inset-0 rounded-xl"></div>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-5 h-full flex flex-col shadow-2xl transition-colors duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3.5 h-3.5 bg-[#FFBD2E] rounded-full"></div>
                                    <span className="text-black dark:text-white font-bold text-lg transition-colors duration-300">Reliable</span>
                                </div>
                                <div className="flex-1 rounded-xl shadow-lg overflow-hidden">
                                    <img 
                                        src="/assets/profile-2.jpg" 
                                        alt="Reliable feature" 
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-5 h-full flex flex-col shadow-2xl transition-colors duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3.5 h-3.5 bg-[#27C93F] rounded-full"></div>
                                    <span className="text-black dark:text-white font-bold text-lg transition-colors duration-300">Smooth</span>
                                </div>
                                <div className="flex-1 rounded-xl shadow-lg overflow-hidden">
                                    <img 
                                        src="/assets/profile-2.jpg" 
                                        alt="Smooth feature" 
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                        </Card>
                    </CardSwap>
                </div>
            </div>

            {/* Desktop & Tablet CardSwap - fixed position at bottom right */}
            <div className="hidden md:block fixed bottom-4 right-4 z-20">
                {/* Desktop version */}
                <div className="hidden lg:block">
                    <CardSwap
                        width={480}
                        height={380}
                        cardDistance={60}
                        verticalDistance={80}
                        delay={5000}
                        pauseOnHover={false}
                    >
                        <Card>
                            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 lg:p-8 h-full flex flex-col shadow-2xl transition-colors duration-300">
                                <div className="flex items-center gap-4 mb-4 lg:mb-6">
                                    <div className="w-4 h-4 bg-[#FF5F56] rounded-full"></div>
                                    <span className="text-black dark:text-white font-bold text-xl lg:text-2xl transition-colors duration-300">Customizable</span>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-2xl shadow-lg relative overflow-hidden">
                                    <img 
                                        src="/assets/profile-2.jpg" 
                                        alt="Customizable feature" 
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                    <div className="absolute inset-0 rounded-2xl"></div>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 lg:p-8 h-full flex flex-col shadow-2xl transition-colors duration-300">
                                <div className="flex items-center gap-4 mb-4 lg:mb-6">
                                    <div className="w-4 h-4 bg-[#FFBD2E] rounded-full"></div>
                                    <span className="text-black dark:text-white font-bold text-xl lg:text-2xl transition-colors duration-300">Reliable</span>
                                </div>
                                <div className="flex-1 rounded-2xl shadow-lg overflow-hidden">
                                    <img 
                                        src="/assets/profile-2.jpg" 
                                        alt="Reliable feature" 
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 lg:p-8 h-full flex flex-col shadow-2xl transition-colors duration-300">
                                <div className="flex items-center gap-4 mb-4 lg:mb-6">
                                    <div className="w-4 h-4 bg-[#27C93F] rounded-full"></div>
                                    <span className="text-black dark:text-white font-bold text-xl lg:text-2xl transition-colors duration-300">Smooth</span>
                                </div>
                                <div className="flex-1 rounded-2xl shadow-lg overflow-hidden">
                                    <img 
                                        src="/assets/profile-2.jpg" 
                                        alt="Smooth feature" 
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </Card>
                    </CardSwap>
                </div>
                
                {/* Tablet version */}
                <div className="block lg:hidden">
                    <CardSwap
                        width={280}
                        height={220}
                        cardDistance={30}
                        verticalDistance={35}
                        delay={5000}
                        pauseOnHover={false}
                    >
                        <Card>
                            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 h-full flex flex-col shadow-2xl transition-colors duration-300">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-3 h-3 bg-[#FF5F56] rounded-full"></div>
                                    <span className="text-black dark:text-white font-semibold text-sm transition-colors duration-300">Customizable</span>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-lg shadow-lg relative overflow-hidden">
                                    <img 
                                        src="/assets/profile-2.jpg" 
                                        alt="Customizable feature" 
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 h-full flex flex-col shadow-2xl transition-colors duration-300">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-3 h-3 bg-[#FFBD2E] rounded-full"></div>
                                    <span className="text-black dark:text-white font-semibold text-sm transition-colors duration-300">Reliable</span>
                                </div>
                                <div className="flex-1 rounded-lg shadow-lg overflow-hidden">
                                    <img 
                                        src="/assets/profile-2.jpg" 
                                        alt="Reliable feature" 
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 h-full flex flex-col shadow-2xl transition-colors duration-300">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-3 h-3 bg-[#27C93F] rounded-full"></div>
                                    <span className="text-black dark:text-white font-semibold text-sm transition-colors duration-300">Smooth</span>
                                </div>
                                <div className="flex-1 rounded-lg shadow-lg overflow-hidden">
                                    <img 
                                        src="/assets/profile-2.jpg" 
                                        alt="Smooth feature" 
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </Card>
                    </CardSwap>
                </div>
            </div>
        </div>
    );
};

export default Home;