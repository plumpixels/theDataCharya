import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants2 = {
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
const variants = {
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

const Courses = () => {
  
  const { ref, inView } = useInView({
    threshold: 0.5
  });

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
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="section" id="courses">
      <div className="text-center">
        <motion.div className="sm:text-3xl text-2xl font-bold mb-5" ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants2}>
          Our Top <span className="text-Teal">Categories</span>
        </motion.div>
        <motion.p className="text-sm text-gray leading-7 max-w-[700px] mx-auto" ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          tempora illo laborum ex cupiditate tenetur doloribus non velit atque
          amet repudiandae ipsa modi numquam quas odit optio, totam voluptate
          sit! Lorem ipsum dolor sit amet.
        </motion.p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>
      <div className="text-xl font-bold mt-32">Most Popular Courses</div>
      <div className="mt-12 overflow-x-hidden w-full  relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
