// Skeleton Loader for Hotel Cards
const SkeletonCard = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg p-4 animate-pulse">
      <div className="h-48 bg-gray-300 dark:bg-gray-600 w-full mb-4 rounded"></div>
      <div className="h-4 bg-gray-400 dark:bg-gray-500 w-3/4 mb-3 rounded"></div>
      <div className="h-4 bg-gray-400 dark:bg-gray-500 w-1/2 mb-3 rounded"></div>
      <div className="h-6 bg-gray-400 dark:bg-gray-500 w-full mb-3 rounded"></div>
      <div className="h-10 bg-gray-500 dark:bg-gray-600 w-full rounded"></div>
    </div>
  );
};
export default SkeletonCard;
