
// We create this to make a better USER experiences.
const Shimmer = () => {
    return (
      <div className="flex flex-col items-center justify-center h-auto bg-gray-100">
        <div className="w-full max-w-screen-lg p-4 bg-gray-100">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="res-card m-4 p-4 w-[250px] bg-gray-300 rounded-lg animate-pulse"
                >
                  <div className="h-[150px] w-[100%] bg-gray-400 rounded-lg mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-400 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-400 rounded w-full"></div>
                    <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-400 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  
  