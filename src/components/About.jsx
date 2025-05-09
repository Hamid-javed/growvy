import React from "react";

const AboutGrowvy = () => {
  return (
    <div className="relative px-4 md:px-20 py-10 text-center">
      {/* Green Pill Shape */}
      <div className="absolute right-10 top-4">
        <div className="h-3 w-52 bg-green-600 rounded-full"></div>
      </div>

      {/* Main Text */}
      <p className="text-lg md:text-xl font-medium text-black max-w-4xl mx-auto leading-relaxed">
        “Growvy is built to streamline hiring, optimize assets, and drive
        business growth. Our mission is to create a tech–driven ecosystem where
        companies hire smarter, manage resources efficiently, and scale
        effortlessly. Whether you're seeking top talent, asset solutions, or
        business expansion, Growvy is your trusted partner in success.”
      </p>
    </div>
  );
};

export default AboutGrowvy;
