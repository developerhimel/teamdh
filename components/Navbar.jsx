import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo/teamdh_black_logo.png";
import logoWhite from "../public/assets/logo/teamdh_white_logo.png";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY;
      if (scrollCheck >= 100) {
        setScroll(true);
      } else if (scrollCheck <= 100) {
        setScroll(false);
      }
    });
  });
  return (
    <>
      {/* Mobile Navigation Start from here */}
      <nav className="md:hidden p-2.5">
        <Link href="/">
          <a>
            <Image width={70} height={70} src={logo} alt="Team DH Logo" />
          </a>
        </Link>
      </nav>
      {/* Mobile Navigation end here */}

      {/* Onscroll navigation start from here */}
      {scroll === true ? (
        <motion.nav
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="hidden md:block fixed w-full top-0 z-50 glassmorphism bg-opacity-95 shadow-sm"
        >
          <div className="container m-auto p-2.5 md:pl-0 md:pr-0">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-center items-center">
                <Link href="/">
                  <a className="logo-w">
                    <Image
                      width={50}
                      height={50}
                      src={logo}
                      alt="Team DH Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="">
                <Link href="/">
                  <a className="pl-2 pr-2 ml-2 mr-2 font-THICCCBOI font-black text-base tracking-wider">
                    Home
                  </a>
                </Link>
                <Link href="/">
                  <a className="pl-2 pr-2 ml-2 mr-2 font-THICCCBOI font-black text-base tracking-wider">
                    Members
                  </a>
                </Link>
                <Link href="/">
                  <a className="pl-2 pr-2 ml-2 mr-2 font-THICCCBOI font-black text-base tracking-wider">
                    About
                  </a>
                </Link>
                <Link href="/">
                  <a className="pl-2 pr-2 ml-2 mr-2 font-THICCCBOI font-black text-base tracking-wider">
                    Services
                  </a>
                </Link>
                <Link href="/">
                  <a className="pl-2 pr-2 ml-2 mr-2 font-THICCCBOI font-black text-base tracking-wider">
                    Portfolios
                  </a>
                </Link>
                <Link href="/">
                  <a className="pl-2 pr-2 ml-2 mr-2 font-THICCCBOI font-black text-base tracking-wider">
                    Contact us
                  </a>
                </Link>
              </div>
              <div className="">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href="/">
                    <a>
                      <button
                        className="bg-blue-500 font-THICCCBOI text-white active:bg-blueGray-600 font-black uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Login <i class="fad fa-sign-in-alt"></i>
                      </button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.nav>
      ) : null}
      {/* Onscroll navigation end here */}

      <nav className="hidden md:block">
        <div className="container m-auto p-2.5 md:pl-0 md:pr-0">
          <div className="flex flex-row justify-between items-center">
            <div className="">
              <Link href="/">
                <a>
                  <Image width={70} height={70} src={logo} alt="Team DH Logo" />
                </a>
              </Link>
            </div>
            <div className="">
              <p>Home</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
