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
            <div className="rounded-lg h-full">
              <img
                src={DSC_4944}
                alt=""
                className="rounded-lg lg:h-[150px] object-cover"
              />
            </div>
            <div className="rounded-lg h-full">
              <img
                src={DSC_4773}
                alt=""
                className="rounded-lg lg:h-[150px] object-cover"
              />
            </div>
            <div className="rounded-lg h-full">
              <img
                src={DSC_4931}
                alt=""
                className="rounded-lg lg:h-[150px] object-cover"
              />
            </div>
            <div className="rounded-lg h-full">
              <img
                src={DSC_4917}
                alt=""
                className="rounded-lg lg:h-[150px] object-cover"
              />
            </div>
            <div className="rounded-lg h-full">
              <img
                src={DSC_4948}
                alt=""
                className="rounded-lg lg:h-[150px] object-cover"
              />
            </div>
            <div className="rounded-lg h-full">
              <img
                src={DSC_4964}
                alt=""
                className="rounded-lg lg:h-[150px] object-cover"
              />
            </div>
          </div>

          <div className=" lg:w-[50%] w-full flex flex-col gap-3 items-center">
            <h1 className="gradientText capitalize font-bold text-[25px] w-full leading-8 tracking-wide text-center">
              Federal Government College Odogbolu, '99
            </h1>

            <div className="text-justify text-xs text-gray-600">
              <p>
                Established in [Year], Federal Government College Odogbolu has
                been a beacon of academic excellence and personal growth. Our
                alumni community, formed by the graduating class of 1999,
                proudly represents the values and ideals instilled in us during
                our formative years at the college. Our mission is to foster a
                strong network of alumni, support our alma mater, and contribute
                positively to society. We believe in the power of collaboration
                and mentorship, and our association serves as a platform for
                members to connect, share experiences, and support one another.
                Our Vision To create a thriving alumni community that upholds
                the legacy of Federal Government College Odogbolu, empowering
                future generations through mentorship, collaboration, and
                philanthropic initiatives.
              </p>
              <p className="px-2">
                Our Values
                <ul className="list-disc list-inside ">
                  <li>
                    <b>Community:</b>
                    We believe in the strength of our network and aim to create
                    a supportive environment for all members.
                  </li>
                  <li>
                    <b>Integrity:</b>
                    Integrity: We uphold the highest ethical standards in our
                    actions and interactions.
                  </li>
                  <li>
                    <b>Excellence:</b> We strive for excellence in all our
                    endeavors,
                  </li>
                </ul>
              </p>
              <p className="">
                reflecting the values we learned at FGC Odogbolu. Get Involved
                We invite all alumni to join us in our mission. Whether you are
                looking to reconnect with old friends, mentor current students,
                or contribute to community projects, there are many ways to get
                involved. Stay updated on our events, initiatives, and news by
                following us on our social media platforms and subscribing to
                our newsletter. Together, we can continue to make a positive
                impact in our communities and beyond. Thank you for being a part
                of the Federal Government College Odogbolu, '99 alumni family.
                We look forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
