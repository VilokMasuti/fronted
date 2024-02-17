import { useEffect, useState } from "react";

import a from "../assets/a.jpg";

import c from "../assets/c.jpg";
import d from "../assets/d.jpg";
import e from "../assets/e.jpg";
const images = [a, c, d, e];
const Page8 = () => {
  const [curent, setCurent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurent(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className=" w-full h-screen ml-12 flex items-center  justify-between  gap-24">
      <span className=" flex flex-col gap-10">
        <h4 className=" text-5xl  text-green-950">Gourmet Catering</h4>
        <p className=" text-balance text-center pl-9 w-[80%]">
          Our professionally-trained culinary team is passionate and proud of
          our diverse and thoughtful menu, always cooking up something that
          aligns with your great taste.
        </p>
        <button className="  hover:text-orange-600 duration-700 rounded-full px-3 py-2  w-[60%]  ml-16 text-white outline outline-offset-2 outline-orange-600">
          Learn more ➜
        </button>
        <h4 className=" text-5xl pl-[70px]  text-green-950">Bar Service</h4>
        <p className=" text-balance text-center w-[70%] pl-[69px]">
          Our sophisticated flavor expertise enables us to create inventive
          concoctions that generate buzz in more ways than one!
        </p>
        <button className="  hover:text-orange-600 duration-700 rounded-full px-3 py-2  w-[60%]  ml-16 text-white outline outline-offset-2 outline-orange-600">
          Learn more ➜
        </button>
      </span>
      <div className="  w-[60%] h-[100vh]  mt-[-20%]  rounded-t-full ">
        {
          <img
            className=" w-full h-full  ml-[1%]  object-cover  rounded-t-full "
            src={images[curent]}
            alt=""
          ></img>
        }
      </div>
      <span className=" flex flex-col gap-10">
        <h4 className=" text-6xl  text-green-950 pl-20">Staffing</h4>
        <p className=" text-balance text-center w-[70%]">
          The hand-selected team at 24 Carrots are just as important to our
          reputation as our gourmet food. Our staff is certainly the best at
          what they do, and you’ll work with professionals who genuinely care
          about the success of your event!
        </p>
        <button className="  hover:text-orange-600 duration-700 rounded-full px-3 py-2  w-[40%]  ml-16 text-white outline outline-offset-2 outline-orange-600">
          Learn more ➜
        </button>

        <h4 className=" text-6xl  text-green-950  ">Event Production</h4>
        <p className=" text-balance text-center w-[70%] pl-5">
          Our professionally-trained culinary team is passionate and proud of
          our diverse and thoughtful menu, always cooking up something that
          aligns with your great&nbsp;taste.
        </p>
        <button className="  hover:text-orange-600 duration-700 rounded-full px-3 py-2  w-[40%]  ml-16 text-white outline outline-offset-2 outline-orange-600">
          Learn more ➜
        </button>
      </span>
    </div>
  );
};

export default Page8;
