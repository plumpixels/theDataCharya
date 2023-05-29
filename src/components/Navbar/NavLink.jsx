import React from "react";
import { Link } from "react-scroll";
import{motion} from 'framer-motion';
const NavLink = ({ href, link }) => {
  return (
      <li className="list-none cursor-pointer mr-8">
        <motion.div whileHover={{
          scale: 1.12, color: "rgb(47,108,109)"}}>
            <Link
              to={href}
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className="font-bold transition-all duration-20">
              {link}
           </Link>
        </motion.div>  
     </li> 
  );
};

export default NavLink;
