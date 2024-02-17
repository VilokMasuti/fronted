import { RiInstagramFill } from "@remixicon/react";
const Page10 = () => {
  return (
    <div className=" w-full h-screen bg-white ">
      <div className=" flex items-center justify-center  mt-10">
        <img
          className=" ml-36 w-[20%]"
          src=" https://24carrots.com/wp-content/themes/24carrots/img/animate/instagram-arrow.gif"
          alt=""
        />
      </div>
      <div className="  ml-36 mt-16 relative ">
        <h1 className=" text-green-950 text-8xl">Experiences </h1>
        <p className=" text-green-950 text-8xl gap-7">Designed To Be</p>
        <p className=" text-green-950 text-8xl">Shared</p>
        <p className=" text-green-800 font-serif tracking-wider text-xl mt-10">
          Follow us for more from 24 Carrots.
        </p>

        <span className=" flex mt-20 gap-5">
          <a className=" flex gap-2" href="#">
            <RiInstagramFill
              size={20} // set custom `width` and `height`
              color="black" // set `fill` color
              className="my-icon" // add custom class name
            />
            INSTAGRAM
          </a>
          <a className=" flex gap-2" href="#">
            <RiInstagramFill
              size={20} // set custom `width` and `height`
              color="black" // set `fill` color
              className="my-icon" // add custom class name
            />
            PINTERST
          </a>
        </span>
        <div className="   ml-52 skew-y-6 transform-gpu  hover:origin-top-left rotate-100 duration-1000 w-[20%] h-[50%] bg-black absolute left-[60%]  top-[-10%]">
          <img
            className=" w-full h-full object-cover"
            src=" https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/427914344_2116368565380368_6109296846542119328_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=-hEajVQYfzEAX-2MAVL&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAhyLQx6QiF55zg_zVBWAQvyN3ugLQSE6vIaIRwqS_61g&oe=65D5EA78"
            alt=""
          ></img>
        </div>
        <div className=" skew-y-6 transform-gpu  hover:origin-top-left rotate-12  duration-1000 w-[20%] h-[50%] bg-black absolute left-[60%]  top-[-10%]">
          <img
            className=" w-full h-full object-cover"
            src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/427760675_306262479105244_5451396845808876908_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=ak2lUTSvMoAAX9fO1vu&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB_tekWWeqM_RdB4Q-IxVYAMbyYrpJeBQGyv07VKddcQQ&oe=65D5667B "
            alt=""
          ></img>
        </div>
        <div className=" mt-52 skew-y-6 transform-gpu  hover:origin-top-left rotate-12  duration-1000 w-[20%] h-[50%] bg-black absolute left-[60%]  top-[-10%]">
          <img
            className=" w-full h-full object-cover"
            src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/426829332_1116681312688919_7619984973051429112_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=UYz5_iLQnS8AX_SysTe&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDjwMzewSnyln09_LL535tdD2ToEd87tXchmIPkfiRnPQ&oe=65D57E3B"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Page10;
