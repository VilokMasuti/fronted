const Page11 = () => {
  return (
    <div className=" w-full h-[10vh]  flex mt-52">
      <div className=" w-[50%] h-[70vh] bg-orange-700">
        <h1 className=" text-7xl  mt-20 tracking-wider text-white text-center text-balance leading-tight  font-serif  ">
          Endless Inspiration
        </h1>
        <p className=" mt-10 text-white text-balance text-center  font-semibold">
          Sign up to our newsletter for fresh updates, encouragement, and
          exclusive insights.
        </p>
        <span className="  ml-20">
          <input
            className="  border-none mt-16 w-[48%] px-4 py-3 rounded-full text-orange-600 "
            type=" text"
            placeholder=" ENTER  YOUR EMAIL"
          />
        </span>
        <button className="bg-orange-900 w-[15%] ease-in-out duration-700 rounded-full px-3 py-2  font-semibold  text-white  ml-7">
          Sign Up
        </button>
      </div>
      <div className=" w-[50%] h-[70vh] ">
        <img src=" https://24carrots.com/wp-content/uploads/2023/08/signup.png" />
      </div>
    </div>
  );
};

export default Page11;
