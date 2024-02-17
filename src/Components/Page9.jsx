import { motion } from "framer-motion";

const Page9 = () => {
  const data = [
    {
      img: "https://24carrots.com/wp-content/uploads/2023/10/4.2-Lorely-Meza.jpg",
      dis: "The staff was top-notch professional, hardworking, and just a pleasure to work with",
      name: "ROBIN",
      dip: "EXECUTIVE ASSISTANT",
    },
    {
      img: "https://24carrots.com/wp-content/uploads/2023/10/4.4-Lorely-Meza.jpg",
      dis: "24 CARROTS MADE OUR WEEK-LONG EVENT A STRESS FREE AND SUCCESSFUL ONE!",
      name: "KIMBERLY",
      dip: "CRSTON",
    },
    {
      img: "https://24carrots.com/wp-content/uploads/2023/10/4.1-Kay-McCoy.jpg",
      dis: "The staff was top-notch professional, hardworking, and just a pleasure to work with.",
      name: "AMANDA & JETHRO",
      dip: "THE COLONY HOUSE",
    },
    {
      img: "https://24carrots.com/wp-content/uploads/2023/10/4.3-Desert-Born-Studios.jpg",
      dis: "From the moment we inquired with the venue, through all the planning, execution, and working with the team.",
      name: "KELLIE & PAUL",
      dip: "FRANCISCAN GARDENS",
    },
  ];

  return (
    <div className="w-full h-screen bg-[#1A4122] bg-no-repeat relative flex flex-col items-center justify-center">
      <img
        className="w-3/4 h-[20%] absolute top-[-10%]"
        src="https://24carrots.com/wp-content/themes/24carrots/img/24cemblem.svg"
        alt=""
      />
      <div className="absolute top-1/4">
        <h1 className="text-6xl text-white tracking-wider text-center">
          Our Happy Clients
        </h1>
        <p className="text-center text-balance font-semibold  text-lime-600 mt-5">
          Food may be our love language, but words of affirmation always make us
          ecstatic! Read what our happy clients have to say about how we made
          their day great.
        </p>
      </div>
      <div className="flex justify-center  mt-80 space-x-10">
        {data.map((item, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 2,
              loop: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-5"
          >
            <img
              className="w-64 h-64 object-cover rounded-md"
              src={item.img}
              alt=""
            />
            <div className="text-center">
              <h1 className="text-lg text-balance text-white">{item.dip}</h1>
              <h6 className="text-base text-white">{item.name}</h6>
              <p className="text-xs text-balance text-center text-gray-400">
                {item.dis}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page9;
