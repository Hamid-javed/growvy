const CallToAction = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src="img7.png"
          alt="Person working on laptop"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 md:pl-8 flex flex-col items-center">
        <button className="bg-green-600 hover:bg-[#00b048] cursor-pointer text-white font-medium px-8 py-3 rounded-full text-lg h-auto mb-4">
          Schedule Call Now
        </button>

        <div className="text-gray-700">
          <p className="text-lg font-medium">Join over 10k users worldwide.</p>
          <p className="text-lg font-medium">
            Start scheduling in less than 1 minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
