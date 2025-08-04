import CardSwap, { Card } from '../components/effects/CardSwap.jsx';

const Home = () => {
    return (
        <div className="hero min-h-screen pt-[110px] relative">
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-110px)] w-full px-6 md:px-12 lg:px-20 gap-10">

                
                {/* Left Side - Text Content */}
                <div className="flex-1 z-10 text-center lg:text-left mb-8 lg:mb-0 max-w-2xl">
                <h1 className="text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-black leading-tight mb-2">
                    Portfolio
                </h1>
                <h2 className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight mb-2">
                    From <u>Student</u> to <u>Front-End Developer</u> <br />
                </h2>
                <p className="text-lg text-gray-500 mb-8">
                    Just look at it go!
                </p>
                </div>


                {/* Right Side - CardSwap with responsive sizing */}
                <div className="relative flex-shrink-0 flex justify-center lg:justify-end w-full lg:w-auto lg:top-12">
                    

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
                                <div className="bg-white border-2 rounded-2xl p-8 h-full flex flex-col shadow-2xl">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-4 h-4 bg-[#FF5F56] rounded-full"></div>
                                        <span className="text-black font-bold text-2xl">Customizable</span>
                                    </div>
                                    <div className="flex-1 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-2xl shadow-lg relative overflow-hidden">
                                        {/* Placeholder untuk gambar - ganti src dengan URL gambar yang diinginkan */}
                                        <img 
                                            src="/assets/her.jpg" 
                                            alt="Customizable feature" 
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                        {/* Overlay gradient untuk efek blend */}
                                        <div className="absolute inset-0 rounded-2xl"></div>
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="bg-white border-2 rounded-2xl p-8 h-full flex flex-col shadow-2xl">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-4 h-4 bg-[#FFBD2E] rounded-full"></div>
                                        <span className="text-black font-bold text-2xl">Reliable</span>
                                    </div>
                                    <div className="flex-1 rounded-2xl shadow-lg overflow-hidden">
                                        <img 
                                            src="/assets/bg.jpg" 
                                            alt="Reliable feature" 
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="bg-white border-2 rounded-2xl p-8 h-full flex flex-col shadow-2xl">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-4 h-4 bg-[#27C93F] rounded-full"></div>
                                        <span className="text-black font-bold text-2xl">Smooth</span>
                                    </div>
                                    <div className="flex-1 rounded-2xl shadow-lg overflow-hidden">
                                        <img 
                                            src="/assets/bg.jpg" 
                                            alt="Smooth feature" 
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </Card>
                        </CardSwap>
                    </div>

                    {/* Tablet version */}
                    <div className="hidden md:block lg:hidden">
                        <CardSwap
                            width={450}
                            height={360}
                            cardDistance={50}
                            verticalDistance={60}
                            delay={5000}
                            pauseOnHover={false}
                        >
                            <Card>
                                <div className="bg-black rounded-xl p-5 h-full flex flex-col shadow-2xl">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-black font-semibold text-base">Customizable</span>
                                    </div>
                                    <div className="flex-1 rounded-lg shadow-lg overflow-hidden">
                                        <img 
                                            src="/assets/bg.jpg" 
                                            alt="Customizable feature" 
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="bg-white border-2 rounded-xl p-5 h-full flex flex-col shadow-2xl">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        <span className="text-black font-semibold text-base">Reliable</span>
                                    </div>
                                    <div className="flex-1 rounded-lg shadow-lg overflow-hidden">
                                        <img 
                                            src="/assets/bg.jpg" 
                                            alt="Reliable feature" 
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="bg-white border-2 rounded-xl p-5 h-full flex flex-col shadow-2xl">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                                        <span className="text-black font-semibold text-base">Smooth</span>
                                    </div>
                                    <div className="flex-1 rounded-lg shadow-lg overflow-hidden">
                                        <img 
                                            src="/assets/bg.jpg" 
                                            alt="Smooth feature" 
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </Card>
                        </CardSwap>
                    </div>

                    {/* Mobile version */}
                    <div className="block md:hidden">
                        <CardSwap
                            width={320}
                            height={260}
                            cardDistance={35}
                            verticalDistance={45}
                            delay={5000}
                            pauseOnHover={false}
                        >
                            <Card>
                                <div className="bg-white border-2 rounded-lg p-4 h-full flex flex-col shadow-xl">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                                        <span className="text-black font-semibold text-sm">Customizable</span>
                                    </div>
                                    <div className="flex-1 rounded-lg shadow-lg overflow-hidden">
                                        <img 
                                            src="/assets/bg.jpg" 
                                            alt="Customizable feature" 
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="bg-white border-2 rounded-lg p-4 h-full flex flex-col shadow-xl">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                                        <span className="text-black font-semibold text-sm">Reliable</span>
                                    </div>
                                    <div className="flex-1 rounded-lg shadow-lg overflow-hidden">
                                        <img 
                                            src="/assets/bg.jpg" 
                                            alt="Reliable feature" 
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="bg-white border-2 rounded-lg p-4 h-full flex flex-col shadow-xl">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                                        <span className="text-black font-semibold text-sm">Smooth</span>
                                    </div>
                                    <div className="flex-1 rounded-lg shadow-lg overflow-hidden">
                                        <img 
                                            src="/assets/bg.jpg" 
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
            
            
        </div>
    );
};

export default Home;