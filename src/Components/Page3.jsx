const Page3 = () => {
  return (
    <div
      className=" w-full flex items-center justify-center  h-screen bg-no-repeat relative mt-10"
      style={{
        backgroundImage: `url('https://24carrots.com/wp-content/themes/24carrots/img/big-carrot.svg ')`,
      }}
    >
      <div className="  w-[30%] h-[100vh]    rounded-t-full ">
        {
          <img
            className=" w-full h-full object-cover  rounded-t-full "
            src=" https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg"
            alt=""
          ></img>
        }
      </div>
      <div className=" font-serif flex flex-col  font-extralight mb-[20%] ">
        <span className="  text-green-950  ">
          <h1 className="text-8xl tracking-tight pl-14">Making Every</h1>
        </span>
        <span className=" text-green-950">
          <h1 className="text-8xl tracking-tight pl-14">Experience</h1>
        </span>
        <span className=" text-green-950">
          <h1 className="text-8xl tracking-tight pl-14">Magical</h1>
        </span>
        <div className="  ml-12 mt-14  ">
          <ul className=" font-sans; flex flex-col gap-10    ">
            <a
              className=" text-[18px] hover:text-orange-500  duration-700   text-black"
              href="#"
            >
              Weddings
            </a>
            <a
              className=" text-[28px]   hover:text-orange-500  duration-700 text-black  opacity-10"
              href="#"
            >
              Social
            </a>
            <a
              className="text-[28px]  opacity-10   hover:text-orange-500  hover:opacity-90 duration-1000"
              href="#"
            >
              Corporate
            </a>
            <a
              className="text-[28px]  opacity-10  hover: text-orange-400  hover:opacity-90 duration-1000"
              href="#"
            >
              Venus
            </a>
          </ul>
          <div className=" flex flex-col absolute left-1/2 mt-5 ml-[120px] top-[39%] gap-10 ">
            <span className=" text-green-900   tracking-wider text-xl">
              EXCEPTIONAL WEDDINGS
            </span>
            <span className=" text-balance  text-xl text-green-800">
              The most important day of your life, is ours too. Your wedding
              should be the ultimate celebration of your relationship, and our
              team of experts guide you through the process, offering peace of
              mind and a remarkable experience.
            </span>
          </div>
          <button className=" hover:bg-orange-600 ease-in-out duration-700 rounded-full px-3 py-2    text-white bg-orange-700  absolute left-[65%] outline-orange-500 text-xl ">
            Learn more ➜
          </button>
        </div>
      </div>
    </div>
  );
};
export default Page3;
