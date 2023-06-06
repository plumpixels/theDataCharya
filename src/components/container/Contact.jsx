import React, { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the email to the "subscribers" collection
      const docRef = await addDoc(collection(db, "subscribers"), { email });
      console.log("Email added with ID: ", docRef.id);

      // Reset the form field
      setEmail("");
      setIsSubscribed(true);
    } catch (error) {
      console.error("Error adding email: ", error);
    }
  };

  return (
    <div className="section" id="contact">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Subscribe Newsletter
        </div>
        <p className="text-sm leading-7 text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem
          minus doloribus voluptatem illo velit quia eum aperiam! Repudiandae,
          tempore. Lorem ipsum dolor sit amet.
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button
            type="submit"
            className="text-sm text-white bg-Teal sm:p-3 p-2 shadow-md font-bold"
          >
            Subscribe
          </button>
        </motion.form>
         {isSubscribed && (
          <p className="text-green-500 mt-2">Email subscribed successfully!</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
