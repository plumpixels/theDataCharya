import dev from "../../assets/data.png";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setErrorMessage("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signup successful
        console.log("Signup successful", userCredential.user);
        // Reset the form fields
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        // Signup failed
        setErrorMessage("User exists !");
        console.log("Signup error", error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful
        console.log("Login successful", userCredential.user);
        // Reset the form fields
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        // Login failed
        setErrorMessage("Wrong email/password");
        console.log("Login error", error);
      });
  };

  return (
    <div className="signup-container overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center h-screen overflow-y-hidden">
        <form className="w-full md:w-1/2 max-w-sm mb-10 md:mb-0">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row">
            <button
              className="w-full md:w-auto py-3 px-10 bg-Teal text-white rounded-lg text-sm font-bold transition duration-500 ease-in-out hover:border hover:border-solid hover:border-gray hover:bg-Solitude hover:text-black mb-2 md:mb-0 md:mr-2"
              onClick={handleSignup}
            >
              Sign Up
            </button>
            <button
              className="w-full md:w-auto py-3 px-10 font-bold border border-solid border-gray rounded-lg text-sm transition duration-500 ease-in-out hover:text-white hover:bg-Teal focus:outline-none focus:shadow-outline"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
          )}
        </form>
        <div className="md:w-1/3 transition duration-500 ease-in-out hover:scale-110">
          <img src={dev} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
