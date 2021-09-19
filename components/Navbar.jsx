import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo/teamdh_black_logo.png";
import logoWhite from "../public/assets/logo/teamdh_white_logo.png";
import { motion } from "framer-motion";
import Dropdown from "./Dropdown";
import NavDropdown from "./NavDropdown";
import MobileNav from "./MobileNav";

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
      <nav
        className={
          scroll === true
            ? "md:hidden p-2.5 glassmorphism rounded-b-lg fixed top-0 left-0 w-screen z-40"
            : "md:hidden p-2.5 rounded-b-lg w-screen border-b z-40 relative"
        }
      >
        <div className="grid grid-cols-3 items-center">
          <MobileNav />
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-row justify-center"
          >
            <Link href="/">
              <a className="logo-w-1">
                <Image width={60} height={60} src={logo} alt="Team DH Logo" />
              </a>
            </Link>
          </motion.div>
          <div className="flex flex-row justify-end">
            <NavDropdown />
          </div>
        </div>
      </nav>
      {/* Mobile Navigation end here */}

      {/* Onscroll navigation start from here */}
      {scroll === true ? (
        <motion.nav
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="hidden md:block fixed w-full top-0 z-40 glassmorphism bg-opacity-95"
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
              <div className="flex flex-row">
                <div className="flex flex-row justify-center items-center">
                  <i className="fad fa-home-lg-alt text-xs text-blue-400"></i>
                  <Link href="/">
                    <a className="pl-1 pr-3 lg:pr-4 mr-2 font-Inter font-medium text-sm lg:text-sm tracking-wider text-black">
                      Home
                    </a>
                  </Link>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <i className="fad fa-layer-group text-xs text-blue-400"></i>
                  <Link href="/">
                    <a className="pl-1 pr-3 lg:pr-4 mr-2 font-Inter font-medium text-sm lg:text-sm tracking-wider text-black">
                      <div className="dropdown dropdown-hover">
                        <h1>Services</h1>
                        <ul
                          tabIndex="0"
                          className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                        >
                          <li>
                            <a>Item 1</a>
                          </li>
                          <li>
                            <a>Item 2</a>
                          </li>
                          <li>
                            <a>Item 3</a>
                          </li>
                        </ul>
                      </div>
                      <i className="fad fa-chevron-down text-xs text-black ml-1"></i>
                    </a>
                  </Link>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <i className="fad fa-images text-xs text-blue-400"></i>
                  <Link href="/">
                    <a className="pl-1 pr-3 lg:pr-4 mr-2 font-Inter font-medium text-sm lg:text-sm tracking-wider text-black">
                      Projects
                    </a>
                  </Link>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <i className="fad fa-users text-xs text-blue-400"></i>
                  <Link href="/">
                    <a className="pl-1 pr-3 lg:pr-4 mr-2 font-Inter font-medium text-sm lg:text-sm tracking-wider text-black">
                      Members
                    </a>
                  </Link>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <i className="fad fa-info-circle text-xs text-blue-400"></i>
                  <Link href="/">
                    <a className="pl-1 pr-3 lg:pr-4 mr-2 font-Inter font-medium text-sm lg:text-sm tracking-wider text-black">
                      About us
                    </a>
                  </Link>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <i className="fas fa-phone-alt text-xs text-blue-400"></i>
                  <Link href="/">
                    <a className="pl-1 pr-3 lg:pr-4 mr-2 font-Inter font-medium text-sm lg:text-sm tracking-wider text-black">
                      Contact us
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center">
                <Dropdown />
                <div className="ml-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link href="/login">
                      <a>
                        <button
                          className="uni-gradient-bg font-Inter text-white active:bg-blueGray-600 font-medium lg:text-sm text-xs px-6 py-3 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Login <i className="fad fa-sign-in-alt"></i>
                        </button>
                      </a>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.nav>
      ) : null}
      {/* Onscroll navigation end here */}

      <nav className="hidden md:block border-b rounded-md">
        <div className="container m-auto p-2.5 md:pl-0 md:pr-0">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center items-center">
              <Link href="/">
                <a className="logo-w-2">
                  <Image width={70} height={70} src={logo} alt="Team DH Logo" />
                </a>
              </Link>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row justify-center items-center">
                <i className="fad fa-home-lg-alt text-xs text-blue-400"></i>
                <Link href="/projects/index.html">
                  <a className="pl-1 pr-3 lg:pr-4 mr-2 font-Inter font-medium text-sm lg:text-sm tracking-wider text-black">
                    Home
                  </a>
                </Link>
              </div>
              <div className="flex flex-row justify-center items-center">
                <i className="fad fa-layer-group text-xs text-blue-400"></i>
                <Link href="/">
                  <a className="pl-1 pr-3 lg:pr-4 mr-2 font-Inter font-medium text-sm lg:text-sm tracking-wider text-black">
                    <div className="dropdown dropdown-hover">
                      <h1>Services</h1>
                      <ul
                        tabIndex="0"
                        className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a>Item 1</a>
                        </li>
                        <li>
                          <a>Item 2</a>
                        </li>
                        <li>
                          <a>Item 3</a>
                        </li>
                      </ul>
                    </div>
                    <i className="fad fa-chevron-down text-xs text-black ml-1"></i>
                  </a>
                </Link>
              </div>
              <div className="flex flex-row justify-center items-center">
                <i className="fad fa-images text-xs text-blue-400"></i>
                <Link href="/">
                  <a className="pl-1 pr-3 lg:pr-4 mr-2 font-Inter font-medium text-sm lg:text-sm tracking-wider text-black">
                    Projects
                  </a>
                </Link>
              </div>
              <div className="flex flex-row justify-center items-center">
                <i className="fad fa-users text-xs text-blue-400"></i>
                <Link href="/">
                  <a className="pl-1 pr-3 lg:pr-4 mr-2 font-Inter font-medium text-sm lg:text-sm tracking-wider text-black">
                    Members
                  </a>
                </Link>
              </div>
              <div className="flex flex-row justify-center items-center">
                <i className="fad fa-info-circle text-xs text-blue-400"></i>
                <Link href="/">
                  <a className="pl-1 pr-3 lg:pr-4 mr-2 font-Inter font-medium text-sm lg:text-sm tracking-wider text-black">
                    About us
                  </a>
                </Link>
              </div>
              <div className="flex flex-row justify-center items-center">
                <i className="fas fa-phone-alt text-xs text-blue-400"></i>
                <Link href="/">
                  <a className="pl-1 pr-3 lg:pr-4 mr-2 font-Inter font-medium text-sm lg:text-sm tracking-wider text-black">
                    Contact us
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <Dropdown />
              <div className="ml-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href="/login">
                    <a>
                      <button
                        className="uni-gradient-bg font-Inter text-white active:bg-blueGray-600 font-medium lg:text-sm text-xs px-6 py-3 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Login <i className="fad fa-sign-in-alt"></i>
                      </button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
