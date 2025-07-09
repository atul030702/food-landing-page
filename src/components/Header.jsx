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
        <header className="w-full absolute z-10 top-0 left-0">
            <div className="flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 md:px-10 md:py-4">
                {/* Logo */}
                <h1 className="text-[#313131] text-xl sm:text-2xl md:text-3xl font-normal">
                    GO&nbsp;
                    <strong>FOOD</strong>
                </h1>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex justify-center items-center gap-5" aria-label="Main navigation">
                    <button 
                        className="flex justify-center items-center gap-1 text-lg xl:text-xl text-[#313131] hover:text-[#345333] transition-colors focus:outline-none focus:ring-2 focus:ring-[#345333] focus:ring-offset-2 rounded-md px-2 py-1"
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
                        className="flex justify-center items-center gap-1 text-lg xl:text-xl text-[#313131] hover:text-[#345333] transition-colors focus:outline-none focus:ring-2 focus:ring-[#345333] focus:ring-offset-2 rounded-md px-2 py-1"
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
                        className="flex justify-center items-center gap-1 text-lg xl:text-xl text-[#313131] hover:text-[#345333] transition-colors focus:outline-none focus:ring-2 focus:ring-[#345333] focus:ring-offset-2 rounded-md px-2 py-1"
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

                {/* Desktop CTA Button */}
                <button className="hidden md:flex justify-center items-center text-white bg-[#345333] px-4 py-2 rounded-full hover:bg-[#2d4529] transition-colors focus:outline-none focus:ring-2 focus:ring-[#345333] focus:ring-offset-2 text-sm lg:text-lg xl:text-xl">
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

                {/* Icon Buttons */}
                <div className="flex items-center justify-center gap-2">
                    {/* Search Button */}
                    <button 
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
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
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
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
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
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
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
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
                        className="lg:hidden p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ml-2"
                        onClick={toggleMobileMenu}
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle mobile menu"
                    >
                        <svg 
                            className="w-5 h-5 sm:w-6 sm:h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
                    <nav className="flex flex-col p-4 space-y-2" aria-label="Mobile navigation">
                        <button 
                            className="flex justify-between items-center text-left text-lg text-[#313131] hover:text-[#345333] transition-colors focus:outline-none focus:ring-2 focus:ring-[#345333] focus:ring-offset-2 rounded-md px-3 py-2"
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
                            className="flex justify-between items-center text-left text-lg text-[#313131] hover:text-[#345333] transition-colors focus:outline-none focus:ring-2 focus:ring-[#345333] focus:ring-offset-2 rounded-md px-3 py-2"
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
                            className="flex justify-between items-center text-left text-lg text-[#313131] hover:text-[#345333] transition-colors focus:outline-none focus:ring-2 focus:ring-[#345333] focus:ring-offset-2 rounded-md px-3 py-2"
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
                            className="flex justify-center items-center text-white bg-[#345333] px-4 py-3 rounded-full hover:bg-[#2d4529] transition-colors focus:outline-none focus:ring-2 focus:ring-[#345333] focus:ring-offset-2 text-lg mt-4"
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

/*
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="w-full absolute z-10 top-0 left-0">
            <div className="flex justify-between items-center px-4 py-3
                sm:px-6 sm:py-4 md:px-10 md:py-4"
            >
                <h1 className="text-[#313131] text-xl sm:text-2xl md:text-3xl font-normal md:pl-10 "
                >
                    GO&nbsp;
                    <strong>FOOD</strong>
                </h1> 

                <nav className="hidden lg:flex justify-center items-center gap-5" aria-label="Main navigation">
                    <button className="flex justify-center items-start text-lg xl:text-xl text-[#313131] font-semibold hover:scale-110 transition duration-300 cursor-pointer md:text-xl"
                        aria-expanded="false" aria-haspopup="true"
                    >
                        <span> Home </span>
                        <img 
                            className="size-6 mt-1" 
                            src="arrowDown-icon.svg" 
                            alt="arrow down icon" 
                            draggable="false" 
                            decoding="async" 
                            loading="lazy" 
                            aria-hidden="true"
                        />
                    </button>
                    <button className="flex justify-center items-center text-lg xl:text-xl text-[#313131] font-semibold hover:scale-110 transition duration-300 cursor-pointer md:text-xl"
                        aria-expanded="false" aria-haspopup="true"
                    >
                        <span>Groceries</span>
                        <img 
                            className="size-6 mt-1" 
                            src="arrowDown-icon.svg" 
                            alt="arrow down icon" 
                            draggable="false" 
                            decoding="async" 
                            loading="lazy" 
                            aria-hidden="true"
                        />
                    </button>
                    <button className="flex justify-center items-center text-lg xl:text-xl text-[#313131] font-semibold hover:scale-110 transition duration-300 cursor-pointer md:text-xl"
                        aria-expanded="false" aria-haspopup="true"
                    >
                        <span>Pages</span>
                        <img 
                            className="size-6 mt-1" 
                            src="arrowDown-icon.svg" 
                            alt="arrow down icon" 
                            draggable="false" 
                            decoding="async" 
                            loading="lazy" 
                            aria-hidden="true"
                        />
                    </button>
                </nav>

                <button className="hidden md:flex justify-center items-center text-white bg-[#345333] px-4 py-2 rounded-full transition duration-300 focus:outline-none focus:ring-[#345333] focus:ring-offset-2 text-sm lg:text-lg xl:text-xl cursor-pointer">
                    <span>Connect with us</span>
                    <img 
                        className="size-5 ml-2" 
                        src="./arrowForward-icon.svg" 
                        alt="forward arrow icon" 
                        loading="lazy" 
                        decoding="async" 
                        draggable="false" 
                        aria-hidden="true"
                    />
                </button>

                <div className="flex items-center justify-center
                    "
                >
                    <button
                        className="p-2.5 bg-white/10 mr-2 rounded-full cursor-pointer hover:bg-white/5 transition-all"
                        aria-label="Search Area"
                    >
                        <img className="size-6" src="./search-icon.svg" alt="search icon" loading="lazy" decoding="async" draggable="false"/>
                    </button>
                    <button className="p-2.5 bg-white/10 mr-2 rounded-full cursor-pointer hover:bg-white/5 transition-all">
                        <img className="size-6" src="./user-icon.svg" alt="search icon" loading="lazy" decoding="async" draggable="false"/>
                    </button>
                    <button className="p-2.5 bg-white/10 mr-2 rounded-full cursor-pointer hover:bg-white/5 transition-all">
                        <img className="size-6" src="./favorite-icon.svg" alt="search icon" loading="lazy" decoding="async" draggable="false"/>
                    </button>
                    <button className="p-2.5 bg-white/10 rounded-full cursor-pointer hover:bg-white/5 transition-all">
                        <img className="size-6" src="./cart-icon.svg" alt="search icon" loading="lazy" decoding="async" draggable="false"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;*/