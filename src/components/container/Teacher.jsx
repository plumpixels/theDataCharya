import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Teacher = () => {
  const { ref, inView } = useInView({
    threshold: 0.1
  });

  return (
    <div className="section" id="teachers">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5" >
            The <span className="text-Teal">Instructors</span><br/> at our platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold transition duration-500 ease-in-out hover:border hover:border-solid hover:border-gray hover:bg-Solitude hover:text-black" >
            Get Started
          </button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1 " >
          <img src={teacher1} alt="" className="transition duration-500 ease-in-out hover:scale-110"/>
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5" >
            Apply to become an<span className="text-Teal"><br />Instructor</span>
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold transition duration-500 ease-in-out hover:border hover:border-solid hover:border-gray hover:bg-Solitude hover:text-black">
            Get Started
          </button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="" className="transition duration-500 ease-in-out hover:scale-110" />
        </div>
        <div className="pl-3">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5" >
            Our <span className="text-Teal">Developer</span><br/>
          </div>
          <p className="text-sm leading-7 text-gray mb-5" >
            Amber Bansal is a 16-year-old free-lancer, who is a self-taught web developer and also skilled in pyhton, java and js.
            They have a strong command of React and are experienced in both frontend designing & development. 
            Amber's passion for learning and problem-solving sets them apart as a dedicated and talented dev.
          </p>
          <a href="mailto: amberbansal1235@gmail.com">
            <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold transition duration-500 ease-in-out hover:border hover:border-solid hover:border-gray hover:bg-Solitude hover:text-black">
            Contact Him
          </button>
          </a>
        </div>
        <div className="p-2 md:w-3/4 sm:row-start-3 mb-5">
          <img src={teacher1} className="transition duration-500 ease-in-out hover:scale-110" />
        </div>
      </div>
      <div className="text-center my-8 mb-5 mt-20 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Teal ">Asked Questions...</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;
