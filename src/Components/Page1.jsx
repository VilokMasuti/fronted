const Page1 = () => {
  return (
    <div className=" w-full  h-full  object-cover mt-5  relative ">
      <video
        className="shadow-md overflow-clip min-h-[500px]"
        autoPlay
        muted
        loop
        playsInline
        poster="https://24carrots.com/wp-content/video/24carrtos-home-banner-poster.jpg"
      >
        <source
          src="https://24carrots.com/wp-content/video/24carrtos-home-banner.mp4"
          type="video/mp4"
        />
      </video>
      <h1 className=" text-9xl text-white absolute top-1/2 left-[20%] leading-tight shrink show">
        Simply the Finest
      </h1>
    </div>
  );
};

export default Page1;
