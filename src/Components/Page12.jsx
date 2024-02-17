import { motion } from "framer-motion-3d";
const Page12 = () => {
  return (
    <div
      style={{ backgroundColor: " #E9E4E0" }}
      className=" w-full h-screen mt-64 "
    >
      <motion.div
        initial={{ x: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: "4", delay: "1" }}
        className="  relative"
      >
        <img
          className="  absolute  top-96  left-[15%]
          w-[70%]"
          src="https://24carrots.com/wp-content/themes/24carrots/img/24carrots.svg"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Page12;
