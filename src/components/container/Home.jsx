import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center mt-12">
        <div className=" mb-5">
          <div className="font-bold text-base text-Teal mb-3 transition duration-300 ease-in-out hover:text-purple-900">
            {" "}
            #e-learning_partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            A new way <br /> to learn online
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm mr-10 hover:font-bold transition duration-800 ease-in-out">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            officia sit vitae quo, eum similique?
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold transition duration-500 ease-in-out text-white bg-Teal rounded-lg mr-4 text-sm  hover:border hover:border-solid hover:border-gray hover:bg-Solitude hover:text-black">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm transition duration-500 ease-in-out hover:text-white hover:bg-Teal focus:outline-none focus:shadow-outline">
              Discover
            </button>
          </div>
        </div>
        <div className="md:w-[65%] ml-6 mt-2 mb-3 transition duration-500 ease-in-out hover:scale-110">
          <img src={hero} alt="" />
        </div>
      </div>
      <div className="mt-32">
        <p className="text-center text-xl">
          <div className="font-bold">We collaborate with{" "}</div>
          <span className="text-Teal">
              <Typewriter 
                options={{autoStart: true, loop: true }} 
                onInit={(typewriter) => {typewriter.typeString("100+ leading universities").pauseFor(2000).deleteAll().typeString("100+ leading companies").start().pauseFor(2000); }} />
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2 mt-3"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
