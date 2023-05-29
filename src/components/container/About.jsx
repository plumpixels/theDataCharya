import about from "../../assets/About.jpg";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2
  });

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
    hidden: {
      opacity: 0,
      x: 40,
    },
  };
  const variants4 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
    hidden: {
      opacity: 0,
      y: -40,
    },
  };

  const variants2 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
    hidden: {
      opacity: 0,
      x: -40,
    },
  };

  const variants3 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };


  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <motion.div className="border-[3px] border-solid border-Teal rounded-lg" ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants4}>
          <img src={about} alt="" className="p-4 transition duration-500 ease-in-out hover:scale-95"/>
        </motion.div>
        <div>
          <motion.div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5" ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants3}>
            We provide the <br /> best{" "}
            <span className="text-Teal">online courses</span>
          </motion.div>
          <motion.p
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            className="text-sm text-gray leading-7 mb-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
            totam earum. Minus deleniti repellat id! Ratione quia eum, explicabo quos
            eos magni vel corporis voluptatibus, inventore doloremque aliquam pariatur
            recusandae.
          </motion.p>
          <motion.button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold transition ease-in-out hover:text-white hover:bg-Teal focus:shadow-outline" ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants2}>
            know-more
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;
