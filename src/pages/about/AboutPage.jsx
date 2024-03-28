import React from "react";
import LOGO from "../../assets/img/FEGO_99_Logo.png";
import DSC_4962 from "../../assets/img/DSC_4962.jpg";
import DSC_4944 from "../../assets/img/DSC_4944.jpg";
import DSC_4773 from "../../assets/img/DSC_4773.jpg";
import DSC_4931 from "../../assets/img/DSC_4931.jpg";
import DSC_4917 from "../../assets/img/DSC_4917.jpg";
import DSC_4948 from "../../assets/img/DSC_4948.jpg";
import DSC_4964 from "../../assets/img/DSC_4964.jpg";

const AboutPage = () => {
  return (
    <>
      <div
        name="about"
        className="w-full lg:h-screen items-center flex lg:px-8 px-4 relative"
      >
        <div className="w-full lg:mt-0 mt-[100px] md:mt-[200px] sm:mt-0 z-20 lg:flex lg:flex-row flex-col justify-between gap-4">
          <div className="grid grid-cols-2 gap-3 ">
            <div className="border-4 rounded-lg h-full">
              <img
                src={DSC_4944}
                alt=""
                className="rounded-lg lg:h-[150px] object-cover"
              />
            </div>
            <div className="border-4 rounded-lg h-full">
              <img
                src={DSC_4773}
                alt=""
                className="rounded-lg lg:h-[150px] object-cover"
              />
            </div>
            <div className="border-4 rounded-lg h-full">
              <img
                src={DSC_4931}
                alt=""
                className="rounded-lg lg:h-[150px] object-cover"
              />
            </div>
            <div className="border-4 rounded-lg h-full">
              <img
                src={DSC_4917}
                alt=""
                className="rounded-lg lg:h-[150px] object-cover"
              />
            </div>
            <div className="border-4 rounded-lg h-full">
              <img
                src={DSC_4948}
                alt=""
                className="rounded-lg lg:h-[150px] object-cover"
              />
            </div>
            <div className="border-4 rounded-lg h-full">
              <img
                src={DSC_4964}
                alt=""
                className="rounded-lg lg:h-[150px] object-cover"
              />
            </div>
          </div>
          <div className=" lg:w-[50%] w-full border-4 flex flex-col gap-3 items-center">
            <h1 className="gradientText capitalize font-bold text-[25px] w-full leading-8 tracking-wide text-center">
              Federal Government College Odogbolu, '99
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
