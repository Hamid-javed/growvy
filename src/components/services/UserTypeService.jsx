import React from "react";

const userTypes = [
  {
    title: "Problems in Hiring",
    desc: "Companies spend high $$$ budgets on job portals like Indeed and LinkedIn, only to receive low-quality CVs and irrelevant applicants, making hiring slow and inefficient.",
    button: "",
    image: "/img12.png", // Update with your image paths
  },
  {
    title: "With Growvy Solution",
    desc: "With Growvy, businesses can access a database of active job seekers who have recently joined for job search. Use advanced filters to find the right candidates quickly and at a fraction of the cost—no wasted budget, just quality hires!",
    button: "Start Now",
    image: "/img13.png",
  },
  {
    title: "E-commerce Business",
    desc: "E-commerce businesses struggle with high marketing costs, inefficient operations, and slow growth, making it difficult to scale and maximize profits.",
    button: "",
    image: "/img14.png",
  },
  {
    title: "With Growvy Solution",
    desc: "Growvy helps e-commerce businesses streamline operations, manage assets, and implement smart growth strategies to boost sales and efficiency—all at a low cost with proven results.",
    button: "Start Now",
    image: "/img15.png",
  },
];

const UserTypesSection = () => {
  return (
    <div className="flex flex-col gap-12 px-6 md:px-20 py-16">
      {userTypes.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row justify-between items-center gap-6 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-40 md:w-[500px] object-contain bg-transparent mix-blend-multiply"
          />

          <div className={`text-center md:text-left max-w-md`}>
            <h2 className="text-4xl font-bold">{item.title}</h2>
            <p className="my-2 font-semibold">{item.desc}</p>
            {item.button && (
              <button className="bg-green-600 text-white text-sm px-10 py-2 rounded-full mt-2 cursor-pointer">
                {item.button}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTypesSection;
