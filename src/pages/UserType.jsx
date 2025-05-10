const userTypes = [
  {
    title: "I’m a Job Seeker!",
    desc: "Looking for a job that matches my skills and aspirations.",
    button: "Explore Jobs",
    image: "img2.png",
  },
  {
    title: "I’m an Employer!",
    desc: "Searching for skilled candidates to grow my company.",
    button: "Post a Job",
    image: "img3.png",
  },
  {
    title: "I’m an E-commerce Store!",
    desc: "Interested in sales data to boost my next campaign.",
    button: "View Sales Data",
    image: "img4.png",
  },
  {
    title: "I’m a Business!",
    desc: "Need CRM and data resources to scale efficiently.",
    button: "Business Plans",
    image: "img5.png",
  },
];

const UserTypesSection = () => {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
          Who Are You?
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {userTypes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain "
                />
              </div>

              {/* Text Content */}
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  {item.desc}
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base font-medium px-6 py-2 rounded-full shadow-md transition">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
