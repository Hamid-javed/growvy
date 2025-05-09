const Navbar = () => {
  return (
    <ul className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 py-5 border-2 border-black w-[90vw] md:max-w-[70vw] mx-auto rounded-2xl my-6 font-bold text-base md:text-lg px-6 md:px-12">
      <li className="underline">
        <a href="/">Home</a>
      </li>
      <li className="underline">
        <a href="/jobs">Jobs</a>
      </li>
      <li className="underline">
        <a href="/success">Success</a>
      </li>
      <li className="underline">
        <a href="/services">Services</a>
      </li>
      <li className="underline">
        <a href="/pricing">Pricing</a>
      </li>
    </ul>
  );
};

export default Navbar;
