import { useState, useEffect } from "react";

const ItemCategory = ({ categoryName }) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(categoryName);

    useEffect(() => {
        async function fetchMealData() {
            try {
                setLoading(true);

                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
                const data = await response.json();
                console.log(data);
                setMeals(data?.meals || []);
            } catch (error) {
                console.error("Failed to fetch data:", error.message);
            } finally {
                setLoading(false);
            }
        }

        if(categoryName) fetchMealData();
    }, [categoryName]);

    const getRandomPrice = () => {
        return (Math.random() * 10 + 5).toFixed(2);
    };

    if(loading) {
        return <div className="text-center text-lg mt-10">Loading {categoryName}</div>
    }

    return (
        <div className="w-full flex flex-wrap justify-center items-center mt-6 px-2 md:px-5 sm:px-4">
            {meals?.map((meal) => (
                <div key={meal?.idMeal}
                    className="w-full my-2 sm:w-1/2 md:w-1/2 flex items-center justify-start"
                >
                    <img
                        className="p-2 rounded-full size-30 md:size-50"
                        src={meal?.strMealThumb}
                        alt={meal?.strMeal}
                        loading="lazy"
                        decoding="async"
                        draggable="false"
                    />
                    <div className="flex flex-col items-start justify-center">
                        <div className="w-full flex justify-between items-center">
                            <h2 className="font-bold text-lg md:text-2xl sm:text-xl">{meal?.strMeal}</h2>
                            <p className="text-[#345333] text-base md:text-lg sm:text-lg font-semibold ml-4">${getRandomPrice()}</p>
                        </div>
                        <div className="w-full h-px bg-gray-400 block"></div>
                        <div className="w-full flex justify-between items-center gap-1 sm:gap-2 md:gap-5">
                            <p className="text-sm md:text-base">Lorem ipsum dolor sit amet quam in lacus risus.</p>
                            <button className="text-[#345333] text-base md:text-lg md:font-semibold cursor-pointer whitespace-nowrap">
                                {`SHOP NOW -->`}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemCategory;