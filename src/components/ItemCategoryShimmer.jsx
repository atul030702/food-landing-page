const ItemCategoryShimmer = ({ itemCount = 6 }) => {
    return (
        <div className="w-full flex flex-wrap justify-center items-center mt-6 px-2 md:px-5 sm:px-4">
            {Array.from({ length: itemCount }).map((_, index) => (
                <div 
                    key={index}
                    className="w-full my-2 sm:w-1/2 md:w-1/2 flex items-center justify-start animate-pulse"
                >
                    <div className="p-2 rounded-full size-25 sm:size-30 md:size-40 bg-gray-300 flex-shrink-0"></div>
                    
                    <div className="flex flex-col items-start justify-center flex-1 ml-2">
                        <div className="w-full flex justify-between items-center mb-2">
                            <div className="h-5 md:h-7 sm:h-6 bg-gray-300 rounded w-2/3"></div>
                            <div className="h-4 md:h-5 sm:h-5 bg-gray-300 rounded w-12 ml-4"></div>
                        </div>
                        
                        <div className="w-full border-b-2 border-gray-300 border-dotted mb-2"></div>
                        
                        <div className="w-full flex justify-between items-center gap-1 sm:gap-2 md:gap-5">
                            <div className="h-4 md:h-5 bg-gray-300 rounded w-3/5"></div>
                            <div className="h-4 md:h-5 bg-gray-300 rounded w-20 ml-1 sm:ml-2 md:ml-5"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemCategoryShimmer;