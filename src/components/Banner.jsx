const Banner = () => {
    return (
        <main className="w-full min-h-full md:min-h-screen relative flex flex-col-reverse lg:flex-row -z-10">
            
            <div className="absolute top-[10%] right-[35%] sm:top-[7%] sm:right-8 md:top-12 md:right-12 lg:top-[20%] lg:right-[15%] z-10">
                <img 
                    className="w-25 h-25 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-auto lg:h-auto max-w-none object-cover rounded-lg lg:rounded-none"
                    src="./food-image.webp" 
                    alt="Fresh organic grocery food" 
                    loading="lazy" 
                    draggable="false"
                />
            </div>

            {/* Left Section - Content */}
            <section className="w-full lg:w-3/5 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-0 min-h-70 sm:min-h-screen md:min-h-screen bg-[#F2F1EC] flex items-center justify-center lg:justify-start">
                <div className="w-full max-w-2xl text-[#313131] text-center lg:text-left z-20">
                    
                    <div className="inline-block mt-10 bg-[#345333] text-white p-3 py-1 rounded-full text-sm sm:text-base font-medium mb-4">
                        Discount up to 20%
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-6">
                        Buy Fresh And Organic Grocery{" "}
                        <span className="relative inline-block">
                            Food
                            <img 
                                className="w-14 h-8 sm:w-18 sm:h-10 md:w-25 md:h-12 lg:w-24 lg:h-12 xl:w-28 xl:h-14 absolute left-full top-0 sm:top-1 md:top-2 lg:top-2 xl:top-3 ml-2 rounded-full object-cover" 
                                src="./orange-and-kiwi.webp" 
                                alt="Fresh orange and kiwi fruits" 
                                loading="lazy" 
                                decoding="async" 
                                draggable="false"
                            />
                        </span>  
                    </h1>   

                    
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit purus nec nibh tortor ipsum. Placerat consequat lorem. Vivamus varius tellus dui, vel nunc.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8">
                        
                        <button className="px-6 py-3 sm:px-8 sm:py-4 flex items-center justify-center text-white font-semibold text-lg sm:text-xl bg-[#345333] rounded-full hover:bg-[#2d4529] transition duration-300 whitespace-nowrap cursor-pointer">
                            <span>SHOP NOW</span>
                            <img 
                                className="wiggle-x w-5 h-5 sm:w-6 sm:h-6 ml-2" 
                                src="./arrowForward-icon.svg" 
                                alt="" 
                                draggable="false" 
                                loading="lazy" 
                                decoding="async"
                                aria-hidden="true"
                            />
                        </button>

                        <div className="flex items-center gap-6 sm:gap-8">
                            <div className="flex flex-col items-center sm:items-start">
                                <h2 className="text-2xl sm:text-3xl font-semibold" aria-label="35 thousand plus users">35k+</h2>
                                <p className="text-gray-500 text-base sm:text-lg font-medium">Users</p>
                            </div>
                            
                            <div className="w-px h-12 bg-gray-400 block" aria-hidden="false"></div>
                            
                            <div className="flex flex-col items-center sm:items-start">
                                <h2 className="text-2xl sm:text-3xl font-semibold" aria-label="18 thousand plus products">18k+</h2>
                                <p className="text-gray-500 text-base sm:text-lg font-medium">Products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Right Section - Green Background */}
            <section className="w-full block lg:w-2/5 min-h-45 sm:min-h-48 lg:min-h-screen bg-[#345333] -z-20" aria-hidden="true"></section>
        </main>
    );
};

export default Banner;
