import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai"
import LOGO from "../../assets/img/FEGO_99_Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menus = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <>
      <div className="w-full h-14 fixed z-50 transition-shadow duration-400 bg-white flex justify-between text-center lg:px-8 px-4 items-center shadow-md shadow-gray-200">
        <Link
          to="home"
          smooth
          duration={700}
          className="flex text-center items-center gap-2 font-semibold cursor-pointer"
        >
          <img src={LOGO} className="h-[40px] w-[40px]" alt="logo" />
          <span className="text-sm font-semibold cursor-pointer">FEGO 99</span>
        </Link>

        <div>
          <ul className="hidden sm:hidden md:hidden lg:flex gap-4 text-lg font-semibold ">
            {menus?.map(({ id, link }) => (
              <span
                key={id}
                className={`capitalize cursor-pointer hover:scale-105 duration-200 px-2`}
              >
                <Link to={link} smooth duration={700}>
                  {link}
                </Link>
              </span>
            ))}
          </ul>
        </div>

        <div className=" lg:hidden flex">
          <button
            onClick={() => setNav(!nav)}
            className=" bg-transparent border-2 border-black shadow-md shadow-gray-200 h-[40px] w-[40px] text-lg rounded-md flex items-center text-black justify-center cursor-pointer hover:scale-105 duration-200"
          >
            <AiOutlineMenu size={22} />
          </button>
        </div>

        {nav && (
          <ul className="absolute top-0 right-0 w-[67%] h-screen bg-white">
            {menus.map(({ id, link }) => (
              <li
                key={id}
                className="flex px-11 my-6 hover:bg-black w-full hover:text-white hover:border-l-[#306f25] hover:border-l-4"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                  className="flex capitalize p-4 gap-5 font-bold justify-center items-center text-center"
                >
                  <h3>{link}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
