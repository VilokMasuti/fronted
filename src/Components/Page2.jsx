const Page2 = () => {
  return (
    <main className=" flex justify-between gap-5">
      <div className="w-[50%]   h-screen mt-20 ml-20  relative">
        <h4 className=" absolute pl-[99px]   text-[30px]  opacity-30 text-gray-40">
          WELCOME TO 24 CARROTS
        </h4>
        <h1 className=" absolute top-10  left-5 flex flex-col gap-3  text-green-950">
          <span className=" text-8xl pr-5 tracking-wider"> Remarkable</span>
          <span className=" text-8xl tracking-tight pl-14">Catering &</span>
          <span className=" text-8xl tracking-tighter pl-[120px]">Events</span>
        </h1>
        <span className="whitespace-normal absolute top-[55%]  right-[30%] ">
          <h6 className=" overflow-hidden text-balance  text-green-900 text-[1em] text-center ">
            24 Carrots is the premier catering and events company of choice in
            Southern California. We create remarkable experiences by offering
            the finest quality foods and providing unsurpassed personalized
            service, driven by our passion for life’s special occasions.
          </h6>
        </span>

        <button className="  hover:bg-orange-600 ease-in-out duration-700 rounded-full px-3 py-2  font-semibold  text-white bg-orange-700  absolute  left-[190px] top-[72%]">
          GET IN TOUCH
        </button>
      </div>
      <div className="  w-[30%] h-[50%]   mt-24  hover:origin-top-left rotate-12  duration-1000  absolute left-[60%]   ">
        <img
          className=" w-full h-full object-cover origin-bottom  overflow-x-auto overflow-y-hidden  skew-y-12"
          src="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg"
          alt=""
        />
        <div className=" mt-52 skew-y-6 transform-gpu  hover:origin-bottom  rotate-45  duration-1000 w-[40%] h-[50%] bg-black absolute left-[60%]  top-[-10%]">
          <img
            className=" w-full h-full object-cover"
            src="https://24carrots.com/wp-content/uploads/2023/10/1.2-Holly-Sigafoos-Photo.jpg"
            alt=""
          ></img>
        </div>
      </div>

      <div className="  mt-96 hover:origin-bottom-left skew-y-12 rotate-12  duration-1000 w-[20%] h-[50%] absolute left-[60%]  top-[120%]">
        <img
          className=" w-full h-full object-cover"
          src="https://24carrots.com/wp-content/uploads/2023/10/1.4-Lorely-Meza.jpg "
          alt=""
        ></img>
      </div>
    </main>
  );
};

export default Page2;
