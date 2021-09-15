import Homepage from "../page/Homepage";
import svglogo from "../public/assets/loader/loader.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [preloader, setPreloader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(true);
    }, 2000);
  });
  return (
    <div>
      {preloader !== true ? (
        <div className="bg-white flex flex-col justify-center items-center w-screen h-screen fixed top-0 z-50">
          <motion.div
            initial={{ scale: 0.5, opacity:0 }}
            animate={{ scale: 1, opacity:1 }}
            transition={{ duration: 1 }}
            className="bg-white flex flex-col justify-center items-center w-screen h-screen fixed top-0 z-50"
          >
            <Image width={200} height={200} src={svglogo} alt="svg logo" />
            <div>
              <h1 className="-mt-5">Loading...</h1>
            </div>
          </motion.div>
        </div>
      ) : null}
      <div>
        <Homepage />
      </div>
    </div>
  );
}
