const CountBadge = ({ count = 0, size = 'default' }) => {
    const sizeClasses = {
        small: 'w-4 h-4 text-xs',
        default: 'w-5 h-5 text-xs',
        large: 'w-6 h-6 text-sm'
    };

    if (count === 0) return null;

    return (
        <div className={`
            absolute -top-1 -right-1 
            ${sizeClasses[size]} 
            bg-yellow-400 text-black 
            rounded-full 
            flex items-center justify-center 
            font-bold 
            border border-black
            z-10
        `}>
            {count > 99 ? '99+' : count}
        </div>
    );
};

export default CountBadge;