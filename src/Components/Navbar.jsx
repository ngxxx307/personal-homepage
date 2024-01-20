import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navbarData = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Blog",
    },
    {
      id: 4,
      name: "Contact",
    },
  ];

  const { hash, pathname, search } = location;
  const navigate = useNavigate()

  const [clicked, setClicked] = useState(pathname.includes("/Blog")? 3: 1);
  const [scrolled, setScrolled] = useState(false);

  console.log(hash, pathname, search )

  const handleScrolled = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);
  
  useEffect(() => {
    console.log(navbarData[clicked - 1].name)
    try{
      document.getElementById(navbarData[clicked - 1].name).scrollIntoView({behavior: "smooth", block: "center",})
    } catch (e){
      console.log(e)
    }
  }, [clicked])

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

                    if (pathname === '/'){
                      item.name !== "Blog" ? document.getElementById(item.name).scrollIntoView({behavior: "smooth", block: "center",})
                      : navigate('/Blog')
                    } 

                    if (pathname.includes('/Blog')) {
                      item.name !== "Blog" ? navigate('/')
                      : navigate('/Blog')
                    }
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
