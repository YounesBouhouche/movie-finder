const Spinner = ({ text }: { text?: string }) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-gray-700 border-t-purple-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-pink-500 rounded-full animate-spin animation-delay-150"></div>
            </div>
            <div className="text-gray-400 text-lg font-medium animate-pulse">
                { text || "Loading amazing movies..." }
            </div>
        </div>
    )
}

export default Spinner;