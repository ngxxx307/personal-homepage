import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ScrollToAnchor from "./ScrollToAnchor";

const Navbar = () => {
  ScrollToAnchor()

  const navbarData = [
    {
      id: 1,
      name: "Home",
      location: "#Home",
    },
    {
      id: 2,
      name: "About",
      location: "#About",
    },
    {
      id: 3,
      name: "Blog",
      location: "Blog"
    },
    {
      id: 4,
      name: "Contact",
      location: "#Contact"
    },
  ];

  const { hash, pathname, search } = location;
  const navigate = useNavigate()

  const [clicked, setClicked] = useState(pathname.includes("/Blog")? 3: 1);
  const [scrolled, setScrolled] = useState(false);

  // Add Grey Background if scrolled
  const handleScrolled = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Listening to scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <div className="w-full sticky top-0 justify-center items-center z-10 flex ">
      <div
        className={
          !scrolled
            ? "relative w-auto mt-8 px-4 rounded-3xl h-12 flex justify-center items-center transition ease-in-out duration-300 z-10"
            : "relative w-auto mt-8 px-4 rounded-3xl h-12 bg-oliveGrey flex justify-center items-center transition ease-in-out duration-300 z-10"
        }
      >
        <div className="relative flex justify-center items-center">
          {navbarData.map((item) => {
            return (
              <div
                key={item.id}
                className="flex h-8 w-20 lg:w-28 justify-center items-center"
              >
                <button
                  className=" text-oliveGreen font-inter font-medium mx-20 z-20"
                  onClick={() => {
                    setClicked(item.id)
                    navigate(`/${navbarData[item.id - 1].location}`)
                  }}
                >
                  {item.name}
                </button>
              </div>
            );
          })}
          <div
            className={
              "transition-all rounded-xl bg-white opacity-60 absolute w-20 lg:w-28 h-8"
            }
            style={{ left: `${25 * clicked - 25}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
