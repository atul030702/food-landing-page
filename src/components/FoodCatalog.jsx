import { useState } from "react";

import ItemCategory from "./ItemCategory.jsx";

const FoodCatalog = () => {
    const categoryNames = ["vegetarian", "chicken", "seafood", "dessert", "breakfast"];
    const [selectedCategory, setSelectedCategory] = useState(categoryNames[0]);

    return (
        <div className="flex flex-col items-center justify-start mt-5 sm:mt-7 md:mt-10">

            <h3 className="text-base md:text-lg sm:text-[1rem] font-semibold">Shop by Category</h3>
            <h1 className="text-xl md:text-3xl sm:text-3xl font-bold font-serif">Top Category Of Organic Food</h1>

            <div className="catalog w-full px-5 my-5 flex justify-center items-center overflow-x-auto">
                {categoryNames.map((category, index) => (
                    <button key={index}
                        onClick={() => setSelectedCategory(category)}
                        className={`bg-[#F2F2EC] px-4 py-2 mx-2 sm:mx-3 md:mx-5 text-base sm:text-lg md:text-xl font-semibold rounded-full cursor-pointer
                        ${selectedCategory === category ? "focus:bg-[#345333] focus:text-white" : "bg-[#F2F2EC] text-black"}`}
                    >
                        {category.toUpperCase()}
                    </button>
                ))}
            </div>

            <ItemCategory categoryName={selectedCategory} />
        </div>
    );
};

export default FoodCatalog;