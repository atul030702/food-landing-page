import { useState } from "react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="w-full absolute z-10 top-0 left-0 bg-white sm:bg-transparent md:bg-transparent">
            <div className="flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 md:px-10 md:py-4">
                
                <h1 className="text-[#313131] text-xl sm:text-2xl md:text-3xl font-normal">
                    GO&nbsp;
                    <strong>FOOD</strong>
                </h1>
                
                <nav className="hidden lg:flex justify-center items-center gap-5" aria-label="Main navigation">
                    <button 
                        className="flex justify-center items-center gap-1 text-lg xl:text-xl text-[#313131] hover:text-[#345333] transition-all duration-200 cursor-pointer rounded-md px-2 py-1"
                        aria-expanded="false"
                        aria-haspopup="true"
                    >
                        <span>Home</span>
                        <img 
                            className="w-6 h-6" 
                            src="arrowDown-icon.svg" 
                            alt="" 
                            draggable="false" 
                            decoding="async" 
                            loading="lazy"
                            aria-hidden="true"
                        />
                    </button>
                    <button 
                        className="flex justify-center items-center gap-1 text-lg xl:text-xl text-[#313131] hover:text-[#345333] transition-all duration-200 cursor-pointer rounded-md px-2 py-1"
                        aria-expanded="false"
                        aria-haspopup="true"
                    >
                        <span>Groceries</span>
                        <img 
                            className="w-6 h-6" 
                            src="arrowDown-icon.svg" 
                            alt="" 
                            draggable="false" 
                            decoding="async" 
                            loading="lazy"
                            aria-hidden="true"
                        />
                    </button>
                    <button 
                        className="flex justify-center items-center gap-1 text-lg xl:text-xl text-[#313131] hover:text-[#345333] transition-all duration-200 rounded-md px-2 py-1 cursor-pointer"
                        aria-expanded="false"
                        aria-haspopup="true"
                    >
                        <span>Pages</span>
                        <img 
                            className="w-6 h-6" 
                            src="arrowDown-icon.svg" 
                            alt="" 
                            draggable="false" 
                            decoding="async" 
                            loading="lazy"
                            aria-hidden="true"
                        />
                    </button>
                </nav>

                <button className="hidden md:flex justify-center items-center text-white bg-[#345333] sm:bg-transparent md:bg-transparent px-4 md:ml-2 sm:ml-1 py-2 rounded-full hover:bg-[#2d4529] transition-all duration-200 text-sm lg:text-lg xl:text-xl cursor-pointer">
                    <span>Connect with us</span>
                    <img 
                        className="w-5 h-5 ml-2" 
                        src="./arrowForward-icon.svg" 
                        alt="" 
                        loading="lazy" 
                        decoding="async" 
                        draggable="false"
                        aria-hidden="true"
                    />
                </button>

                <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2">
                    {/* Search Button */}
                    <button 
                        className="p-1.5 sm:p-2 md:p-2 bg-[#345333] sm:bg-white/10 md:bg-white/10 rounded-full md:hover:bg-white/5 sm:hover:bg-white/5 transition-all duration-200 cursor-pointer"
                        aria-label="Search"
                    >
                        <img 
                            className="w-5 h-5 sm:w-6 sm:h-6" 
                            src="./search-icon.svg" 
                            alt="" 
                            loading="lazy" 
                            decoding="async" 
                            draggable="false"
                            aria-hidden="true"
                        />
                    </button>
                    
                    {/* User Button */}
                    <button 
                        className="p-1.5 sm:p-2 md:p-2 bg-[#345333] sm:bg-white/10 md:bg-white/10 rounded-full md:hover:bg-white/5 sm:hover:bg-white/5 transition-all duration-200 cursor-pointer"
                        aria-label="User account"
                    >
                        <img 
                            className="w-5 h-5 sm:w-6 sm:h-6" 
                            src="./user-icon.svg" 
                            alt="" 
                            loading="lazy" 
                            decoding="async" 
                            draggable="false"
                            aria-hidden="true"
                        />
                    </button>
                    
                    {/* Favorites Button */}
                    <button 
                        className="p-1.5 sm:p-2 md:p-2 bg-[#345333] sm:bg-white/10 md:bg-white/10 rounded-full sm:hover:bg-white/5 md:hover:bg-white/5 transition-all duration-200 cursor-pointer"
                        aria-label="Favorites"
                    >
                        <img 
                            className="w-5 h-5 sm:w-6 sm:h-6" 
                            src="./favorite-icon.svg" 
                            alt="" 
                            loading="lazy" 
                            decoding="async" 
                            draggable="false"
                            aria-hidden="true"
                        />
                    </button>
                    
                    {/* Cart Button */}
                    <button 
                        className="p-1.5 sm:p-2 md:p-2 bg-[#345333] md:bg-white/10 sm:bg-white/10 rounded-full md:hover:bg-white/5 sm:hover:bg-white/5 transition-all duration-200 cursor-pointer"
                        aria-label="Shopping cart"
                    >
                        <img 
                            className="w-5 h-5 sm:w-6 sm:h-6" 
                            src="./cart-icon.svg" 
                            alt="" 
                            loading="lazy" 
                            decoding="async" 
                            draggable="false"
                            aria-hidden="true"
                        />
                    </button>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden p-1.5 bg-white/10 rounded-full hover:bg-white/5 transition-all duration-200 ml-1"
                        onClick={toggleMobileMenu}
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle mobile menu"
                    >
                        <img 
                            className="size-7"
                            src={isMobileMenuOpen ? "./collapse-icon.svg" : "./menu-icon.svg"}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            draggable="false"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
                    <nav className="flex flex-col p-4 space-y-2" aria-label="Mobile navigation">
                        <button 
                            className="flex justify-between items-center text-left text-lg text-[#313131] hover:text-[#345333] transition-all duration-200 rounded-md px-3 py-2"
                            onClick={closeMobileMenu}
                            aria-expanded="false"
                            aria-haspopup="true"
                        >
                            <span>Home</span>
                            <img 
                                className="w-6 h-6" 
                                src="arrowDown-icon.svg" 
                                alt="" 
                                draggable="false" 
                                decoding="async" 
                                loading="lazy"
                                aria-hidden="true"
                            />
                        </button>
                        <button 
                            className="flex justify-between items-center text-left text-lg text-[#313131] hover:text-[#345333] transition-all duration-200 rounded-md px-3 py-2"
                            onClick={closeMobileMenu}
                            aria-expanded="false"
                            aria-haspopup="true"
                        >
                            <span>Groceries</span>
                            <img 
                                className="w-6 h-6" 
                                src="arrowDown-icon.svg" 
                                alt="" 
                                draggable="false" 
                                decoding="async" 
                                loading="lazy"
                                aria-hidden="true"
                            />
                        </button>
                        <button 
                            className="flex justify-between items-center text-left text-lg text-[#313131] hover:text-[#345333] transition-all duration-200 rounded-md px-3 py-2"
                            onClick={closeMobileMenu}
                            aria-expanded="false"
                            aria-haspopup="true"
                        >
                            <span>Pages</span>
                            <img 
                                className="w-6 h-6" 
                                src="arrowDown-icon.svg" 
                                alt="" 
                                draggable="false" 
                                decoding="async" 
                                loading="lazy"
                                aria-hidden="true"
                            />
                        </button>
                        <button 
                            className="flex justify-center items-center text-white bg-[#345333] px-4 py-3 rounded-full hover:bg-[#2d4529] transition-all duration-200 text-lg mt-4"
                            onClick={closeMobileMenu}
                        >
                            <span>Connect with us</span>
                            <img 
                                className="w-5 h-5 ml-2" 
                                src="./arrowForward-icon.svg" 
                                alt="" 
                                loading="lazy" 
                                decoding="async" 
                                draggable="false"
                                aria-hidden="true"
                            />
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;