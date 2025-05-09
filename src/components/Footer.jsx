const StarIcon = ({ className = "w-8 h-8 text-green-500" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.324h5.372a.562.562 0 01.324.988l-4.344 3.156a.563.563 0 00-.182.557l1.638 5.879a.563.563 0 01-.816.622l-4.344-3.156a.563.563 0 00-.668 0l-4.344 3.156a.563.563 0 01-.816-.622l1.638-5.879a.563.563 0 00-.182-.557l-4.344-3.156a.562.562 0 01.324-.988h5.372a.563.563 0 00.475-.324L11.48 3.5z"
    />
  </svg>
);

const GrowvyFooterSection = () => {
  const navLinks = [
    "About Us",
    "Services",
    "Plans & Pricing",
    "Business Solutions",
    "Success Stories",
    "Jobs",
  ];

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="flex flex-col space-y-5">
          <h2 className="text-5xl font-bold text-black">Growvy</h2>
          <p className="text-[16px] font-semibold leading-relaxed max-w-xs">
            Optimize your business with smart asset management, growth
            strategies, and cutting-edge solutions to boost sales and efficiency
            with Growvy!
          </p>
          <div className="flex space-x-3 items-center">
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              f
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm hover:opacity-90 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802C9.042 3.965 8.693 3.976 7.426 4.033c-2.857.13-4.213 1.522-4.342 4.342C3.028 9.66 3.018 9.995 3.018 12c0 2.005.01 2.34.067 3.623.13 2.82 1.486 4.213 4.342 4.342 1.267.057 1.615.069 4.574.069s3.307-.012 4.573-.069c2.857-.13 4.213-1.522 4.342-4.342.057-1.283.067-1.618.067-3.623s-.01-2.34-.067-3.623c-.13-2.82-1.486-4.213-4.342-4.342-1.267-.057-1.615-.069-4.574-.069s-3.307.012-4.573.069zM12 7.197c-2.646 0-4.803 2.157-4.803 4.803s2.157 4.803 4.803 4.803 4.803-2.157 4.803-4.803S14.646 7.197 12 7.197zm0 7.803c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.965-7.965c-.786 0-1.429.643-1.429 1.429s.643 1.429 1.429 1.429 1.429-.643 1.429-1.429S17.75 7.035 16.965 7.035z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-sky-700 transition-colors"
            >
              in
            </a>
          </div>
        </div>

        <div className="flex flex-col md:mt-0 md:pl-4 lg:pl-8">
          <ul className="mt-6 list-disc list-inside">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[18px] font-bold text-gray-800 hover:text-green-600 hover:underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end items-center w-full mt-8 md:mt-0">
          <img src="img8.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default GrowvyFooterSection;
