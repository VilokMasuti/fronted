const Page4 = () => {
  return (
    <div className=" w-full h-screen relative mt-[15%]">
      <div>
        <img
          className=" w-full h-full object-cover "
          src="https://24carrots.com/wp-content/uploads/2023/10/unforegetable-banner.png "
          alt=""
        />
      </div>
      <div className=" absolute  left-[25%]  top-[60%]  w-[50%] h-[80%]   bg-white  rounded-t-full ">
        <div className=" flex  flex-col mt-11 absolute  items-center justify-center   gap-5 ">
          <span className="  text-xl text-gray-500 "> VENUES</span>
          <span className=" text-7xl first-line:  text-green-950">
            Unforgettable
          </span>
          <span className=" text-6xl first-line:  text-green-950"> Venues</span>
          <p className="   text-balance pl-[40px] text-center    tracking-wider mt-5 text-green-800">
            24 Carrots is the exclusive or preferred caterer at Southern
            California’s most spectacular properties. From intimate understated
            spaces to large and luxurious, we’ll help you find the event venue
            that makes your heart skip a beat.
          </p>
          <button className=" hover:bg-orange-600 ease-in-out duration-700 rounded-full px-3 py-2    text-white bg-orange-700  absolute left-[40%] top-[130%] outline-orange-500 text-xl ">
            EXPLORE VENUES
            <span className=" hover: ease-in-out rounded-t-lg duration-150 ">
              ➜
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page4;
