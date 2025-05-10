const AboutGrowvy = () => {
  return (
    <section className="relative px-6 md:px-16 lg:px-28 py-20 overflow-hidden">
      {/* Decorative Shape */}
      <div className="absolute -top-10 -right-10 h-40 w-40 bg-green-100 rounded-full blur-2xl opacity-70"></div>
      <div className="absolute top-10 left-10 h-24 w-24 bg-green-200 rounded-full blur-xl opacity-50"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
          Empowering Growth with{" "}
          <span className="text-green-600">Innovation</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
          “Growvy is built to streamline hiring, optimize assets, and drive
          business growth. Our mission is to create a tech–driven ecosystem
          where companies hire smarter, manage resources efficiently, and scale
          effortlessly. Whether you're seeking top talent, asset solutions, or
          business expansion,
          <span className="text-green-600 font-semibold"> Growvy</span> is your
          trusted partner in success.”
        </p>

        {/* Decorative Bar */}
        <div className="mt-10 flex justify-center">
          <div className="h-2 w-40 bg-green-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutGrowvy;
