import React from "react";
import CirclePattern from "../../assets/svg/CirclePattern";
import RectanglePattern from "../../assets/svg/RectanglePattern";

const HomePage = () => {
  return (
    <>
      <div
        name="home"
        className="w-full h-screen items-center flex lg:px-8 px-4 relative overflow-hidden"
      >
        <div className="absolute top-24 lg:left-8 left-4">
          <CirclePattern width="100" height="250" opacity="0.1" />
        </div>
        <div className="absolute bottom-4 lg:right-8 right-4 opacity-75">
          <RectanglePattern width="180" height="180" />
        </div>

        <div className="w-full z-20 lg:flex lg:flex-row flex-col justify-between">
          <div className=" lg:w-[50%] w-full flex flex-col gap-3">
            <h1 className="gradientText capitalize font-bold text-[25px] w-full leading-8 tracking-wide">
              Federal Government College Odogbolu, '99
            </h1>
            <p className="flex text-justify text-gray-800 lg:w-[78%] w-full font-medium tracking-tight leading-6">
              Embracing the proud legacy of Federal Government College Odogbolu,
              as an alumnus of the class of '99, I extend warm congratulations
              to my fellow graduates. With each passing year since our
              graduation, our collective impact continues to resonate across
              diverse fields. Together, we uphold the values instilled by our
              alma mater, shaping the future through our achievements and
              commitment to service.
            </p>

            <div className=" w-full flex py-1 lg:items-start items-center">
              <button className="h-12 px-4 rounded-full text-white flex items-center justify-center bg-[#175F00] hover:scale-105 duration-200 ">
                Get to Know us
              </button>
            </div>
          </div>
          {/* <div>image</div> */}
        </div>
        
      </div>
    </>
  );
};

export default HomePage;
