const Page6 = () => {
  return (
    <div className="w-full h-screen bg-stone-100 relative ">
      <div className="flex flex-col justify-center items-center gap-6 text-green-950">
        <h1 className="text-9xl ">Far More Than</h1>
        <h1 className="text-8xl">Just Business</h1>

        <p className="text-balance text-xl text-center mt-6">
          The way you do anything is the way you do everything. We haven’t
          cracked the code on catering; we simply care unreasonably about every
          aspect of what we do. We care about people as much as we care about
          details, and we absolutely refuse to compromise on making your day
          anything but the best. We’ve got your back from the initial idea to
          the final farewell!
        </p>
      </div>
      <div className=" mt-24 absolute left-[18%] ">
        <video
          className="video-stream html5-main-video"
          controls
          controlsList="nodownload"
          width="964"
          height="482"
          src="https://youtu.be/7gPP9hsV4a0"
        ></video>
      </div>
    </div>
  );
};

export default Page6;
