const Nav = () => {
  return (
    <nav className=" container relative">
      <div className="flex items-center justify-center ">
        <ul className=" font-sans; flex gap-10  absolute left-11 mt-6   ml-10 ">
          <a
            className=" text-[18px] hover:text-orange-500  duration-700   text-black"
            href="#"
          >
            ABOUT
          </a>
          <a
            className=" text-[18px]   hover:text-orange-500  duration-700 text-black"
            href="#"
          >
            SERVICES
          </a>
          <a
            className="text-[18px]   hover:text-orange-500  duration-700 text-black"
            href="#"
          >
            EVENTS{" "}
          </a>
        </ul>
        <img
          className=" mt-6 mr-6"
          src="https://24carrots.com/wp-content/themes/24carrots/img/24carrots.svg"
          alt=""
        />
        <ul className="  flex gap-6 absolute  left-[66%] ">
          <a
            className=" duration-700  hover:text-orange-500 text-[18px] text-black"
            href="#"
          >
            VENUES
          </a>
          <a
            className="  hover:text-orange-500 durtext-[18px] text-black"
            href="#"
          >
            CAREERS
          </a>
          <a
            className="  hover:text-orange-500  duration-700text-[18px]text-black"
            href="#"
          >
            EVENTS
          </a>
        </ul>
        <button className=" hover:bg-orange-600 ease-in-out duration-700 rounded-full px-3 py-2  font-semibold  text-white bg-orange-700  absolute left-[85%]">
          GET IN TOUCH
        </button>
      </div>
    </nav>
  );
};

export default Nav;
