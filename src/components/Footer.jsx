const StarIcon = ({ className = "w-6 h-6 text-yellow-400" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="0"
    stroke="none"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.324h5.372a.562.562 0 01.324.988l-4.344 3.156a.563.563 0 00-.182.557l1.638 5.879a.563.563 0 01-.816.622l-4.344-3.156a.563.563 0 00-.668 0l-4.344 3.156a.563.563 0 01-.816-.622l1.638-5.879a.563.563 0 00-.182-.557l-4.344-3.156a.562.562 0 01.324-.988h5.372a.563.563 0 00.475-.324L11.48 3.5z"
    />
  </svg>
);

const FacebookIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.315 2.188a4.618 4.618 0 013.728 0 4.618 4.618 0 012.627 1.493 4.618 4.618 0 011.493 2.627c.19.922.292 1.88.309 2.822.017.942.017 2.83 0 3.772a4.618 4.618 0 01-.309 2.822 4.618 4.618 0 01-1.493 2.627 4.618 4.618 0 01-2.627 1.493 4.618 4.618 0 01-3.728 0 4.618 4.618 0 01-2.627-1.493 4.618 4.618 0 01-1.493-2.627c-.19-.922-.292-1.88-.309-2.822a17.628 17.628 0 010-3.772c.017-.942.118-1.9.309-2.822A4.618 4.618 0 016.96 3.681a4.618 4.618 0 012.627-1.493 4.618 4.618 0 012.728 0zm1.035 1.34a3.08 3.08 0 00-2.07 0 3.08 3.08 0 00-1.75 1.003 3.08 3.08 0 00-1.003 1.75c-.126.614-.194 1.253-.206 1.898-.012.645-.012 1.886 0 2.531.012.645.08 1.284.206 1.898a3.08 3.08 0 001.003 1.75 3.08 3.08 0 001.75 1.003 3.08 3.08 0 002.07 0 3.08 3.08 0 001.75-1.003 3.08 3.08 0 001.003-1.75c.126-.614.194-1.253.206-1.898.012-.645.012-1.886 0-2.531a11.75 11.75 0 00-.206-1.898 3.08 3.08 0 00-1.003-1.75 3.08 3.08 0 00-1.75-1.003zm-.034 7.366a3.247 3.247 0 100-6.494 3.247 3.247 0 000 6.494zm2.783-4.48a.928.928 0 100-1.856.928.928 0 000 1.856z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      clipRule="evenodd"
    />
  </svg>
);

const GrowvyFooterSection = () => {
  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Plans & Pricing", href: "#" },
    { name: "Jobs", href: "#" },
  ];

  const resourcesLinks = [
    { name: "Business Solutions", href: "#" },
    { name: "Success Stories", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Help Center", href: "#" },
  ];

  return (
    <footer className="bg-white text-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1 mb-10 xl:mb-0 text-center xl:text-left">
            <h2 className="text-5xl font-bold text-gray-900">Growvy</h2>
            <p className="text-base leading-relaxed max-w-xs mx-auto xl:mx-0">
              Optimize your business with smart asset management, growth
              strategies, and cutting-edge solutions.
            </p>
            <div className="flex space-x-4 justify-center xl:justify-start">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-600 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-sky-600 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedInIcon />
              </a>
            </div>
            <div className="flex justify-center xl:justify-start space-x-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Rated 4.9/5 stars by our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:col-span-2 ">
            <div className="md:grid md:grid-cols-2 md:gap-8 ">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-base text-gray-600 hover:text-green-600 hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  Resources
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {resourcesLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-base text-gray-600 hover:text-green-600 hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 md:mt-0 flex flex-col items-center md:items-start">
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Our Promise
              </h3>
              <img
                src="img8.png"
                alt="Growvy illustration or team"
                className="mt-4 w-full max-w-xs h-auto bg-transparent mix-blend-multiply object-cover"
              />
              <p className="mt-4 text-sm text-gray-600 text-center md:text-left">
                Dedicated to your success with innovative solutions and expert
                support.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 text-center">
            © {new Date().getFullYear()} Growvy Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GrowvyFooterSection;
