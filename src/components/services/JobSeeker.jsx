const JoinUsersSection = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8">
        Join over 10k users worldwide
      </h2>
      <button
        type="button"
        className="bg-green-600 cursor-pointer hover:bg-[#00b048] text-white font-semibold text-base sm:text-lg py-3 px-8 sm:py-3 sm:px-10 rounded-full shadow-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      >
        View Pricing
      </button>
    </div>
  );
};

export default JoinUsersSection;
