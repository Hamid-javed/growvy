import React from "react";

const userTypes = [
  {
    title: "I’m a Job Seeker!",
    desc: "Looking for job according to my skills and requirements.",
    button: "Jobs",
    image: "/img2.png", // Update with your image paths
  },
  {
    title: "I’m an Employer!",
    desc: "Looking for talented candidates for my company.",
    button: "Post a Job",
    image: "/img3.png",
  },
  {
    title: "I’m a E-commerce Store!",
    desc: "Looking for potential sales data for sales campaign.",
    button: "Sales Data",
    image: "/img4.png",
  },
  {
    title: "I’m Business!",
    desc: "Looking for CRM or Data resources to boost my business.",
    button: "Business Plans",
    image: "/img5.png",
  },
];

const UserTypesSection = () => {
  return (
    <div className="flex flex-col gap-12 px-6 md:px-20 py-16">
      {userTypes.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row justify-between items-center gap-6 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-40 md:w-56 object-contain"
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold">{item.title}</h2>
            <p className="my-2 text-sm">{item.desc}</p>
            <button className="bg-green-600 text-white text-sm px-10 py-2 rounded-full mt-2 cursor-pointer">
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTypesSection;
